"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  genre: string;
  quote: string;
  before: string;
  after: string;
  gradient: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marquise B.",
    genre: "Hip-Hop · Atlanta",
    quote:
      "I was dropping $300 on boosts every month and getting nothing. Ran the $5/day formula on my second single and pulled 14k monthly listeners in 60 days. Real fans. Real shazams. No cap.",
    before: "From 800",
    after: "→ 14,200 monthly listeners",
    gradient: "conic-gradient(from 30deg, #00FF7F, #0866FF, #00C853, #00FF7F)",
  },
  {
    name: "Aaliyah K.",
    genre: "R&B · Houston",
    quote:
      "Chris made the Meta side feel less scary. I'm an artist, not a marketer. Walked through it chapter by chapter and now my pixel is hot. Saved at least $1,200 I would've burned on boosts.",
    before: "From 240",
    after: "→ 8,900 monthly listeners",
    gradient: "linear-gradient(135deg, #1E88FF, #00C853)",
  },
  {
    name: "Devontae L.",
    genre: "Trap / R&B · Chicago",
    quote:
      "I came in skeptical because every guru sells the same recycled stuff. This was different. Specific. Indie-artist specific. The lookalike chapter alone was worth ten times the price.",
    before: "From 1,100",
    after: "→ 22,500 monthly listeners",
    gradient: "radial-gradient(circle at 30% 30%, #00FF7F, #0866FF)",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden bg-near-black py-24 sm:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-money-green-bright">
              / Receipts
            </span>
            <h2
              className="headline-mega mt-4 text-off-white"
              style={{ fontSize: "clamp(40px, 6.5vw, 96px)" }}
            >
              Real artists. <br />
              <span className="text-money-green-bright">Real results.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setIndex(
                  (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                )
              }
              aria-label="Previous testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-white/15 text-off-white transition hover:border-money-green-bright hover:text-money-green-bright"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-white/15 text-off-white transition hover:border-money-green-bright hover:text-money-green-bright"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((tt, i) => (
            <motion.div
              key={tt.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              animate={{
                rotate: i === index ? [0, -0.4, 0.4, 0] : 0,
                y: i === index ? [0, -4, 0] : 0,
              }}
              className={`relative overflow-hidden rounded-2xl border p-6 sm:p-7 ${
                i === index
                  ? "border-money-green/40 bg-gradient-to-br from-[#06170D] to-black shadow-glow-green"
                  : "border-white/10 bg-black/50"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <Quote
                className={`absolute right-5 top-5 size-9 ${
                  i === index ? "text-money-green-bright/30" : "text-white/10"
                }`}
              />
              <div className="flex items-center gap-3">
                <span
                  className="block size-12 rounded-full ring-2 ring-black"
                  style={{ background: tt.gradient }}
                />
                <div>
                  <div className="font-semibold text-off-white">{tt.name}</div>
                  <div className="mono-accent text-[10px] uppercase tracking-widest text-gray-text">
                    {tt.genre}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-off-white/85">
                &ldquo;{tt.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-end justify-between border-t border-white/5 pt-4">
                <div>
                  <div className="mono-accent text-[10px] uppercase tracking-widest text-gray-text">
                    Result
                  </div>
                  <div className="mt-1">
                    <span className="text-sm text-white/40">{tt.before}</span>{" "}
                    <span className="text-sm text-money-green-bright">
                      {tt.after}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-10 bg-money-green-bright"
                  : "w-3 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Hidden announcer for SR */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={t.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            aria-live="polite"
            className="sr-only"
          >
            {t.name}: {t.quote}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
