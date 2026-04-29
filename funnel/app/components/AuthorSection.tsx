"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import CountUp from "./CountUp";

export default function AuthorSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 size-[40vw] -translate-y-1/2 rounded-full bg-meta-blue/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #0a0a0a 0%, #131313 50%, #050505 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 30%, rgba(8,102,255,0.35), transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(0,255,127,0.3), transparent 55%)",
                }}
              />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 scanlines opacity-40" />
              <img
                src="/images/chris.jpg"
                alt="Chris Tyson"
                className="absolute inset-0 size-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-end p-7">
                <div className="relative">
                  <div className="mono-accent text-[10px] uppercase tracking-[0.3em] text-money-green-bright">
                    Author
                  </div>
                  <div
                    className="headline-mega mt-2 text-off-white"
                    style={{ fontSize: "44px" }}
                  >
                    Chris <br /> Tyson
                  </div>
                </div>
              </div>
              <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-money-green/40 bg-black/60 px-3 py-1">
                <span className="size-1.5 animate-pulse rounded-full bg-money-green-bright" />
                <span className="mono-accent text-[10px] uppercase tracking-widest text-money-green-bright">
                  Founder · MFA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-meta-blue-bright">
                / The Author
              </span>
              <h2
                className="headline-mega mt-4 text-off-white"
                style={{ fontSize: "clamp(40px, 6.5vw, 88px)" }}
              >
                Who&apos;s behind <br />
                <span className="text-money-green-bright">this?</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 space-y-5 text-[16px] leading-relaxed text-gray-text sm:text-[17px]"
            >
              <p>
                I&apos;m{" "}
                <span className="text-off-white">Chris Tyson</span> — founder
                of <span className="text-off-white">Music Funding Academy</span>
                . I&apos;ve spent the last seven years running Meta Ads for
                independent artists, helping them turn $5/day into real fans,
                real streams, and real income.
              </p>
              <p>
                This isn&apos;t theory. This is what I do every day for clients
                paying me{" "}
                <span className="text-money-green-bright">
                  $500–$1,500/month
                </span>{" "}
                to manage their campaigns.
              </p>
              <p className="text-off-white">
                Now I&apos;m putting the entire system into your hands.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              <CredCard
                value={<CountUp to={2} prefix="$" suffix="M+" />}
                label="Ad spend managed"
              />
              <CredCard
                value={<CountUp to={1000} suffix="+" />}
                label="Artists trained"
              />
              <CredCard
                value={
                  <span className="flex items-center gap-1.5">
                    <Star className="size-5 fill-money-green-bright text-money-green-bright" />
                    Featured
                  </span>
                }
                label="In Billboard / Complex"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredCard({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="rounded-xl border border-white/10 bg-near-black/80 p-5 backdrop-blur-sm transition hover:border-money-green-bright/40 hover:bg-near-black"
    >
      <div className="mono-accent text-2xl font-semibold text-off-white sm:text-3xl">
        {value}
      </div>
      <div className="mono-accent mt-2 text-[11px] uppercase tracking-widest text-gray-text">
        {label}
      </div>
    </motion.div>
  );
}
