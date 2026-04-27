"use client";

const ITEMS = [
  "STOP BOOSTING",
  "START SCALING",
  "$5/DAY METHOD",
  "INDEPENDENT ARTISTS ONLY",
  "2026 EDITION",
];

export default function MarqueeTicker() {
  // Repeat enough to ensure no gap during -50% translate
  const reel = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="sticky top-0 z-50 overflow-hidden border-b border-black/30 bg-money-green text-black">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap py-2">
        {reel.map((item, i) => (
          <span
            key={i}
            className="mx-7 inline-flex items-center gap-7 font-display text-[14px] font-normal uppercase"
            style={{ letterSpacing: "3px" }}
          >
            {item}
            <span aria-hidden className="text-black/70">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
