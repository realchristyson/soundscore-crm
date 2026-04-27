"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  intensity?: "low" | "med" | "high";
};

export default function GradientMesh({
  className = "",
  intensity = "med",
}: Props) {
  const opacity = intensity === "low" ? 0.35 : intensity === "high" ? 0.85 : 0.6;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        className="absolute -top-40 -left-32 h-[60vw] w-[60vw] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(8,102,255,0.55), rgba(8,102,255,0))",
          opacity,
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-24 h-[55vw] w-[55vw] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,255,127,0.5), rgba(0,200,83,0))",
          opacity,
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -60, 30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,136,255,0.35), rgba(0,0,0,0))",
          opacity: opacity * 0.8,
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
