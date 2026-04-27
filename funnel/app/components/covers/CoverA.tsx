"use client";

/**
 * COVER A — "Ad Manager"
 * Looks like a live Meta Ads Manager screenshot. Tech / data / insider.
 */
export default function CoverA({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-md ${className}`}
      style={{
        background:
          "linear-gradient(180deg, #050505 0%, #0a0a0a 60%, #02110A 100%)",
        boxShadow:
          "0 60px 120px -40px rgba(0,255,127,0.35), 0 30px 80px -20px rgba(8,102,255,0.3), inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "6% 6%",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-[20%] -top-[20%] size-[60%] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,255,127,0.35), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative flex h-full flex-col p-[6%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <div
              className="flex items-center justify-center rounded-[20%] bg-[#0866FF] text-white"
              style={{
                width: "9%",
                aspectRatio: "1",
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(10px, 1.6vw, 22px)",
              }}
            >
              f
            </div>
            <span className="mono-accent text-[clamp(8px,1.1vw,15px)] uppercase tracking-[0.25em] text-white/70">
              Meta Ads Manager
            </span>
          </div>
          <span className="flex items-center gap-[4px] rounded-full border border-money-green/40 bg-money-green/10 px-[8px] py-[3px]">
            <span className="size-[5px] animate-pulse rounded-full bg-money-green-bright" />
            <span className="mono-accent text-[clamp(7px,0.85vw,11px)] uppercase tracking-[0.25em] text-money-green-bright">
              Live
            </span>
          </span>
        </div>

        <div className="mt-[3%] h-px w-full bg-white/10" />

        <div className="mt-[3%] flex gap-[5%]">
          {["Campaigns", "Ad Sets", "Ads"].map((t, i) => (
            <span
              key={t}
              className={`mono-accent text-[clamp(8px,1vw,14px)] uppercase tracking-[0.2em] ${
                i === 0
                  ? "border-b border-money-green-bright pb-[6px] text-money-green-bright"
                  : "text-white/30"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-[6%] rounded-md border border-money-green/30 bg-black/60 p-[4%] backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <span className="mono-accent text-[clamp(7px,0.9vw,12px)] uppercase tracking-[0.25em] text-gray-text">
              Campaign Name
            </span>
            <span
              className="mono-accent rounded bg-money-green-bright px-[8px] py-[3px] font-bold uppercase tracking-[0.2em] text-black"
              style={{ fontSize: "clamp(7px, 0.85vw, 11px)" }}
            >
              Active
            </span>
          </div>

          <div className="mt-[5%]">
            <div
              className="headline-mega text-off-white"
              style={{ fontSize: "clamp(28px, 6.5vw, 96px)", lineHeight: 0.86 }}
            >
              THE
            </div>
            <div className="flex items-end gap-[2%]">
              <span
                className="headline-mega text-money-green-bright"
                style={{
                  fontSize: "clamp(72px, 18vw, 260px)",
                  lineHeight: 0.78,
                }}
              >
                $5
              </span>
              <span
                className="mono-accent pb-[3%] text-off-white"
                style={{ fontSize: "clamp(14px, 2.6vw, 38px)" }}
              >
                /DAY
              </span>
            </div>
            <div
              className="headline-mega -mt-[1%] text-meta-blue-bright"
              style={{ fontSize: "clamp(28px, 6.5vw, 96px)", lineHeight: 0.86 }}
            >
              METHOD
            </div>
          </div>

          <p className="mono-accent mt-[5%] text-[clamp(7px,0.95vw,13px)] uppercase tracking-[0.2em] text-gray-text">
            For Independent Hip-Hop &amp; R&amp;B Artists
          </p>
        </div>

        <div className="mt-[5%] grid grid-cols-3 gap-[3%]">
          {[
            { l: "Spent", v: "$5.00", c: "white" },
            { l: "Reach", v: "12,400", c: "green" },
            { l: "CPC", v: "$0.04", c: "white" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded border border-white/10 bg-black/40 p-[8%]"
            >
              <div className="mono-accent text-[clamp(6px,0.8vw,11px)] uppercase tracking-widest text-gray-text">
                {s.l}
              </div>
              <div
                className={`mono-accent mt-[8%] font-semibold ${
                  s.c === "green" ? "text-money-green-bright" : "text-off-white"
                }`}
                style={{ fontSize: "clamp(14px, 2.6vw, 36px)" }}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between pt-[6%]">
          <div>
            <div className="mono-accent text-[clamp(7px,0.85vw,11px)] uppercase tracking-[0.25em] text-gray-text">
              Author
            </div>
            <div
              className="mt-[2%] font-semibold text-off-white"
              style={{ fontSize: "clamp(11px, 1.6vw, 22px)" }}
            >
              Chris Tyson
            </div>
            <div className="mono-accent text-[clamp(7px,0.85vw,11px)] uppercase tracking-[0.2em] text-money-green-bright">
              Music Funding Academy
            </div>
          </div>
          <div className="text-right">
            <div className="mono-accent rounded border border-white/10 bg-black/50 px-[10px] py-[6px] text-[clamp(7px,0.85vw,11px)] uppercase tracking-[0.2em] text-money-green-bright">
              v.2026
            </div>
            <div className="mono-accent mt-[6px] text-[clamp(6px,0.8vw,10px)] uppercase tracking-[0.25em] text-white/30">
              Indie Artist Edition
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
