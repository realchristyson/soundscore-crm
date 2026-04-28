"use client";

import { useMemo } from "react";

type Props = { variant?: "green" | "blue" | "mixed" };

export default function ParticleBackground({ variant = "green" }: Props) {
  const particles = useMemo(() => {
    const glyphs = ["$", "▲", "◆", "+", "—"];
    return Array.from({ length: 18 }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 22;
      const dur = 18 + Math.random() * 14;
      const size = 12 + Math.random() * 14;
      const glyph = glyphs[i % glyphs.length];
      let color = "rgba(0,255,127,0.12)";
      if (variant === "blue") color = "rgba(8,102,255,0.15)";
      if (variant === "mixed") color = i % 2 === 0 ? "rgba(0,255,127,0.13)" : "rgba(8,102,255,0.13)";
      return { left, delay, dur, size, glyph, color, i };
    });
  }, [variant]);

  return (
    <div className="particles" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.i}
          style={{
            left: `${p.left}%`,
            fontSize: p.size,
            color: p.color,
            animationDelay: `-${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        >
          {p.glyph}
        </span>
      ))}
    </div>
  );
}
