"use client";

import { motion } from "framer-motion";
import { Flame, Target, X, Check } from "lucide-react";
import CountUp from "./CountUp";

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-money-green-bright">
            / The Problem
          </span>
          <h2
            className="headline-mega mt-4 text-off-white"
            style={{ fontSize: "clamp(40px, 6.5vw, 88px)" }}
          >
            You&apos;re burning <br />
            <span className="text-money-green-bright">money</span> right now.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-gray-text">
            Every time you tap that little blue Boost button, Instagram pockets
            your $50 and hands you nothing you can scale. Here&apos;s what the
            two roads actually look like.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-7">
          {/* BOOST WAY */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-7 sm:p-9"
          >
            <div className="absolute right-6 top-6 opacity-15">
              <Flame className="size-24" />
            </div>
            <div className="flex items-center gap-2">
              <span className="mono-accent rounded-sm bg-white/5 px-2 py-1 text-[10px] uppercase tracking-widest text-gray-text">
                The Boost Way
              </span>
            </div>
            <h3
              className="headline-mega mt-3 text-off-white"
              style={{ fontSize: "clamp(34px, 4.4vw, 60px)" }}
            >
              Boosted <span className="text-stroke">Post</span>
            </h3>
            <p className="mt-2 text-sm text-gray-text">
              Tap, swipe, pray. No targeting, no data, no follow-up.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <Stat
                label="Spent"
                value="$50.00"
                tone="muted"
                icon={<X className="size-3.5" />}
              />
              <Stat
                label="Likes"
                value="4"
                tone="muted"
                icon={<X className="size-3.5" />}
              />
              <Stat
                label="New Followers"
                value="2"
                tone="muted"
                icon={<X className="size-3.5" />}
              />
              <Stat
                label="Trackable Data"
                value="ZERO"
                tone="muted"
                icon={<X className="size-3.5" />}
              />
            </div>

            <p className="mono-accent mt-7 text-[12px] uppercase tracking-[0.2em] text-white/40">
              → Money gone. Audience gone. Lesson? Also gone.
            </p>
          </motion.div>

          {/* META ADS WAY */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-money-green/30 bg-gradient-to-br from-[#031108] via-[#06170D] to-[#031108] p-7 sm:p-9"
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 size-64 rounded-full bg-money-green-bright/15 blur-3xl"
            />
            <div className="absolute right-6 top-6 opacity-15">
              <Target className="size-24 text-money-green-bright" />
            </div>
            <div className="flex items-center gap-2">
              <span className="mono-accent rounded-sm bg-money-green/15 px-2 py-1 text-[10px] uppercase tracking-widest text-money-green-bright">
                The Method Way
              </span>
            </div>
            <h3
              className="headline-mega mt-3 text-off-white"
              style={{ fontSize: "clamp(34px, 4.4vw, 60px)" }}
            >
              <span className="text-money-green-bright">Meta Ads</span> · $5/Day
            </h3>
            <p className="mt-2 text-sm text-gray-text">
              Real targeting, real pixels, real audiences you can scale.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <Stat
                label="Daily Spend"
                value="$5.00"
                tone="green"
                icon={<Check className="size-3.5" />}
              />
              <Stat
                label="Reach"
                value={<CountUp to={12400} />}
                tone="green"
                icon={<Check className="size-3.5" />}
              />
              <Stat
                label="New Fans"
                value={<CountUp to={47} />}
                tone="green"
                icon={<Check className="size-3.5" />}
              />
              <Stat
                label="Pixel Data"
                value="LIVE"
                tone="green"
                icon={<Check className="size-3.5" />}
              />
            </div>

            <p className="mono-accent mt-7 text-[12px] uppercase tracking-[0.2em] text-money-green-bright">
              → Real targeting. Real data. Real fans you can rerun for $5
              tomorrow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  tone,
  icon,
}: {
  label: string;
  value: React.ReactNode;
  tone: "muted" | "green";
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        tone === "green"
          ? "border-money-green/25 bg-black/30"
          : "border-white/10 bg-black/40"
      }`}
    >
      <div className="mono-accent flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-gray-text">
        {icon}
        {label}
      </div>
      <div
        className={`mono-accent mt-2 text-2xl font-semibold sm:text-3xl ${
          tone === "green" ? "text-money-green-bright" : "text-white/60"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
