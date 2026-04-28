"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import Callout from "../components/Callout";

export default function Welcome() {
  return (
    <>
      <ParticleBackground variant="green" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.25em", color: "var(--read-muted)", marginBottom: "1rem" }}
      >
        WELCOME
      </motion.div>

      <motion.h1
        className="read-chtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{ marginBottom: "2.5rem" }}
      >
        Read this first.
      </motion.h1>

      <article className="read-prose">
        <p>If you&apos;re reading this, something already told you the way you&apos;re running ads isn&apos;t working. That feeling? Trust it.</p>

        <p>I wrote this book for one person. The independent artist who keeps hitting that little blue Boost button on Instagram, watching the like count tick up, and wondering why none of it turns into streams, fans, or money.</p>

        <p>I&apos;ve been in the trenches with thousands of artists. I&apos;ve managed millions in ad spend for indie hip-hop and R&amp;B acts. I&apos;ve seen what works and what doesn&apos;t — and the gap between the two is wider than you think.</p>

        <Callout variant="insight">
          You don&apos;t need a bigger budget. You need a better system. $5 a day, run right, will out-perform $50 a day boosted every single time.
        </Callout>

        <p><strong>Here&apos;s the deal.</strong> This book is short on purpose. You&apos;re not here to read 400 pages — you&apos;re here to put your bag up. So I cut the fluff. Every chapter has one job: teach you something you can use today.</p>

        <p>You&apos;ll find a worksheet at the end of every chapter. Fill them out. They save in your browser. When you finish the book, you can download all your answers as one document — that&apos;s your personal playbook.</p>

        <p>You&apos;ll also see callouts like the one above. <strong>Key Insights</strong> are the lessons you absolutely cannot miss. <strong>Watch Outs</strong> are the mistakes I see artists make every single day. <strong>Pro Tips</strong> are the moves I use myself when I&apos;m running campaigns for paying clients.</p>

        <p>This book is broken into three parts:</p>

        <ul style={{ listStyle: "none", padding: 0, margin: "1.5rem 0" }}>
          <li style={{ padding: "1rem 0", borderBottom: "1px solid var(--read-line)" }}>
            <strong style={{ color: "var(--meta-blue-bright)" }}>Part 1 — The Lie</strong>
            <div style={{ color: "var(--read-muted)", fontSize: 16 }}>Why what you&apos;re doing now isn&apos;t working. The truth about boosting.</div>
          </li>
          <li style={{ padding: "1rem 0", borderBottom: "1px solid var(--read-line)" }}>
            <strong style={{ color: "var(--money-green-bright)" }}>Part 2 — The Setup</strong>
            <div style={{ color: "var(--read-muted)", fontSize: 16 }}>The technical foundation. Account, pixel, page, targeting, creative.</div>
          </li>
          <li style={{ padding: "1rem 0" }}>
            <strong style={{ color: "var(--money-green-bright)" }}>Part 3 — The System</strong>
            <div style={{ color: "var(--read-muted)", fontSize: 16 }}>The numbers, the decisions, and the scaling formula that turns $5 into a real audience.</div>
          </li>
        </ul>

        <p>You don&apos;t have to read it in order. But I built it so each chapter sets up the next. Skipping ahead is your call — just don&apos;t skip the work.</p>

        <p><strong>One last thing.</strong> If you finish this book and don&apos;t change a single thing, I failed you. So don&apos;t just read. Apply. Test. Track. Come back to the worksheets. That&apos;s how this becomes real money instead of another PDF in your phone.</p>

        <p>Ready? Let&apos;s run it.</p>

        <p style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--read-muted)", fontSize: 14, marginTop: "3rem" }}>
          — Chris Tyson<br />Atlanta, GA
        </p>
      </article>

      <nav className="chapter-nav">
        <Link href="/read" className="prev"><small>← Previous</small>Cover</Link>
        <Link href="/read/contents" className="next"><small>Next →</small>Table of Contents</Link>
      </nav>
    </>
  );
}
