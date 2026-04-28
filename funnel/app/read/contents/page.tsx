"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CHAPTERS } from "../chapters";
import ParticleBackground from "../components/ParticleBackground";

export default function Contents() {
  const part1 = CHAPTERS.filter((c) => c.part === 1);
  const part2 = CHAPTERS.filter((c) => c.part === 2);
  const part3 = CHAPTERS.filter((c) => c.part === 3);

  return (
    <>
      <ParticleBackground variant="mixed" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.25em", color: "var(--read-muted)", marginBottom: "1rem" }}
      >
        CONTENTS
      </motion.div>

      <motion.h1
        className="read-chtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "3rem" }}
      >
        The whole map.
      </motion.h1>

      {[
        { label: "Part 1 — The Lie", color: "var(--meta-blue-bright)", chapters: part1 },
        { label: "Part 2 — The Setup", color: "var(--money-green-bright)", chapters: part2 },
        { label: "Part 3 — The System", color: "var(--money-green-bright)", chapters: part3 },
      ].map((sec, si) => (
        <motion.section
          key={sec.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: si * 0.1 }}
          style={{ marginBottom: "3rem" }}
        >
          <h2 style={{ color: sec.color, fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
            {sec.label}
          </h2>
          {sec.chapters.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={c.href}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid var(--read-line)",
                  color: "var(--read-text)",
                  textDecoration: "none",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--font-anton)", fontSize: 36, color: sec.color, minWidth: 50 }}>
                    {String(c.num).padStart(2, "0")}
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--font-anton)", fontSize: 22, lineHeight: 1.1, textTransform: "uppercase" }}>
                      {c.title}
                      {c.status === "scaffold" && <span className="stub-pill">DRAFT</span>}
                    </div>
                    {c.subtitle && (
                      <div style={{ color: "var(--read-muted)", fontSize: 14, marginTop: 4 }}>{c.subtitle}</div>
                    )}
                  </div>
                </div>
                <span style={{ fontFamily: "var(--font-jetbrains)", color: "var(--read-muted)", fontSize: 12 }}>READ →</span>
              </Link>
            </motion.div>
          ))}
        </motion.section>
      ))}

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={{ color: "var(--read-muted)", fontFamily: "var(--font-jetbrains)", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Close
        </h2>
        <Link href="/read/closing" style={{ display: "block", padding: "1rem 0", borderBottom: "1px solid var(--read-line)", color: "var(--read-text)", textDecoration: "none", fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase" }}>
          Closing
        </Link>
        <Link href="/read/about" style={{ display: "block", padding: "1rem 0", color: "var(--read-text)", textDecoration: "none", fontFamily: "var(--font-anton)", fontSize: 22, textTransform: "uppercase" }}>
          About the Author
        </Link>
      </motion.section>

      <nav className="chapter-nav">
        <Link href="/read/welcome" className="prev"><small>← Previous</small>Welcome</Link>
        <Link href="/read/ch1" className="next"><small>Begin →</small>Ch 1. The Boost Button Lie</Link>
      </nav>
    </>
  );
}
