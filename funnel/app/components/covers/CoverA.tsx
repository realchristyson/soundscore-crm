"use client";

/**
 * COVER A — Brutalist black/green typographic.
 * Real book cover. Black canvas, giant $5 in money-green, METHOD locked below.
 */
export default function CoverA({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-md bg-black ${className}`}
      style={{
        boxShadow:
          "0 60px 120px -40px rgba(0,255,127,0.25), 0 30px 80px -20px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      <div className="relative flex h-full flex-col p-[7.5%]">
        {/* eyebrow */}
        <div className="flex items-center justify-between">
          <span
            className="mono-accent uppercase text-white/55"
            style={{
              fontSize: "clamp(8px, 1.15vw, 14px)",
              letterSpacing: "0.45em",
              fontWeight: 600,
            }}
          >
            The Playbook
          </span>
          <span
            className="mono-accent uppercase text-money-green-bright"
            style={{
              fontSize: "clamp(8px, 1.15vw, 14px)",
              letterSpacing: "0.45em",
              fontWeight: 600,
            }}
          >
            ● 2026 Edition
          </span>
        </div>

        {/* mega type */}
        <div className="my-auto -mx-[1%]">
          <div className="flex items-start gap-[1%]">
            <span
              className="headline-mega text-money-green-bright"
              style={{
                fontSize: "clamp(140px, 38vw, 560px)",
                lineHeight: 0.78,
                letterSpacing: "-0.06em",
              }}
            >
              $5
            </span>
            <div className="flex flex-col pt-[3%]">
              <span
                className="mono-accent uppercase text-off-white"
                style={{
                  fontSize: "clamp(12px, 2.4vw, 36px)",
                  letterSpacing: "0.3em",
                  fontWeight: 700,
                }}
              >
                A
              </span>
              <span
                className="headline-mega text-off-white"
                style={{
                  fontSize: "clamp(36px, 9vw, 130px)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.02em",
                }}
              >
                DAY
              </span>
            </div>
          </div>
          <div
            className="headline-mega text-off-white -mt-[1%]"
            style={{
              fontSize: "clamp(48px, 13vw, 200px)",
              lineHeight: 0.85,
              letterSpacing: "-0.015em",
            }}
          >
            METHOD
          </div>

          <div
            className="bg-money-green-bright"
            style={{
              height: "clamp(2px, 0.3vw, 4px)",
              width: "clamp(60px, 9vw, 130px)",
              marginTop: "clamp(20px, 3vw, 42px)",
            }}
          />

          <p
            className="text-white/85"
            style={{
              fontSize: "clamp(11px, 2vw, 28px)",
              lineHeight: 1.4,
              fontWeight: 500,
              letterSpacing: "-0.005em",
              marginTop: "clamp(14px, 2.2vw, 28px)",
              maxWidth: "85%",
            }}
          >
            How independent artists turn{" "}
            <span className="font-bold text-off-white">
              $5 a day on Meta Ads
            </span>{" "}
            into{" "}
            <span className="font-bold text-off-white">
              10,000+ monthly listeners
            </span>{" "}
            — without boosting another post.
          </p>
        </div>

        {/* author */}
        <div className="flex items-end justify-between">
          <div>
            <div
              className="mono-accent uppercase text-white/45"
              style={{
                fontSize: "clamp(8px, 1vw, 13px)",
                letterSpacing: "0.5em",
                fontWeight: 600,
              }}
            >
              By
            </div>
            <div
              className="headline-mega text-off-white"
              style={{
                fontSize: "clamp(22px, 4.8vw, 64px)",
                lineHeight: 1,
                letterSpacing: "0.04em",
                marginTop: "0.4em",
              }}
            >
              CHRIS TYSON
            </div>
          </div>
          <div
            className="mono-accent uppercase text-right text-white/45"
            style={{
              fontSize: "clamp(8px, 1vw, 13px)",
              letterSpacing: "0.4em",
              fontWeight: 600,
              lineHeight: 1.6,
            }}
          >
            No.&nbsp;01
            <br />
            The&nbsp;Method
          </div>
        </div>
      </div>
    </div>
  );
}
