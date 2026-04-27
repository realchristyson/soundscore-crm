"use client";

import { motion } from "framer-motion";

/**
 * Hardcover book mockup — front soft tilt.
 * Cover A artwork: black canvas, giant $5 in money-green, METHOD in white.
 */
export default function EbookMockup() {
  return (
    <div className="relative flex items-center justify-center [perspective:1800px]">
      {/* radial glow behind */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,255,127,0.32), rgba(0,0,0,0) 65%), radial-gradient(closest-side, rgba(8,102,255,0.22), rgba(0,0,0,0) 70%)",
          filter: "blur(50px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="relative will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* gentle hover, not full rotation — front-tilt stays */}
        <motion.div
          animate={{ y: [0, -8, 0], rotateZ: [0, 0.5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-[480px] w-[320px] sm:h-[560px] sm:w-[372px]"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-10deg) rotateX(4deg)",
          }}
        >
          {/* page edges (right) */}
          <div
            aria-hidden
            className="absolute inset-y-1.5 right-0 w-[14px]"
            style={{
              transform: "rotateY(90deg) translateZ(0)",
              transformOrigin: "right center",
              background:
                "repeating-linear-gradient(180deg, #ece6d8 0 1px, #d6cfba 1px 2px)",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.25)",
            }}
          />

          {/* spine (left) */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 flex w-[34px] items-center justify-center"
            style={{
              transform: "rotateY(-90deg) translateZ(0)",
              transformOrigin: "left center",
              background:
                "linear-gradient(90deg, #000 0%, #0e0e0e 50%, #000 100%)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
              writingMode: "vertical-rl",
            }}
          >
            <span
              className="font-display text-[14px] font-bold uppercase tracking-[0.05em] text-money-green-bright"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              $5/Day Method
            </span>
            <span
              className="ml-2 font-display text-[11px] uppercase tracking-[0.4em] text-off-white"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              Tyson
            </span>
          </div>

          {/* back board */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-[3px] bg-black"
            style={{ transform: "translateZ(-18px)" }}
          />

          {/* FRONT COVER */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[3px] bg-black shadow-[0_60px_100px_-30px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06),0_0_60px_rgba(0,255,127,0.18)]"
          >
            {/* subtle film grain */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
              }}
            />
            {/* glossy highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-overlay"
              style={{
                background:
                  "linear-gradient(110deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 35%, rgba(0,0,0,0.18) 100%)",
              }}
            />

            <div className="relative flex h-full flex-col p-7">
              {/* eyebrow */}
              <div className="flex items-center justify-between">
                <span
                  className="mono-accent text-[10px] uppercase tracking-[0.45em] text-white/55"
                  style={{ fontWeight: 600 }}
                >
                  The Playbook
                </span>
                <span
                  className="mono-accent text-[10px] uppercase tracking-[0.45em] text-money-green-bright"
                  style={{ fontWeight: 600 }}
                >
                  ● 2026
                </span>
              </div>

              {/* mega type block — flex grow */}
              <div className="my-auto">
                <div className="flex items-start gap-2">
                  <span
                    className="font-display text-[180px] leading-[0.78] tracking-[-0.06em] text-money-green-bright"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    $5
                  </span>
                  <div className="flex flex-col pt-2">
                    <span
                      className="mono-accent text-[12px] font-bold uppercase tracking-[0.3em] text-off-white"
                    >
                      A
                    </span>
                    <span
                      className="font-display text-[44px] leading-[0.85] tracking-[-0.02em] text-off-white"
                      style={{ fontFamily: "var(--font-anton)" }}
                    >
                      DAY
                    </span>
                  </div>
                </div>
                <div
                  className="-mt-1 font-display text-[58px] leading-[0.85] tracking-[-0.015em] text-off-white"
                  style={{ fontFamily: "var(--font-anton)" }}
                >
                  METHOD
                </div>

                <div className="mt-5 h-[3px] w-[44px] bg-money-green-bright" />

                <p className="mt-4 max-w-[88%] text-[11px] font-medium leading-[1.4] text-white/80">
                  How independent artists turn{" "}
                  <span className="text-off-white">$5 a day on Meta Ads</span>{" "}
                  into{" "}
                  <span className="text-off-white">
                    10,000+ monthly listeners
                  </span>
                  .
                </p>
              </div>

              {/* author */}
              <div className="flex items-end justify-between">
                <div>
                  <div className="mono-accent text-[9px] font-semibold uppercase tracking-[0.5em] text-white/45">
                    By
                  </div>
                  <div
                    className="mt-1 font-display text-[20px] leading-none tracking-[0.04em] text-off-white"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    CHRIS TYSON
                  </div>
                </div>
                <div className="mono-accent text-right text-[9px] font-semibold uppercase tracking-[0.4em] text-white/45">
                  No.&nbsp;01
                  <br />
                  The&nbsp;Method
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
