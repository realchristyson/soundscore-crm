"use client";

import { motion } from "framer-motion";

export default function MoneyMath() {
  return (
    <motion.svg
      viewBox="0 0 800 360"
      width="100%"
      role="img"
      aria-label="$50 boost vs $50 Meta Ad"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ margin: "2.5rem 0" }}
    >
      <defs>
        <linearGradient id="mm-red" x1="0" x2="1">
          <stop offset="0%" stopColor="#FF3355" />
          <stop offset="100%" stopColor="#FF6677" />
        </linearGradient>
        <linearGradient id="mm-green" x1="0" x2="1">
          <stop offset="0%" stopColor="#00C853" />
          <stop offset="100%" stopColor="#00FF7F" />
        </linearGradient>
      </defs>

      {/* LEFT, boost */}
      <g transform="translate(40,40)">
        <text x="0" y="0" fill="#FF6677" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="3">$50 BOOST</text>
        <rect x="0" y="20" width="340" height="280" rx="10" fill="#0a0a0a" stroke="rgba(255,51,85,0.4)" />
        <text x="20" y="80" fill="#fff" fontFamily="var(--font-anton)" fontSize="60">$50</text>
        <text x="20" y="120" fill="#A0A0A0" fontFamily="var(--font-inter)" fontSize="14">→ ~4 likes</text>
        <text x="20" y="148" fill="#A0A0A0" fontFamily="var(--font-inter)" fontSize="14">→ 0 streams</text>
        <text x="20" y="176" fill="#A0A0A0" fontFamily="var(--font-inter)" fontSize="14">→ 0 fans</text>
        <text x="20" y="204" fill="#A0A0A0" fontFamily="var(--font-inter)" fontSize="14">→ 0 data</text>
        <text x="20" y="252" fill="url(#mm-red)" fontFamily="var(--font-anton)" fontSize="34">= $0 BACK</text>
      </g>

      {/* RIGHT, Meta Ad */}
      <g transform="translate(420,40)">
        <text x="0" y="0" fill="#00FF7F" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="3">$50 META AD</text>
        <rect x="0" y="20" width="340" height="280" rx="10" fill="#0a0a0a" stroke="url(#mm-green)" />
        <text x="20" y="80" fill="#fff" fontFamily="var(--font-anton)" fontSize="60">$50</text>
        <text x="20" y="120" fill="#A0A0A0" fontFamily="var(--font-inter)" fontSize="14">→ 8,000+ real reach</text>
        <text x="20" y="148" fill="#A0A0A0" fontFamily="var(--font-inter)" fontSize="14">→ trackable streams</text>
        <text x="20" y="176" fill="#A0A0A0" fontFamily="var(--font-inter)" fontSize="14">→ pixel data you keep</text>
        <text x="20" y="204" fill="#A0A0A0" fontFamily="var(--font-inter)" fontSize="14">→ a fan list to scale</text>
        <text x="20" y="252" fill="url(#mm-green)" fontFamily="var(--font-anton)" fontSize="34">= REAL ROI</text>
      </g>
    </motion.svg>
  );
}
