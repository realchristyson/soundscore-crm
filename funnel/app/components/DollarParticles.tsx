"use client";

import { useMemo } from "react";

const SHAPES = ["$", "▲", "◆", "$", "$"];

export default function DollarParticles({ count = 18 }: { count?: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 18;
      const duration = 14 + Math.random() * 16;
      const size = 14 + Math.random() * 38;
      const blur = Math.random() > 0.6 ? Math.random() * 4 : 0;
      const shape = SHAPES[i % SHAPES.length];
      const isGreen = Math.random() > 0.45;
      return { left, delay, duration, size, blur, shape, isGreen };
    });
  }, [count]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute font-display select-none will-change-transform"
          style={{
            left: `${p.left}%`,
            bottom: "-10vh",
            fontSize: `${p.size}px`,
            color: p.isGreen ? "#00FF7F" : "#1E88FF",
            opacity: 0.08 + Math.random() * 0.06,
            filter: p.blur ? `blur(${p.blur}px)` : undefined,
            animation: `rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {p.shape}
        </span>
      ))}
    </div>
  );
}
