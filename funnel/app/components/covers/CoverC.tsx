"use client";

/**
 * COVER C — "Gradient Brutalist"
 * Pitch black, single huge gradient orb, asymmetric editorial type. Premium / Apple-style.
 */
export default function CoverC({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-md ${className}`}
      style={{
        background: "#000",
        boxShadow:
          "0 60px 120px -40px rgba(8,102,255,0.45), 0 30px 80px -20px rgba(0,255,127,0.3), inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* Massive orb — green to blue, off-center */}
      <div
        aria-hidden
        className="absolute"
        style={{
          width: "120%",
          height: "65%",
          left: "-15%",
          top: "12%",
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, rgba(0,255,127,0.95) 0%, rgba(0,200,83,0.65) 30%, rgba(8,102,255,0.55) 65%, rgba(0,0,0,0) 78%)",
          filter: "blur(8px)",
        }}
      />
      {/* Inner highlight */}
      <div
        aria-hidden
        className="absolute"
        style={{
          width: "55%",
          height: "30%",
          left: "10%",
          top: "20%",
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(2px)",
          mixBlendMode: "screen",
        }}
      />
      {/* dark vignette bottom */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 60%, #000 100%)",
        }}
      />

      {/* faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "8% 8%",
        }}
      />

      {/* Scan grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "180px 180px",
        }}
      />

      <div className="relative flex h-full flex-col p-[7%]">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div>
            <div className="mono-accent text-[clamp(7px,0.85vw,11px)] uppercase tracking-[0.4em] text-white/60">
              · 001 / Method
            </div>
            <div
              className="mt-[6px] font-display text-off-white"
              style={{
                fontSize: "clamp(11px, 1.5vw, 22px)",
                letterSpacing: "0.04em",
              }}
            >
              MFA — 2026
            </div>
          </div>
          <div className="text-right">
            <div className="mono-accent text-[clamp(7px,0.85vw,11px)] uppercase tracking-[0.3em] text-white/60">
              An Ebook
            </div>
            <div className="mono-accent text-[clamp(7px,0.85vw,11px)] uppercase tracking-[0.3em] text-money-green-bright">
              By Chris Tyson
            </div>
          </div>
        </div>

        {/* Spacer to push title to lower-third */}
        <div className="flex-1" />

        {/* Asymmetric title */}
        <div className="relative">
          {/* small THE off to the left */}
          <div
            className="headline-mega text-off-white"
            style={{
              fontSize: "clamp(20px, 4vw, 60px)",
              lineHeight: 1,
              letterSpacing: "0.06em",
              opacity: 0.85,
            }}
          >
            THE
          </div>

          {/* HUGE $5/DAY */}
          <div
            className="relative -mt-[1%] flex items-baseline"
            style={{ marginLeft: "-2%" }}
          >
            <span
              className="headline-mega text-off-white"
              style={{
                fontSize: "clamp(110px, 28vw, 420px)",
                lineHeight: 0.82,
                letterSpacing: "-0.02em",
                textShadow: "0 4px 0 rgba(0,0,0,0.5)",
              }}
            >
              $5
            </span>
            <span
              className="headline-mega self-end pb-[6%] text-money-green-bright"
              style={{
                fontSize: "clamp(28px, 6vw, 92px)",
                letterSpacing: "0.04em",
              }}
            >
              /DAY
            </span>
          </div>

          {/* METHOD pushed right, smaller */}
          <div className="flex justify-end">
            <span
              className="headline-mega text-stroke"
              style={{
                fontSize: "clamp(34px, 8vw, 130px)",
                lineHeight: 0.85,
                letterSpacing: "0.02em",
              }}
            >
              METHOD
            </span>
          </div>
        </div>

        {/* Bottom rule + caption */}
        <div className="mt-[6%] flex items-end justify-between border-t border-white/15 pt-[3%]">
          <p
            className="max-w-[55%] text-white/70"
            style={{ fontSize: "clamp(9px, 1.15vw, 16px)", lineHeight: 1.4 }}
          >
            The Meta Ads playbook for independent hip-hop &amp; R&amp;B
            artists.
          </p>
          <div className="flex items-center gap-[8px]">
            <span
              className="size-[6px] rounded-full bg-money-green-bright"
              style={{ aspectRatio: "1" }}
            />
            <span className="mono-accent text-[clamp(7px,0.85vw,11px)] uppercase tracking-[0.3em] text-money-green-bright">
              $27 / Lifetime
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
