"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface SessionData {
  firstName: string;
  customerEmail: string;
  customerName: string;
}

function ThankYouInner() {
  const [ready, setReady] = useState(false);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    setReady(true);

    // Fetch session data if paymentIntentId is in URL
    const pid = searchParams.get("pid");
    if (pid) {
      fetch(`/api/get-session?paymentIntentId=${pid}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.firstName) {
            setSessionData(data);
          }
        })
        .catch((err) => {
          console.error("Failed to fetch session:", err);
        });
    }
  }, [searchParams]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#F5F5F5",
        fontFamily: "var(--font-inter), -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(0,255,127,0.18) 0%, transparent 55%), radial-gradient(ellipse at 50% 90%, rgba(30,136,255,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      {/* grain */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          mixBlendMode: "overlay",
          pointerEvents: "none",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "6rem 1.75rem 4rem",
          position: "relative",
        }}
      >
        {/* status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 12 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            border: "1px solid rgba(0,255,127,0.45)",
            background: "rgba(0,255,127,0.08)",
            color: "#00FF7F",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 12,
            letterSpacing: "0.4em",
            fontWeight: 700,
            textTransform: "uppercase",
            borderRadius: 999,
            marginBottom: "2.25rem",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#00FF7F",
              boxShadow: "0 0 12px #00FF7F",
            }}
          />
          Payment Confirmed
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: "clamp(56px, 10vw, 110px)",
            lineHeight: 0.88,
            letterSpacing: "-0.015em",
            marginBottom: "1.25rem",
          }}
        >
          You&apos;re&nbsp;in.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #1E88FF 0%, #00FF7F 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Let&apos;s&nbsp;run&nbsp;it.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            color: "rgba(245,245,245,0.78)",
            maxWidth: 580,
            marginBottom: "2.75rem",
          }}
        >
          {sessionData?.firstName ? (
            <>
              Hey <strong style={{ color: "#F5F5F5" }}>{sessionData.firstName}</strong>
              {" "}— welcome to <strong style={{ color: "#F5F5F5" }}>The $5/Day Method</strong>.
              The full book is unlocked, your worksheets save as you read, and the
              system works as long as you actually run it. Don&apos;t just read.
              Apply. Test. Track.
            </>
          ) : (
            <>
              Welcome to <strong style={{ color: "#F5F5F5" }}>The $5/Day Method</strong>.
              The full book is unlocked, your worksheets save as you read, and the
              system works as long as you actually run it. Don&apos;t just read.
              Apply. Test. Track.
            </>
          )}
        </motion.p>

        {/* primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 14 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem" }}
        >
          <Link
            href="/read"
            style={{
              background: "#00FF7F",
              color: "#000",
              padding: "1.1rem 2.25rem",
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: 24,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderRadius: 6,
              textDecoration: "none",
              boxShadow:
                "0 30px 80px -20px rgba(0,255,127,0.6), 0 0 0 1px rgba(0,255,127,0.4)",
            }}
          >
            Start Reading →
          </Link>
          <Link
            href="/read/contents"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#F5F5F5",
              padding: "1.1rem 2rem",
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Table of Contents
          </Link>
        </motion.div>

        {/* save-this-link card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            border: "1px solid rgba(30,136,255,0.35)",
            background:
              "linear-gradient(180deg, rgba(30,136,255,0.06), rgba(0,0,0,0.4))",
            borderRadius: 12,
            padding: "1.5rem 1.5rem 1.4rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.4em",
              color: "#1E88FF",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            ⚠ Save this link
          </div>
          <p style={{ margin: 0, fontSize: 15, color: "rgba(245,245,245,0.85)", lineHeight: 1.55 }}>
            Bookmark this page or save the email we sent you. Your worksheet
            answers save in your browser, so come back to the same device when
            you want to keep going. If you ever lose the link, the email
            receipt has a fresh one.
          </p>
        </motion.div>

        {/* roadmap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{ marginBottom: "3rem" }}
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.4em",
              color: "#00FF7F",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Your next 30 days
          </div>
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: 14,
            }}
          >
            {[
              ["Today", "Read Chapters 1, 2 — get the mindset right."],
              ["Day 1, 2", "Set up Business Manager + Ads Manager (Ch 3, 4)."],
              ["Day 3", "Pick your winning post (Ch 5)."],
              ["Day 4", "Launch your first $5/day campaign (Ch 6)."],
              ["Day 5, 30", "Read the data, scale what works (Ch 7, 8)."],
            ].map(([when, what]) => (
              <li
                key={when as string}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: 18,
                  alignItems: "baseline",
                  paddingBottom: 12,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 11,
                    letterSpacing: "0.3em",
                    color: "rgba(245,245,245,0.5)",
                    textTransform: "uppercase",
                  }}
                >
                  {when}
                </span>
                <span style={{ fontSize: 15, color: "rgba(245,245,245,0.9)", lineHeight: 1.5 }}>
                  {what}
                </span>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* book a strategy call */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 12 }}
          transition={{ duration: 0.7, delay: 1 }}
          style={{
            padding: "2rem 1.75rem 1.85rem",
            borderRadius: 14,
            border: "1.5px solid rgba(0,255,127,0.55)",
            background:
              "linear-gradient(135deg, rgba(0,255,127,0.10), rgba(30,136,255,0.06) 60%, rgba(0,0,0,0.5))",
            marginBottom: "2.5rem",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "0 30px 80px -20px rgba(0,255,127,0.35), 0 0 0 1px rgba(0,255,127,0.15)",
          }}
        >
          {/* corner accent */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 180,
              height: 180,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,255,127,0.25) 0%, transparent 65%)",
              filter: "blur(20px)",
              pointerEvents: "none",
            }}
          />

          {/* limited spots tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px",
              border: "1px solid rgba(255,59,48,0.45)",
              background: "rgba(255,59,48,0.08)",
              borderRadius: 999,
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 10,
              letterSpacing: "0.4em",
              color: "#FF6B5C",
              textTransform: "uppercase",
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#FF6B5C",
                boxShadow: "0 0 10px #FF6B5C",
              }}
            />
            Limited spots this week
          </div>

          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.4em",
              color: "#00FF7F",
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            ⚠ Important · Read this before you start
          </div>

          <div
            style={{
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: "clamp(28px, 4.2vw, 38px)",
              lineHeight: 1.05,
              letterSpacing: "-0.005em",
              marginBottom: 14,
              maxWidth: 560,
            }}
          >
            Book your free 1-on-1 strategy call with{" "}
            <span style={{ color: "#00FF7F" }}>Chris Tyson</span> and his team.
          </div>

          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.55,
              color: "rgba(245,245,245,0.85)",
              marginBottom: 12,
              maxWidth: 580,
            }}
          >
            The book gives you the system. The call makes it personal. Chris
            and his team will look at <strong style={{ color: "#F5F5F5" }}>your
            music, your numbers, and your current setup</strong> and tell you
            exactly what to launch first so you don&apos;t waste a single dollar
            of that $5/day.
          </p>

          <p
            style={{
              fontSize: 14,
              lineHeight: 1.55,
              color: "rgba(245,245,245,0.65)",
              marginBottom: 22,
              maxWidth: 580,
            }}
          >
            This call isn&apos;t available to the public. It&apos;s only being
            offered to new $5/Day Method buyers, and only a handful of slots
            open up each week. Once they&apos;re gone for this week,
            they&apos;re gone.
          </p>

          <a
            href="https://api.leadconnectorhq.com/widget/bookings/musicfunding/music"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              background: "#00FF7F",
              color: "#000",
              padding: "1rem 1.6rem",
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: 22,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderRadius: 6,
              textDecoration: "none",
              boxShadow:
                "0 20px 50px -10px rgba(0,255,127,0.55), 0 0 0 1px rgba(0,255,127,0.4)",
            }}
          >
            Book My Call
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 30,
                height: 30,
                background: "#000",
                color: "#00FF7F",
                borderRadius: "50%",
                fontSize: 16,
              }}
            >
              →
            </span>
          </a>

          <div
            style={{
              marginTop: 16,
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              letterSpacing: "0.3em",
              color: "rgba(245,245,245,0.45)",
              textTransform: "uppercase",
            }}
          >
            30 min · Free · No obligation
          </div>
        </motion.div>

        {/* footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 18,
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            letterSpacing: "0.3em",
            color: "rgba(245,245,245,0.5)",
            textTransform: "uppercase",
          }}
        >
          <span>Order #pending</span>
          <span>Need help? hello@your-domain.com</span>
        </motion.div>
      </div>
    </main>
  );
}

export default function ThankYou() {
  return (
    <Suspense fallback={null}>
      <ThankYouInner />
    </Suspense>
  );
}
