"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";
import GradientMesh from "./GradientMesh";
import DollarParticles from "./DollarParticles";
import EbookMockup from "./EbookMockup";
import CountUp from "./CountUp";
import MagneticButton from "./MagneticButton";

const HEADLINE_LINE_1 = ["Turn", "$5/Day", "Into"];
const HEADLINE_LINE_2 = ["10,000+", "Monthly", "Listeners"];

const wordVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-black">
      <GradientMesh />
      <DollarParticles count={20} />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:pt-20">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-money-green-bright" />
            <span className="mono-accent text-[11px] uppercase tracking-[0.32em] text-money-green-bright">
              For Independent Artists
            </span>
            <span className="ml-2 mono-accent text-[10px] uppercase tracking-[0.3em] text-gray-text">
              · 2026 Edition
            </span>
          </motion.div>

          <h1
            className="headline-mega text-off-white"
            style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
          >
            <motion.span
              className="flex flex-wrap gap-x-[0.22em] gap-y-1"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
              }}
              initial="hidden"
              animate="show"
            >
              {HEADLINE_LINE_1.map((w) => (
                <motion.span
                  key={w}
                  variants={wordVariant}
                  className={
                    w === "$5/Day" ? "text-money-green-bright" : "text-off-white"
                  }
                >
                  {w}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="mt-2 flex flex-wrap gap-x-[0.22em] gap-y-1"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } },
              }}
              initial="hidden"
              animate="show"
            >
              {HEADLINE_LINE_2.map((w) => (
                <motion.span
                  key={w}
                  variants={wordVariant}
                  className={
                    w === "10,000+" ? "relative text-money-green-bright" : "text-off-white"
                  }
                >
                  {w === "10,000+" ? (
                    <>
                      <CountUp
                        to={10000}
                        duration={2.4}
                        triggerOnLoad
                        suffix="+"
                      />
                      <span
                        aria-hidden
                        className="absolute -inset-x-2 -bottom-1 h-[6px] origin-left bg-money-green/30"
                        style={{
                          maskImage:
                            "linear-gradient(90deg, #000 0%, #000 80%, transparent 100%)",
                        }}
                      />
                    </>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-7 max-w-xl text-[18px] leading-relaxed text-gray-text sm:text-[20px]"
          >
            The Meta Ads playbook for independent hip-hop and R&amp;B artists
            tired of wasting money on{" "}
            <span className="text-off-white">Instagram boosts</span> that don't
            work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="#offer"
              className="group relative inline-flex items-center justify-center gap-3 rounded-md bg-money-green-bright px-8 py-5 font-display text-[20px] uppercase tracking-[0.08em] text-black shadow-[0_20px_60px_-15px_rgba(0,255,127,0.65)] transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-15px_rgba(0,255,127,0.85)] sm:text-[22px]"
            >
              Get The Method — $27
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-black/10"
              />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mono-accent mt-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-gray-text"
          >
            <Download className="size-3.5 text-money-green-bright" />
            Instant download
            <span className="text-white/20">·</span>
            <ShieldCheck className="size-3.5 text-money-green-bright" />
            100% Money-Back Guarantee
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="flex -space-x-2.5">
              {AVATAR_GRADIENTS.map((g, i) => (
                <span
                  key={i}
                  className="block size-9 rounded-full border-2 border-near-black"
                  style={{ background: g }}
                />
              ))}
            </div>
            <p className="text-[13px] leading-tight text-gray-text">
              Joined by{" "}
              <span className="font-semibold text-off-white">
                <CountUp to={2847} duration={2.2} />
              </span>{" "}
              indie artists this month
            </p>
          </motion.div>
        </div>

        {/* RIGHT - ebook */}
        <div className="relative flex items-center justify-center pt-2 lg:pt-0">
          <EbookMockup />
        </div>
      </div>

      {/* fade out at bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black"
      />
    </section>
  );
}

const AVATAR_GRADIENTS = [
  "conic-gradient(from 0deg, #00FF7F, #0866FF, #00FF7F)",
  "linear-gradient(135deg, #1E88FF, #00C853)",
  "radial-gradient(circle at 30% 30%, #00FF7F, #0866FF)",
  "linear-gradient(160deg, #00C853, #1E88FF)",
  "conic-gradient(from 90deg, #0866FF, #00FF7F, #00C853, #0866FF)",
];
