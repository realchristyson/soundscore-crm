'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const stripeAppearance = {
  theme: 'night' as const,
  variables: {
    colorPrimary: '#00FF7F',
    colorBackground: '#0A0A0A',
    colorText: '#F5F5F5',
    colorDanger: '#FF6B6B',
    borderRadius: '8px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  rules: {
    '.Input': {
      padding: '12px 14px',
      backgroundColor: 'rgba(0,0,0,0.4)',
      border: '1px solid rgba(255,255,255,0.15)',
    },
    '.Input:focus': {
      borderColor: '#00FF7F',
      boxShadow: '0 0 0 3px rgba(0,255,127,0.1)',
    },
  },
};

/* ─── Step 2: payment form (lives inside <Elements>) ─── */
function PaymentForm({
  clientSecret,
  onBack,
  customerName,
  customerEmail,
}: {
  clientSecret: string;
  onBack: () => void;
  customerName: string;
  customerEmail: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError('');

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message || 'Payment failed. Please try again.');
      setLoading(false);
      return;
    }

    const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      redirect: 'if_required',
    });

    if (confirmError) {
      setError(confirmError.message || 'Payment confirmation failed.');
      setLoading(false);
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      // Fire-and-forget: add buyer to GHL with "$5/Day Buyer" tag
      fetch('/api/notify-ghl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: customerName, email: customerEmail }),
      }).catch(() => {}); // don't block redirect on GHL errors

      window.location.href = `/thank-you?pid=${paymentIntent.id}`;
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-off-white/90 mb-3">
          Card Details
        </label>
        <div className="p-4 rounded-lg border border-white/15 bg-black/40 focus-within:border-money-green-bright/50 focus-within:ring-1 focus-within:ring-money-green-bright/30 transition-all">
          <PaymentElement
            options={{
              layout: 'tabs',
              wallets: { applePay: 'auto', googlePay: 'auto' },
            }}
          />
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
        >
          {error}
        </motion.div>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={loading}
          className="flex-1 py-3.5 px-6 bg-white/5 text-off-white border border-white/15 font-display text-[16px] uppercase tracking-[0.08em] rounded-lg hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={loading || !stripe}
          className="flex-1 py-3.5 px-6 bg-money-green-bright text-black font-display text-[16px] sm:text-[18px] uppercase tracking-[0.08em] rounded-lg hover:shadow-[0_25px_70px_-15px_rgba(0,255,127,0.7)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Pay $27'}
        </button>
      </div>

      <p className="text-xs text-off-white/60 text-center">
        Secure checkout powered by Stripe
      </p>
    </motion.form>
  );
}

/* ─── Main exported section ─── */
export default function CheckoutSection() {
  const [step, setStep] = useState<'info' | 'payment'>('info');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInitiatePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email }),
      });

      const data = await res.json();

      if (!data.clientSecret) {
        setError(data.error || 'Could not initialize payment. Please try again.');
        setLoading(false);
        return;
      }

      setClientSecret(data.clientSecret);
      setStep('payment');
    } catch {
      setError('Network error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <section
      id="checkout"
      className="relative overflow-hidden bg-near-black py-24 sm:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 size-[40vw] rounded-full bg-money-green/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-money-green-bright">
            / Secure Checkout
          </span>
          <h2
            className="headline-mega mt-4 text-off-white"
            style={{ fontSize: 'clamp(40px, 6.5vw, 72px)' }}
          >
            Get your access <span className="text-money-green-bright">today.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Pulsing glow border */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[2px] rounded-3xl"
            style={{
              background:
                'linear-gradient(140deg, rgba(0,255,127,0.5), rgba(8,102,255,0.5))',
              filter: 'blur(0.5px)',
            }}
          />
          <div className="relative overflow-hidden rounded-3xl border border-money-green/40 bg-gradient-to-br from-[#06140C] via-[#0A0A0A] to-[#02110A] p-7 sm:p-12 animate-pulse-glow">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 size-72 rounded-full bg-money-green/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-32 -bottom-32 size-72 rounded-full bg-meta-blue/20 blur-3xl"
            />

            <div className="relative">
              {/* Step 1: name + email */}
              {step === 'info' && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleInitiatePayment}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-off-white/90 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 bg-black/40 border border-white/15 rounded-lg text-off-white placeholder-white/30 text-sm focus:outline-none focus:border-money-green-bright/50 focus:ring-1 focus:ring-money-green-bright/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-off-white/90 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 bg-black/40 border border-white/15 rounded-lg text-off-white placeholder-white/30 text-sm focus:outline-none focus:border-money-green-bright/50 focus:ring-1 focus:ring-money-green-bright/30 transition-all"
                    />
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                    >
                      {error}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !formData.name || !formData.email}
                    className="w-full py-3.5 px-6 bg-money-green-bright text-black font-display text-[16px] sm:text-[18px] uppercase tracking-[0.08em] rounded-lg hover:shadow-[0_25px_70px_-15px_rgba(0,255,127,0.7)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Initializing...' : 'Continue to Payment'}
                  </button>
                </motion.form>
              )}

              {/* Step 2: card form — only mount Elements when clientSecret is real */}
              {step === 'payment' && clientSecret && (
                <Elements
                  stripe={stripePromise}
                  options={{ clientSecret, appearance: stripeAppearance }}
                >
                  <PaymentForm
                    clientSecret={clientSecret}
                    onBack={() => {
                      setStep('info');
                      setClientSecret('');
                    }}
                    customerName={formData.name}
                    customerEmail={formData.email}
                  />
                </Elements>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2 text-xs text-off-white/60 text-center"
        >
          <svg
            className="w-4 h-4 text-money-green-bright"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          30-Day Money-Back Guarantee · Lifetime Access
        </motion.div>
      </div>
    </section>
  );
}
