"use client";

import { motion } from "framer-motion";

export default function EbookMockup() {
  return (
    <div className="relative flex items-center justify-center [perspective:1400px]">
      {/* radial glow behind */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(closest-side, rgba(8,102,255,0.45), rgba(0,0,0,0) 60%), radial-gradient(closest-side, rgba(0,255,127,0.35), rgba(0,0,0,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="relative will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          animate={{ rotateY: [-18, 18, -18], y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-[460px] w-[320px] sm:h-[520px] sm:w-[360px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Book back */}
          <div
            className="absolute inset-0 rounded-[6px] bg-near-black"
            style={{ transform: "translateZ(-22px)" }}
          />
          {/* Book spine pages */}
          <div
            className="absolute inset-y-2 left-0 w-[22px] rounded-l-sm"
            style={{
              background:
                "repeating-linear-gradient(90deg, #2a2a2a 0px, #1a1a1a 1px, #2a2a2a 2px)",
              transform: "translateZ(-11px)",
            }}
          />
          {/* Front cover */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[6px] border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,255,127,0.5),0_30px_70px_-20px_rgba(8,102,255,0.45)]"
            style={{
              background:
                "linear-gradient(155deg, #050505 0%, #0a0a0a 40%, #00170B 100%)",
            }}
          >
            {/* shine */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-1/3 w-1/4 -skew-x-12 opacity-40"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)",
              }}
            />
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="relative flex h-full flex-col justify-between p-7">
              <div>
                <div className="mono-accent text-[10px] uppercase tracking-[0.3em] text-money-green-bright">
                  Music Funding Academy · 2026
                </div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-money-green/40 bg-money-green/10 px-2.5 py-1">
                  <span className="size-1.5 rounded-full bg-money-green-bright" />
                  <span className="mono-accent text-[10px] uppercase tracking-widest text-money-green-bright">
                    Indie Artist Edition
                  </span>
                </div>
              </div>

              <div>
                <div
                  className="headline-mega text-white"
                  style={{ fontSize: "44px", lineHeight: 0.85 }}
                >
                  THE
                </div>
                <div
                  className="headline-mega text-money-green-bright"
                  style={{ fontSize: "92px", lineHeight: 0.82 }}
                >
                  $5
                </div>
                <div
                  className="headline-mega text-white"
                  style={{ fontSize: "30px", lineHeight: 1 }}
                >
                  /DAY
                </div>
                <div
                  className="headline-mega -mt-1 text-meta-blue-bright"
                  style={{ fontSize: "44px", lineHeight: 0.9 }}
                >
                  METHOD
                </div>
                <p className="mt-4 max-w-[80%] text-[11px] uppercase tracking-[0.25em] text-gray-text">
                  The Meta Ads playbook for independent hip-hop &amp; R&amp;B
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div className="mono-accent text-[10px] uppercase tracking-widest text-gray-text">
                  By Chris Tyson
                </div>
                <div className="mono-accent rounded border border-white/10 bg-black/50 px-2 py-1 text-[10px] text-money-green-bright">
                  v.2026
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating UI snippets */}
      <FloatingCard
        className="absolute -left-4 top-12 sm:-left-16"
        delay={0}
      >
        <div className="mono-accent flex items-center gap-2 text-[10px] uppercase tracking-widest text-money-green-bright">
          <span className="size-2 animate-pulse rounded-full bg-money-green-bright" />
          Spotify · Live
        </div>
        <div className="mt-2 text-xs text-gray-text">Monthly Listeners</div>
        <div className="mono-accent mt-1 text-2xl font-semibold text-off-white">
          9,847
        </div>
        <div className="mono-accent text-[11px] text-money-green-bright">
          ▲ +147 today
        </div>
      </FloatingCard>

      <FloatingCard
        className="absolute -right-2 top-24 sm:-right-12"
        delay={1.2}
      >
        <div className="mono-accent flex items-center gap-2 text-[10px] uppercase tracking-widest text-meta-blue-bright">
          <span className="size-2 rounded-full bg-meta-blue-bright" />
          Meta Ads Manager
        </div>
        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
          <div>
            <div className="text-[10px] uppercase text-gray-text">Spent</div>
            <div className="mono-accent text-base text-off-white">$5.00</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-gray-text">Reach</div>
            <div className="mono-accent text-base text-money-green-bright">
              12,400
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-gray-text">CPC</div>
            <div className="mono-accent text-base text-off-white">$0.04</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-gray-text">Status</div>
            <div className="mono-accent text-base text-money-green-bright">
              ACTIVE
            </div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="absolute -bottom-2 left-2 sm:left-[-4rem]"
        delay={2.1}
      >
        <div className="flex items-center gap-3">
          <div
            className="size-8 rounded-full"
            style={{
              background:
                "conic-gradient(from 90deg at 50% 50%, #00FF7F, #0866FF, #00C853, #00FF7F)",
            }}
          />
          <div>
            <div className="mono-accent text-[10px] uppercase tracking-widest text-gray-text">
              Notification
            </div>
            <div className="text-xs text-off-white">
              <span className="text-money-green-bright">+147 followers</span>{" "}
              today
            </div>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}

function FloatingCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 + delay * 0.2 }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }}
        transition={{
          duration: 6 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="rounded-xl border border-white/10 bg-black/70 p-3 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(0,255,127,0.45)]"
        style={{ minWidth: 170 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
