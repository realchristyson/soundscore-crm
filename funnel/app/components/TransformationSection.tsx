"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountUp from "./CountUp";
import Waveform from "./Waveform";

const BEFORE = [
  { label: "Monthly Listeners", value: "200" },
  { label: "Followers Added", value: "12" },
  { label: "Reach (30d)", value: "1,800" },
  { label: "Cost Per Fan", value: "$25.00" },
];

const AFTER = [
  { label: "Monthly Listeners", to: 10247, prefix: "" },
  { label: "Followers Added", to: 1840, prefix: "+" },
  { label: "Reach (30d)", to: 384000, prefix: "" },
  { label: "Cost Per Fan", to: 0.18, prefix: "$", decimals: 2 },
];

export default function TransformationSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <Waveform bars={72} className="absolute inset-x-0 bottom-0 h-[60%] opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-4xl text-balance"
        >
          <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-money-green-bright">
            / The Transformation
          </span>
          <h2
            className="headline-mega mt-4 text-off-white"
            style={{ fontSize: "clamp(40px, 7vw, 104px)" }}
          >
            From <span className="text-stroke">200 streams</span>{" "}
            <br className="hidden sm:block" />
            a month to{" "}
            <span className="text-money-green-bright">10,000+.</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-6 backdrop-blur-sm sm:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="mono-accent text-[11px] uppercase tracking-[0.3em] text-gray-text">
                Before · Boost Era
              </span>
              <span className="mono-accent rounded-sm border border-white/10 px-2 py-1 text-[10px] uppercase tracking-widest text-white/40">
                Stuck
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {BEFORE.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-white/5 bg-black/50 p-4"
                >
                  <div className="text-[11px] uppercase tracking-widest text-gray-text">
                    {s.label}
                  </div>
                  <div className="mono-accent mt-2 text-3xl font-semibold text-white/40">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-3 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex size-16 items-center justify-center rounded-full border border-money-green/30 bg-money-green/10 shadow-glow-green"
            >
              <ArrowRight className="size-7 text-money-green-bright" />
            </motion.div>
          </div>

          {/* AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-money-green/30 bg-gradient-to-br from-[#031a0e] via-[#06170D] to-black p-6 shadow-glow-green sm:p-9"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-money-green/20 blur-3xl"
            />
            <div className="relative flex items-center justify-between">
              <span className="mono-accent text-[11px] uppercase tracking-[0.3em] text-money-green-bright">
                After · The Method
              </span>
              <span className="mono-accent rounded-sm border border-money-green/40 bg-money-green/10 px-2 py-1 text-[10px] uppercase tracking-widest text-money-green-bright">
                Scaling
              </span>
            </div>
            <div className="relative mt-6 grid grid-cols-2 gap-4">
              {AFTER.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-money-green/15 bg-black/50 p-4"
                >
                  <div className="text-[11px] uppercase tracking-widest text-gray-text">
                    {s.label}
                  </div>
                  <div className="mono-accent mt-2 text-3xl font-semibold text-money-green-bright">
                    <CountUp
                      to={s.to}
                      prefix={s.prefix}
                      decimals={s.decimals ?? 0}
                      duration={2.2}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mono-accent relative mt-7 text-[12px] uppercase tracking-[0.2em] text-money-green-bright">
              → 90 days of $5 a day. The math is brutal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
