"use client";

const LABELS = [
  "Roc Nation",
  "Def Jam",
  "Atlantic",
  "Empire",
  "300 Entertainment",
  "Top Dawg",
  "TDE",
  "Quality Control",
];

export default function SocialProofBar() {
  const reel = [...LABELS, ...LABELS, ...LABELS];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-near-black py-10">
      <div className="mx-auto mb-6 max-w-7xl px-5 sm:px-8">
        <p className="mono-accent text-center text-[11px] uppercase tracking-[0.4em] text-gray-text">
          Trusted by artists who&apos;ve worked with
        </p>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-near-black to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-near-black to-transparent"
        />

        <div className="flex w-max animate-marquee items-center whitespace-nowrap">
          {reel.map((label, i) => (
            <div
              key={i}
              className="group mx-10 flex items-center gap-3 transition-colors"
            >
              <span
                aria-hidden
                className="block h-[1px] w-8 bg-white/15 transition-colors group-hover:bg-money-green-bright"
              />
              <span className="font-display text-[28px] uppercase tracking-[0.12em] text-white/35 transition-colors group-hover:text-money-green-bright sm:text-[34px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
