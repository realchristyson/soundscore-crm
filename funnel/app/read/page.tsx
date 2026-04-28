"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";

export default function ReadCoverPage() {
  return (
    <>
      <ParticleBackground variant="mixed" />

      <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: "0.3em", color: "var(--money-green-bright)", marginBottom: "1.5rem" }}
        >
          AN EBOOK FOR INDEPENDENT ARTISTS
        </motion.div>

        <motion.h1
          className="read-display"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{ fontSize: "clamp(72px, 16vw, 200px)", marginBottom: "1.5rem" }}
        >
          The
          <br />
          <span style={{
            background: "linear-gradient(135deg, #1E88FF 0%, #00FF7F 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}>$5/Day</span>
          <br />
          Method
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ fontSize: "clamp(18px, 2.4vw, 26px)", color: "var(--read-muted)", maxWidth: 720, lineHeight: 1.4, marginBottom: "3rem" }}
        >
          Stop boosting. Start scaling. The Meta Ads playbook for indie artists tired of throwing money at Instagram and getting nothing back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "5rem" }}
        >
          <Link
            href="/read/welcome"
            style={{
              background: "var(--money-green-bright)",
              color: "#000",
              padding: "1rem 2rem",
              fontFamily: "var(--font-anton)",
              fontSize: 22,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderRadius: 4,
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(0,255,127,0.4)",
            }}
          >
            Start Reading →
          </Link>
          <Link
            href="/read/contents"
            style={{
              border: "1px solid var(--read-line)",
              color: "var(--read-text)",
              padding: "1rem 2rem",
              fontFamily: "var(--font-jetbrains)",
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            Table of Contents
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ borderTop: "1px solid var(--read-line)", paddingTop: "2rem", display: "flex", gap: "3rem", flexWrap: "wrap", color: "var(--read-muted)", fontFamily: "var(--font-jetbrains), monospace", fontSize: 13 }}
        >
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", marginBottom: 4 }}>BY</div>
            <div style={{ color: "var(--read-text)", fontSize: 16 }}>Chris Tyson</div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", marginBottom: 4 }}>FOR</div>
            <div style={{ color: "var(--read-text)", fontSize: 16 }}>Independent Artists</div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", marginBottom: 4 }}>READING TIME</div>
            <div style={{ color: "var(--read-text)", fontSize: 16 }}>~90 min</div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
