import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentIntentId = searchParams.get('paymentIntentId');

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Missing paymentIntentId' },
        { status: 400 }
      );
    }

    // Retrieve PaymentIntent with expanded customer
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
      expand: ['customer', 'payment_method'],
    });

    const customer = paymentIntent.customer as Stripe.Customer | null;
    const meta = paymentIntent.metadata || {};

    const email = customer?.email || meta.customerEmail || '';
    const customerName = customer?.name || meta.customerName || '';
    const firstName = customerName.split(' ')[0] || '';

    return NextResponse.json({
      status: paymentIntent.status,
      amount: paymentIntent.amount,
      customerEmail: email,
      customerName,
      firstName,
      paymentIntentId,
    });
  } catch (err) {
    console.error('get-session error:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Failed to retrieve session' },
      { status: 500 }
    );
  }
}
