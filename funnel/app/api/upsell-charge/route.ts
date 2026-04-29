import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { paymentIntentId, plan } = await request.json();

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Missing payment intent ID' },
        { status: 400 }
      );
    }

    // Retrieve the PaymentIntent with expanded payment_method
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ['payment_method'],
    });

    const customerId = paymentIntent.customer as string;
    const paymentMethodId = (paymentIntent.payment_method as Stripe.PaymentMethod | null)?.id;

    if (!customerId || !paymentMethodId) {
      return NextResponse.json(
        { error: 'Could not retrieve customer payment info' },
        { status: 400 }
      );
    }

    // Set the payment method as default for the customer
    await stripe.customers.update(customerId, {
      invoice_settings: { default_payment_method: paymentMethodId },
    });

    if (plan === 'one-time') {
      // One-time charge for $297
      const pi = await stripe.paymentIntents.create({
        amount: 29700,
        currency: 'usd',
        customer: customerId,
        payment_method: paymentMethodId,
        off_session: true,
        confirm: true,
        description: 'Academy Full Access',
      });

      return NextResponse.json({
        success: true,
        type: 'one-time',
        paymentIntentId: pi.id,
      });
    } else {
      // Subscription for 4x $107/mo
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: 'price_1TI2FeGnYz9WJMhz6sLkKa6N' }], // $107/mo
        default_payment_method: paymentMethodId,
        payment_settings: {
          payment_method_types: ['card'],
          save_default_payment_method: 'on_subscription',
        },
        metadata: {
          cancel_after_payments: '4',
        },
      });

      return NextResponse.json({
        success: true,
        type: 'subscription',
        subscriptionId: subscription.id,
      });
    }
  } catch (err) {
    console.error('Upsell charge error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Upsell charge failed' },
      { status: 500 }
    );
  }
}
