import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Create or retrieve customer
    const customer = await stripe.customers.create({
      name,
      email,
    });

    // Create PaymentIntent for $27
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2700, // $27 in cents
      currency: 'usd',
      customer: customer.id,
      setup_future_usage: 'off_session', // Saves card for upsell
      description: 'The $5/Day Method',
      metadata: {
        customerName: name,
        customerEmail: email,
        product: 'fivedaymethod',
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Payment initialization failed' },
      { status: 500 }
    );
  }
}
