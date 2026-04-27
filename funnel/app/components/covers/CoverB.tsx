"use client";

/**
 * COVER B — "Money Stack"
 * Bold Anton typography, massive $5, currency motif. Street / hip-hop / swagger.
 */
export default function CoverB({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-md ${className}`}
      style={{
        background:
          "linear-gradient(170deg, #02110A 0%, #050505 40%, #000000 100%)",
        boxShadow:
          "0 60px 120px -40px rgba(0,255,127,0.4), 0 30px 80px -20px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(0,255,127,0.15)",
      }}
    >
      {/* Currency motif (repeating $) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 60px, rgba(0,255,127,0.7) 60px 61px)",
        }}
      />
      {/* Big $ watermarks */}
      <div
        aria-hidden
        className="absolute -left-[8%] top-[6%] select-none headline-mega text-money-green-bright/[0.06]"
        style={{ fontSize: "70%", lineHeight: 0.8 }}
      >
        $$$
      </div>
      <div
        aria-hidden
        className="absolute -right-[12%] bottom-[2%] select-none headline-mega text-money-green-bright/[0.05]"
        style={{ fontSize: "60%", lineHeight: 0.8 }}
      >
        $$
      </div>

      {/* Scan lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* corner glow */}
      <div
        aria-hidden
        className="absolute -bottom-[20%] -left-[20%] size-[70%] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,255,127,0.45), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-[15%] -right-[15%] size-[55%] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(8,102,255,0.35), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative flex h-full flex-col p-[7%]">
        {/* Top eyebrow */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <span
              className="block bg-money-green-bright"
              style={{ width: "6%", height: "2px" }}
            />
            <span className="mono-accent text-[clamp(8px,1.05vw,14px)] uppercase tracking-[0.32em] text-money-green-bright">
              Indie Artist Edition
            </span>
          </div>
          <span className="mono-accent text-[clamp(7px,0.85vw,12px)] uppercase tracking-[0.3em] text-white/40">
            2026
          </span>
        </div>

        {/* MASSIVE $5 — cropped at top */}
        <div className="relative mt-[3%]">
          <div
            className="headline-mega text-off-white"
            style={{
              fontSize: "clamp(22px, 5vw, 70px)",
              lineHeight: 0.9,
              letterSpacing: "0.04em",
            }}
          >
            THE
          </div>
          <div className="relative -mt-[2%] flex items-start">
            <span
              className="headline-mega leading-[0.78]"
              style={{
                fontSize: "clamp(140px, 38vw, 540px)",
                background:
                  "linear-gradient(180deg, #00FF7F 0%, #00C853 60%, #007a3a 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 6px 0 rgba(0,255,127,0.18)",
                filter:
                  "drop-shadow(0 14px 28px rgba(0,255,127,0.25)) drop-shadow(0 4px 0 rgba(0,0,0,0.55))",
              }}
            >
              $5
            </span>
            <div className="relative ml-[2%] flex flex-col justify-end pb-[4%]">
              <span
                className="mono-accent text-money-green-bright"
                style={{ fontSize: "clamp(14px, 2.6vw, 38px)" }}
              >
                /DAY
              </span>
            </div>
          </div>
        </div>

        {/* METHOD — huge below */}
        <div
          className="headline-mega -mt-[2%] text-off-white"
          style={{
            fontSize: "clamp(56px, 14vw, 200px)",
            lineHeight: 0.8,
            letterSpacing: "-0.01em",
          }}
        >
          METHOD
        </div>

        {/* tag line */}
        <div className="mt-[4%] flex items-center gap-[10px]">
          <span
            className="block bg-money-green-bright"
            style={{ width: "5%", height: "2px" }}
          />
          <p className="mono-accent text-[clamp(8px,1vw,14px)] uppercase tracking-[0.25em] text-off-white">
            Stop Boosting. Start Scaling.
          </p>
        </div>
        <p
          className="mt-[3%] max-w-[88%] text-off-white/70"
          style={{ fontSize: "clamp(10px, 1.3vw, 18px)", lineHeight: 1.4 }}
        >
          The Meta Ads playbook for independent hip-hop &amp; R&amp;B artists
          tired of wasting money on Instagram boosts that don&apos;t work.
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-end justify-between pt-[6%]">
          <div className="flex items-center gap-[10px]">
            <span
              className="block size-[10%] rounded-full"
              style={{
                aspectRatio: "1",
                background:
                  "conic-gradient(from 90deg, #00FF7F, #0866FF, #00C853, #00FF7F)",
              }}
            />
            <div>
              <div
                className="font-semibold text-off-white"
                style={{ fontSize: "clamp(11px, 1.6vw, 22px)" }}
              >
                Chris Tyson
              </div>
              <div className="mono-accent text-[clamp(7px,0.85vw,11px)] uppercase tracking-[0.25em] text-money-green-bright">
                Music Funding Academy
              </div>
            </div>
          </div>
          <div
            className="rounded-sm border border-money-green/40 bg-black/50 px-[10px] py-[6px] text-money-green-bright mono-accent uppercase tracking-[0.2em]"
            style={{ fontSize: "clamp(7px, 0.85vw, 11px)" }}
          >
            $27 · Ebook
          </div>
        </div>
      </div>
    </div>
  );
}
