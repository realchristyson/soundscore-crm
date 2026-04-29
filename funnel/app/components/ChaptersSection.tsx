"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const CHAPTERS = [
  {
    n: "01",
    title: "Why Boosts Are Killing Your Music Career",
    desc: "The truth about that little blue button — and why labels never use it.",
  },
  {
    n: "02",
    title: "Set Up Meta Business Manager (Step-by-Step)",
    desc: "The 12-minute setup most artists skip — and pay for later.",
  },
  {
    n: "03",
    title: "Your First Ads Manager Account, The Right Way",
    desc: "Pixel, domain, naming convention — built like a label runs it.",
  },
  {
    n: "04",
    title: "Picking Your Winning Content (The Organic Test)",
    desc: "Let your IG decide which song deserves the $5/day before you press go.",
  },
  {
    n: "05",
    title: "The $5/Day Targeting Formula",
    desc: "The exact interest stacks, locations, and ages that hit for indie artists.",
  },
  {
    n: "06",
    title: "Lookalike Audiences From Your Engagers",
    desc: "Turn your 1,000 real fans into a machine that finds the next 10,000.",
  },
  {
    n: "07",
    title: "Scaling Your Ads Without Burning Cash",
    desc: "When to push, when to duplicate, when to kill it. No guessing.",
  },
  {
    n: "08",
    title: "The Bonus Playbook: Engagement, Traffic & Video Views",
    desc: "Three campaigns I run for every artist client — copy them line for line.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function ChaptersSection() {
  return (
    <section
      id="chapters"
      className="relative overflow-hidden bg-near-black py-24 sm:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 size-[40vw] rounded-full bg-meta-blue/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 size-[40vw] rounded-full bg-money-green/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-4xl"
        >
          <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-meta-blue-bright">
            / Inside The Ebook
          </span>
          <h2
            className="headline-mega mt-4 text-off-white"
            style={{ fontSize: "clamp(44px, 7vw, 110px)" }}
          >
            What you&apos;ll learn.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-gray-text">
            8 chapters. 0 fluff. Every page is the system I run for paying
            clients — broken down so you can run it yourself before the weekend.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {CHAPTERS.map((c) => (
            <motion.div key={c.n} variants={cardVariant}>
              <TiltCard className="h-full">
                <div className="gradient-border group relative h-full rounded-2xl p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span
                      className="headline-mega text-money-green-bright"
                      style={{ fontSize: "clamp(56px, 6vw, 92px)" }}
                    >
                      {c.n}
                    </span>
                    <span className="mono-accent mt-3 text-[10px] uppercase tracking-[0.25em] text-gray-text">
                      Chapter
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] font-semibold leading-snug text-off-white sm:text-[19px]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-text">
                    {c.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 opacity-60 transition-opacity group-hover:opacity-100">
                    <span className="mono-accent text-[11px] uppercase tracking-[0.25em] text-meta-blue-bright">
                      Read inside
                    </span>
                    <span className="block h-px w-10 bg-gradient-to-r from-meta-blue-bright to-money-green-bright" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
