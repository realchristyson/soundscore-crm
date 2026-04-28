"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiCelebration({ trigger = true }: { trigger?: boolean }) {
  useEffect(() => {
    if (!trigger) return;
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const fire = (ratio: number, opts: confetti.Options) => {
      confetti({
        particleCount: Math.floor(150 * ratio),
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00FF7F", "#00C853", "#1E88FF", "#0866FF", "#F5F5F5"],
        ...opts,
      });
    };

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, [trigger]);

  return null;
}
