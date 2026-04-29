"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Zap } from "lucide-react";
import GradientMesh from "./GradientMesh";
import MagneticButton from "./MagneticButton";
import DollarParticles from "./DollarParticles";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-28 sm:py-40">
      <GradientMesh intensity="high" />
      <DollarParticles count={14} />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-money-green-bright">
            / Last call
          </span>
          <h2
            className="headline-mega mt-5 text-off-white"
            style={{ fontSize: "clamp(48px, 9vw, 144px)" }}
          >
            Stop burning <br />
            <span className="text-money-green-bright">money</span> on boosts.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-gray-text sm:text-[19px]">
            Get the system top indie artists are using to turn{" "}
            <span className="text-off-white">$5</span> into{" "}
            <span className="text-money-green-bright">10,000+ monthly listeners</span>
            . Skip the agency. Skip the boost button. Run your own ads — for the price of two coffees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 flex flex-col items-center"
        >
          <MagneticButton
            href="#offer"
            strength={36}
            className="group relative inline-flex items-center justify-center gap-3 rounded-md bg-money-green-bright px-10 py-6 font-display text-[24px] uppercase tracking-[0.08em] text-black shadow-[0_30px_90px_-15px_rgba(0,255,127,0.85)] transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-[0_40px_110px_-15px_rgba(0,255,127,1)] sm:text-[32px]"
          >
            <Lock className="size-6" />
            Get The Method — $27
          </MagneticButton>

          <div className="mono-accent mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] uppercase tracking-[0.18em] text-gray-text">
            <span className="flex items-center gap-1.5">
              <Lock className="size-3.5 text-money-green-bright" />
              Stripe Secure Checkout
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-money-green-bright" />
              30-Day Guarantee
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <Zap className="size-3.5 text-money-green-bright" />
              Instant Access
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
