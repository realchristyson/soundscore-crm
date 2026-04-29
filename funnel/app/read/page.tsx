"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";

export default function ReadCoverPage() {
  return (
    <>
      <ParticleBackground variant="mixed" />

      <section className="read-hero">
        <div className="read-hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 12,
              letterSpacing: "0.3em",
              color: "var(--money-green-bright)",
              marginBottom: "1.5rem",
            }}
          >
            AN EBOOK FOR INDEPENDENT ARTISTS
          </motion.div>

          <motion.h1
            className="read-display"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{ fontSize: "clamp(64px, 11vw, 144px)", marginBottom: "1.5rem", lineHeight: 0.86 }}
          >
            The
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #1E88FF 0%, #00FF7F 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              $5/Day
            </span>
            <br />
            Method
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontSize: "clamp(17px, 1.6vw, 22px)",
              color: "var(--read-muted)",
              maxWidth: 620,
              lineHeight: 1.45,
              marginBottom: "2.5rem",
            }}
          >
            Stop boosting. Start scaling. The Meta Ads playbook for indie artists tired
            of throwing money at Instagram and getting nothing back.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}
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
            style={{
              borderTop: "1px solid var(--read-line)",
              paddingTop: "2rem",
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              color: "var(--read-muted)",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 13,
            }}
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
        </div>

        <div className="read-hero-book">
          <Hardcover />
        </div>
      </section>
    </>
  );
}

/* Front-tilt hardcover with Cover A artwork. Same vibe as the funnel hero. */
function Hardcover() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="hc-stage"
    >
      <div className="hc-glow" aria-hidden />
      <motion.div
        animate={{ y: [0, -8, 0], rotateZ: [0, 0.5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="hc-book"
      >
        {/* page edges (right) */}
        <div className="hc-pages" aria-hidden />

        {/* spine (left) */}
        <div className="hc-spine" aria-hidden>
          <span className="hc-spine-title">$5/Day Method</span>
          <span className="hc-spine-author">Tyson</span>
        </div>

        {/* back board */}
        <div className="hc-back" aria-hidden />

        {/* FRONT COVER */}
        <div className="hc-front">
          {/* grain */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.14,
              mixBlendMode: "overlay",
              pointerEvents: "none",
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
            }}
          />
          {/* glossy highlight */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              mixBlendMode: "overlay",
              pointerEvents: "none",
              background:
                "linear-gradient(110deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 35%, rgba(0,0,0,0.18) 100%)",
            }}
          />

          <div className="hc-frame">
            <div className="hc-eyebrow-row">
              <span className="hc-eyebrow">The Playbook</span>
              <span className="hc-eyebrow hc-eyebrow-green">● 2026</span>
            </div>

            <div className="hc-mega">
              <div className="hc-mega-row">
                <span className="hc-mega-dollar">$5</span>
                <div className="hc-mega-day">
                  <span className="hc-mega-a">A</span>
                  <span className="hc-mega-day-word">DAY</span>
                </div>
              </div>
              <div className="hc-mega-method">METHOD</div>

              <div className="hc-rule" />

              <p className="hc-sub">
                How independent artists turn{" "}
                <span style={{ color: "var(--off-white,#F5F5F5)" }}>$5 a day on Meta Ads</span>{" "}
                into{" "}
                <span style={{ color: "var(--off-white,#F5F5F5)" }}>10,000+ monthly listeners</span>.
              </p>
            </div>

            <div className="hc-author-row">
              <div>
                <div className="hc-by">By</div>
                <div className="hc-name">CHRIS TYSON</div>
              </div>
              <div className="hc-stamp">
                No.&nbsp;01
                <br />
                The&nbsp;Method
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
