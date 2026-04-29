"use client";

import { motion } from "framer-motion";

export default function ScalingDecisionTree() {
  const steps = [
    { day: "Day 1-5", budget: "$5/day", note: "Test" },
    { day: "Day 6-8", budget: "$10/day", note: "Double" },
    { day: "Day 9-11", budget: "$20/day", note: "Double" },
    { day: "Day 12-14", budget: "$50/day", note: "Push" },
    { day: "Day 15-21", budget: "$100/day", note: "Push" },
    { day: "Day 22-30", budget: "$200/day", note: "Scale" },
  ];

  return (
    <motion.svg
      viewBox="0 0 880 420"
      width="100%"
      role="img"
      aria-label="The scaling formula"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ margin: "2.5rem 0" }}
    >
      <defs>
        <linearGradient id="sdt-grad" x1="0" x2="1">
          <stop offset="0%" stopColor="#0866FF" />
          <stop offset="50%" stopColor="#00FF7F" />
          <stop offset="100%" stopColor="#FFE100" />
        </linearGradient>
      </defs>

      <text x="440" y="30" fill="#A0A0A0" fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="3" textAnchor="middle">THE 30-DAY SCALING SYSTEM</text>

      {/* Connecting line */}
      <line x1="60" y1="200" x2="820" y2="200" stroke="url(#sdt-grad)" strokeWidth="2" strokeDasharray="4 4" />

      {steps.map((s, i) => {
        const x = 60 + i * 140;
        const size = 60 + i * 8;
        return (
          <g key={i} transform={`translate(${x}, 200)`}>
            <motion.circle
              r={size / 2}
              fill="#0a0a0a"
              stroke="url(#sdt-grad)"
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "backOut" }}
            />
            <text y="-4" textAnchor="middle" fill="#fff" fontFamily="var(--font-anton)" fontSize={i < 3 ? 16 : 18}>
              {s.budget}
            </text>
            <text y="14" textAnchor="middle" fill="#A0A0A0" fontFamily="var(--font-jetbrains)" fontSize="9">
              {s.note.toUpperCase()}
            </text>
            <text y={size / 2 + 22} textAnchor="middle" fill="#666" fontFamily="var(--font-jetbrains)" fontSize="10">
              {s.day}
            </text>
            {i < steps.length - 1 && (
              <text x={size / 2 + 12} y="4" fill="#00FF7F" fontFamily="var(--font-anton)" fontSize="20">×2</text>
            )}
          </g>
        );
      })}

      <text x="440" y="380" textAnchor="middle" fill="#A0A0A0" fontFamily="var(--font-inter)" fontSize="13">
        Wait 3 days between doubles. If the numbers hold, double again. If they break, hold the line.
      </text>
    </motion.svg>
  );
}
