"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CHAPTERS } from "../chapters";
import { downloadAllAnswers, isChapterComplete } from "./worksheetStore";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 900) setOpen(false);
    const refresh = () => {
      const next: Record<string, boolean> = {};
      for (const c of CHAPTERS) next[c.id] = isChapterComplete(c.id);
      setCompleted(next);
    };
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("worksheet-saved", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("worksheet-saved", refresh);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/read") return pathname === "/read";
    return pathname === href;
  };

  const intro = CHAPTERS.filter((c) => c.part === null && c.id !== "closing" && c.id !== "about");
  const part1 = CHAPTERS.filter((c) => c.part === 1);
  const part2 = CHAPTERS.filter((c) => c.part === 2);
  const part3 = CHAPTERS.filter((c) => c.part === 3);
  const outro = CHAPTERS.filter((c) => c.id === "closing" || c.id === "about");

  return (
    <>
      <button
        className="sidebar-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "✕" : "☰"}
      </button>

      <aside className={`read-sidebar ${open ? "open" : "collapsed"}`}>
        <div style={{ marginTop: "0.5rem", marginBottom: "1.25rem" }}>
          <div className="read-display" style={{ fontSize: 24, lineHeight: 0.95 }}>
            $5/Day
            <br />
            Method
          </div>
          <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: 10, letterSpacing: "0.18em", color: "var(--read-muted)", marginTop: 6 }}>
            BY CHRIS TYSON
          </div>
        </div>

        <h4>Intro</h4>
        {intro.map((c) => (
          <Link key={c.id} href={c.href} className={isActive(c.href) ? "active" : ""}>
            {c.title}
          </Link>
        ))}

        <h4>Part 1 — The Lie</h4>
        {part1.map((c) => (
          <Link key={c.id} href={c.href} className={isActive(c.href) ? "active" : ""}>
            <span>{c.num}. {c.title}</span>
            {completed[c.id] && <span className="check">✓</span>}
          </Link>
        ))}

        <h4>Part 2 — The Setup</h4>
        {part2.map((c) => (
          <Link key={c.id} href={c.href} className={isActive(c.href) ? "active" : ""}>
            <span>{c.num}. {c.title}</span>
            {completed[c.id] && <span className="check">✓</span>}
          </Link>
        ))}

        <h4>Part 3 — The System</h4>
        {part3.map((c) => (
          <Link key={c.id} href={c.href} className={isActive(c.href) ? "active" : ""}>
            <span>{c.num}. {c.title}</span>
            {completed[c.id] && <span className="check">✓</span>}
          </Link>
        ))}

        <h4>Close</h4>
        {outro.map((c) => (
          <Link key={c.id} href={c.href} className={isActive(c.href) ? "active" : ""}>
            {c.title}
          </Link>
        ))}

        <button
          onClick={downloadAllAnswers}
          style={{
            marginTop: "2rem",
            width: "100%",
            background: "transparent",
            border: "1px solid var(--money-green)",
            color: "var(--money-green-bright)",
            padding: "0.75rem",
            fontFamily: "var(--font-jetbrains)",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          ↓ Download My Worksheet
        </button>
      </aside>
    </>
  );
}
