"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CHAPTERS, getChapter, nextChapter, prevChapter } from "../chapters";
import ParticleBackground from "./ParticleBackground";

type Props = {
  id: string;
  children: ReactNode;
  particleVariant?: "green" | "blue" | "mixed";
};

export default function ChapterShell({ id, children, particleVariant }: Props) {
  const chapter = getChapter(id);
  const prev = prevChapter(id);
  const next = nextChapter(id);

  const variant: "green" | "blue" | "mixed" =
    particleVariant ?? (chapter?.part === 1 ? "blue" : chapter?.part === 2 ? "green" : chapter?.part === 3 ? "mixed" : "green");

  return (
    <>
      <ParticleBackground variant={variant} />

      {chapter?.num != null && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ marginBottom: "1rem" }}
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.25em",
              color: "var(--read-muted)",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Part {chapter.part} · Chapter {chapter.num} of 8
          </div>
          <div className="read-chnum" aria-hidden>{String(chapter.num).padStart(2, "0")}</div>
        </motion.div>
      )}

      <motion.h1
        className="read-chtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        style={{ marginBottom: chapter?.subtitle ? "0.75rem" : "3rem" }}
      >
        {chapter?.title}
        {chapter?.status === "scaffold" && <span className="stub-pill">DRAFT</span>}
      </motion.h1>

      {chapter?.subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ color: "var(--read-muted)", fontSize: 20, marginBottom: "3rem", maxWidth: 700 }}
        >
          {chapter.subtitle}
        </motion.p>
      )}

      <article className="read-prose">{children}</article>

      <nav className="chapter-nav">
        {prev ? (
          <Link href={prev.href} className="prev">
            <small>← Previous</small>
            {prev.num != null ? `Ch ${prev.num}. ` : ""}{prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={next.href} className="next">
            <small>Next →</small>
            {next.num != null ? `Ch ${next.num}. ` : ""}{next.title}
          </Link>
        ) : <span />}
      </nav>
    </>
  );
}

// Sanity export, keep lint happy if CHAPTERS unused warns.
export const _CHAPTERS = CHAPTERS;
