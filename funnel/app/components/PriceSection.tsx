"use client";

import { motion } from "framer-motion";
import { Check, Lock, ShieldCheck, Zap, Infinity as InfinityIcon } from "lucide-react";
import MagneticButton from "./MagneticButton";

const INCLUDED = [
  "The full $5/Day Method ebook (8 chapters, 130+ pages)",
  "The exact targeting templates I use for clients",
  "Lookalike audience build-out blueprints",
  "Campaign naming + structure cheatsheet",
  "Bonus playbook: Engagement, Traffic & Video Views",
  "Lifetime access to all 2026 updates",
];

const COMPARISONS = [
  { label: "Hire an Agency", price: "$1,500/mo", strike: true },
  { label: "1-on-1 Coaching", price: "$497", strike: true },
  {
    label: "The $5/Day Method Ebook",
    price: "$27 today",
    was: "$97",
    highlight: true,
  },
];

export default function PriceSection() {
  return (
    <section
      id="offer"
      className="relative overflow-hidden bg-near-black py-24 sm:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 size-[40vw] rounded-full bg-money-green/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-money-green-bright">
            / The Offer
          </span>
          <h2
            className="headline-mega mt-4 text-off-white"
            style={{ fontSize: "clamp(40px, 6.5vw, 92px)" }}
          >
            Everything you get <span className="text-money-green-bright">today.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Pulsing glow wrapper */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[2px] rounded-3xl"
            style={{
              background:
                "linear-gradient(140deg, rgba(0,255,127,0.5), rgba(8,102,255,0.5))",
              filter: "blur(0.5px)",
            }}
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl border border-money-green/40 bg-gradient-to-br from-[#06140C] via-[#0A0A0A] to-[#02110A] p-7 sm:p-12 animate-pulse-glow"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 size-72 rounded-full bg-money-green/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-32 -bottom-32 size-72 rounded-full bg-meta-blue/20 blur-3xl"
            />

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-money-green-bright/40 bg-money-green/10 px-3 py-1.5">
                  <Zap className="size-3.5 fill-money-green-bright text-money-green-bright" />
                  <span className="mono-accent text-[10px] uppercase tracking-[0.3em] text-money-green-bright">
                    Launch Pricing · 2026
                  </span>
                </div>

                <div className="space-y-3">
                  {COMPARISONS.map((c) => (
                    <div
                      key={c.label}
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 ${
                        c.highlight
                          ? "border-money-green/40 bg-black/60"
                          : "border-white/10 bg-black/30"
                      }`}
                    >
                      <span
                        className={`text-sm sm:text-base ${
                          c.highlight ? "text-off-white" : "text-gray-text"
                        }`}
                      >
                        {c.label}
                      </span>
                      <span className="flex items-center gap-2">
                        {c.was && (
                          <span className="mono-accent text-sm text-white/40 line-through">
                            {c.was}
                          </span>
                        )}
                        <span
                          className={`mono-accent text-sm font-semibold sm:text-base ${
                            c.strike
                              ? "text-white/40 line-through"
                              : "text-money-green-bright"
                          }`}
                        >
                          {c.price}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="mono-accent text-[11px] uppercase tracking-[0.3em] text-gray-text">
                    Today only
                  </div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="mono-accent text-2xl text-white/40 line-through">
                      $97
                    </span>
                    <span
                      className="headline-mega text-money-green-bright"
                      style={{ fontSize: "clamp(72px, 10vw, 128px)" }}
                    >
                      $27
                    </span>
                  </div>
                </div>

                <MagneticButton
                  href="#checkout"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md bg-money-green-bright px-8 py-5 font-display text-[20px] uppercase tracking-[0.08em] text-black shadow-[0_25px_70px_-15px_rgba(0,255,127,0.7)] transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_35px_90px_-15px_rgba(0,255,127,0.9)] sm:text-[24px]"
                >
                  <Lock className="size-5" />
                  Get Instant Access — $27
                </MagneticButton>

                <div className="mono-accent mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-gray-text">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-money-green-bright" />
                    30-Day Money-Back Guarantee
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="size-3.5 text-money-green-bright" />
                    Instant Download
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="flex items-center gap-1.5">
                    <InfinityIcon className="size-3.5 text-money-green-bright" />
                    Lifetime Access
                  </span>
                </div>
              </div>

              <div>
                <div className="mono-accent text-[11px] uppercase tracking-[0.3em] text-money-green-bright">
                  Includes
                </div>
                <ul className="mt-5 space-y-4">
                  {INCLUDED.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-full bg-money-green/15 ring-1 ring-money-green/40">
                        <Check className="size-3.5 text-money-green-bright" />
                      </span>
                      <span className="text-[15px] leading-snug text-off-white/90">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
