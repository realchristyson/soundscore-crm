"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "insight" | "watch" | "pro";

const META: Record<Variant, { icon: string; label: string; cls: string }> = {
  insight: { icon: "💡", label: "Key Insight", cls: "callout-insight" },
  watch: { icon: "⚠️", label: "Watch Out", cls: "callout-watch" },
  pro: { icon: "🔥", label: "Pro Tip", cls: "callout-pro" },
};

export default function Callout({ variant = "insight", children }: { variant?: Variant; children: ReactNode }) {
  const m = META[variant];
  return (
    <motion.div
      className={`callout ${m.cls}`}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="callout-label">
        <span aria-hidden>{m.icon}</span>
        {m.label}
      </div>
      <div>{children}</div>
    </motion.div>
  );
}
