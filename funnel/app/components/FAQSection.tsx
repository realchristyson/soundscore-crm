"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const FAQ = [
  {
    q: "Is this for beginners?",
    a: "Yeah. Chapter 02 is literally setting up Meta Business Manager from zero. If you can post on Instagram, you can run this. Most readers finish setup in under 30 minutes.",
  },
  {
    q: "Do I need a budget?",
    a: "$5/day is the floor. That's $150/month — less than you've already burned on boosts. The system is built so $5 a day actually moves the needle, not just funds Meta's stock price.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "30-day money-back guarantee. Email me, screenshot the work, get a refund. I'd rather give your $27 back than have you hate me on Twitter.",
  },
  {
    q: "Is this just for hip-hop?",
    a: "Hip-hop and R&B are the focus because that's who I run ads for daily. Pop, Afrobeats, Latin, alt — same playbook works. The targeting examples are the only thing you'd swap.",
  },
  {
    q: "How is this different from boosting?",
    a: "Boosting is one button that hands Meta your money for a single post on a single placement with no pixel data. Real Meta Ads = full targeting, lookalike audiences, retargeting, and a pixel that gets smarter every day. That's what this teaches.",
  },
  {
    q: "Will this still work in 2026?",
    a: "Yes — this is the 2026 edition. Updated for the iOS privacy changes, Advantage+ campaigns, and the new audience tools Meta rolled out this year. Lifetime updates included.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-meta-blue-bright">
            / Questions
          </span>
          <h2
            className="headline-mega mt-4 text-off-white"
            style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
          >
            Things <br />
            <span className="text-money-green-bright">artists ask.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen
                    ? "border-money-green/40 bg-near-black"
                    : "border-white/10 bg-near-black/60 hover:border-white/25"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-medium text-off-white sm:text-[18px]">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex size-9 flex-none items-center justify-center rounded-full border ${
                      isOpen
                        ? "border-money-green-bright text-money-green-bright"
                        : "border-white/20 text-off-white"
                    }`}
                  >
                    <Plus className="size-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.25 },
                      }}
                      className="px-6"
                    >
                      <div className="pb-5 pr-12 text-[15px] leading-relaxed text-gray-text">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
