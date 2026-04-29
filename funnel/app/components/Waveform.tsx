"use client";

import { useMemo } from "react";

export default function Waveform({
  bars = 64,
  className = "",
}: {
  bars?: number;
  className?: string;
}) {
  const config = useMemo(
    () =>
      Array.from({ length: bars }).map(() => ({
        delay: Math.random() * 1.4,
        duration: 0.9 + Math.random() * 1.3,
        baseHeight: 8 + Math.random() * 60,
      })),
    [bars],
  );

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 flex h-[55%] items-end justify-between gap-[2px] px-2 opacity-25 ${className}`}
    >
      {config.map((bar, i) => (
        <span
          key={i}
          className="block w-full origin-bottom rounded-t-sm"
          style={{
            height: `${bar.baseHeight}%`,
            background:
              "linear-gradient(180deg, rgba(0,255,127,0.85) 0%, rgba(0,200,83,0.15) 100%)",
            animation: `wave ${bar.duration}s ease-in-out ${bar.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
