"use client";

import ChapterShell from "../components/ChapterShell";

export default function About() {
  return (
    <ChapterShell id="about" particleVariant="green">
      <div className="chris-portrait-wrap">
        <div className="chris-portrait-stage">
          <div className="chris-portrait-halo" aria-hidden />
          <div className="chris-portrait-glow chris-portrait-glow-green" aria-hidden />
          <div className="chris-portrait-glow chris-portrait-glow-blue" aria-hidden />
          <div className="chris-portrait-frame">
            <img
              src="/images/chris.jpg"
              alt="Chris Tyson"
              className="chris-portrait-img"
            />
            <div className="chris-portrait-grain" aria-hidden />
          </div>
          <div className="chris-portrait-tag" aria-hidden>
            <span className="dot" /> CHRIS TYSON · 2026
          </div>
        </div>
      </div>

      <p>
        <strong>Chris Tyson</strong> has spent millions of dollars running ads
        for independent artists. Not theory. Not case studies he read in a
        course. Real money, real campaigns, real artists who went from a few
        hundred monthly listeners to multi-million-stream catalogs because the
        system worked.
      </p>

      <p>
        Most music coaches teach the surface stuff. How to post more. How to
        chase playlists. How to network at events. Chris built a different
        lane. He teaches the financial and operational side of the indie
        music business that most gurus won&apos;t touch. Real ad strategy.
        Business credit. Funding. The systems that turn an artist into a real
        company.
      </p>

      <p>
        He&apos;s the founder of Music Funding Academy, the program built for
        artists who&apos;ve outgrown the $5/day phase and are ready to scale
        with funding, credit, and serious capital behind their campaigns.
      </p>

      <p>
        Lives in Atlanta. Father. Hustler. Built every single piece of this
        from scratch. No investors. No celebrity co-signs. No shortcuts.
      </p>

      <p style={{ marginTop: "2rem" }}>
        If this book helped you, the best thank-you is to actually run the
        system. Then come find me on Instagram and let me know how it went.
      </p>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.75rem",
          borderRadius: 12,
          border: "1px solid rgba(0,255,127,0.35)",
          background:
            "linear-gradient(180deg, rgba(0,255,127,0.05) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            letterSpacing: "0.4em",
            color: "var(--read-muted)",
            textTransform: "uppercase",
            marginBottom: "0.6rem",
          }}
        >
          Follow me on Instagram
        </div>
        <a
          href="https://www.instagram.com/realchristyson"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            fontSize: 32,
            color: "var(--money-green-bright, #00ff7f)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          @RealChrisTyson
        </a>
        <div
          style={{
            marginTop: "0.4rem",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 13,
            color: "var(--read-muted)",
          }}
        >
          instagram.com/realchristyson
        </div>
      </div>
    </ChapterShell>
  );
}
