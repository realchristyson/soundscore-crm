"use client";

import { motion } from "framer-motion";

export default function BoostVsAdsManager() {
  return (
    <motion.svg
      viewBox="0 0 800 460"
      width="100%"
      role="img"
      aria-label="Boost button versus Ads Manager"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ margin: "2.5rem 0", maxWidth: "100%" }}
    >
      <defs>
        <linearGradient id="bvm-blue" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0866FF" />
          <stop offset="100%" stopColor="#1E88FF" />
        </linearGradient>
        <linearGradient id="bvm-green" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#00C853" />
          <stop offset="100%" stopColor="#00FF7F" />
        </linearGradient>
        <filter id="bvm-glow"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>

      {/* LEFT, boost button */}
      <g transform="translate(40,40)">
        <text x="0" y="0" fill="#A0A0A0" fontFamily="var(--font-jetbrains), monospace" fontSize="11" letterSpacing="3">BOOST POST</text>
        <rect x="0" y="20" width="320" height="320" rx="12" fill="#0a0a0a" stroke="rgba(255,255,255,0.08)" />
        {/* fake phone */}
        <rect x="40" y="60" width="240" height="180" rx="8" fill="#1a1a1a" />
        <circle cx="60" cy="80" r="8" fill="#333" />
        <rect x="76" y="74" width="80" height="8" fill="#333" rx="2" />
        <rect x="40" y="100" width="240" height="100" fill="#222" />
        <text x="160" y="155" textAnchor="middle" fill="#555" fontSize="13" fontFamily="var(--font-inter)">your post</text>
        {/* boost button, single big blue */}
        <rect x="60" y="270" width="200" height="48" rx="6" fill="url(#bvm-blue)" filter="url(#bvm-glow)" opacity="0.9" />
        <rect x="60" y="270" width="200" height="48" rx="6" fill="url(#bvm-blue)" />
        <text x="160" y="300" textAnchor="middle" fill="#fff" fontFamily="var(--font-anton), sans-serif" fontSize="20" letterSpacing="1">BOOST POST</text>
        <text x="160" y="380" textAnchor="middle" fill="#A0A0A0" fontSize="14" fontFamily="var(--font-inter)">One button. No control.</text>
      </g>

      {/* DIVIDER VS */}
      <g transform="translate(390,200)">
        <text x="0" y="0" textAnchor="middle" fill="#fff" fontFamily="var(--font-anton), sans-serif" fontSize="44" letterSpacing="2">VS</text>
      </g>

      {/* RIGHT, Ads Manager dashboard */}
      <g transform="translate(440,40)">
        <text x="0" y="0" fill="#00FF7F" fontFamily="var(--font-jetbrains), monospace" fontSize="11" letterSpacing="3">ADS MANAGER</text>
        <rect x="0" y="20" width="320" height="320" rx="12" fill="#0a0a0a" stroke="url(#bvm-green)" />
        {/* nav */}
        <rect x="16" y="40" width="80" height="280" rx="4" fill="#111" />
        <rect x="24" y="56" width="64" height="8" rx="2" fill="#333" />
        <rect x="24" y="72" width="48" height="6" rx="2" fill="#222" />
        <rect x="24" y="86" width="56" height="6" rx="2" fill="#222" />
        <rect x="24" y="100" width="40" height="6" rx="2" fill="#222" />
        {/* charts */}
        <rect x="108" y="56" width="200" height="80" rx="4" fill="#0e0e0e" stroke="rgba(255,255,255,0.06)" />
        <polyline points="118,120 140,100 160,108 184,80 204,90 230,68 256,72 280,58 300,64" fill="none" stroke="url(#bvm-green)" strokeWidth="2" />
        {/* metric cards */}
        <g fontFamily="var(--font-jetbrains), monospace">
          <rect x="108" y="148" width="60" height="42" rx="4" fill="#0e0e0e" stroke="rgba(0,255,127,0.3)"/>
          <text x="138" y="166" fill="#00FF7F" fontSize="13" textAnchor="middle">$3.20</text>
          <text x="138" y="180" fill="#666" fontSize="8" textAnchor="middle">CPM</text>

          <rect x="178" y="148" width="60" height="42" rx="4" fill="#0e0e0e" stroke="rgba(8,102,255,0.3)"/>
          <text x="208" y="166" fill="#1E88FF" fontSize="13" textAnchor="middle">2.4%</text>
          <text x="208" y="180" fill="#666" fontSize="8" textAnchor="middle">CTR</text>

          <rect x="248" y="148" width="60" height="42" rx="4" fill="#0e0e0e" stroke="rgba(255,255,255,0.15)"/>
          <text x="278" y="166" fill="#fff" fontSize="13" textAnchor="middle">1.8</text>
          <text x="278" y="180" fill="#666" fontSize="8" textAnchor="middle">FREQ</text>
        </g>
        {/* table rows */}
        <g>
          {[0,1,2].map(i => (
            <rect key={i} x="108" y={210 + i*32} width="200" height="24" rx="3" fill="#0e0e0e" stroke="rgba(255,255,255,0.05)" />
          ))}
          <rect x="108" y={210} width="40" height="24" rx="3" fill="rgba(0,255,127,0.15)" />
          <text x="116" y="227" fontSize="9" fill="#00FF7F" fontFamily="var(--font-jetbrains)">SCALE</text>
        </g>
        <text x="160" y="380" textAnchor="middle" fill="#A0A0A0" fontSize="14" fontFamily="var(--font-inter)">Targeting. Data. Control.</text>
      </g>
    </motion.svg>
  );
}
