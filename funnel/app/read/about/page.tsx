"use client";

import ChapterShell from "../components/ChapterShell";

export default function About() {
  return (
    <ChapterShell id="about" particleVariant="green">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2.5rem",
        }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid var(--money-green-bright, #00ff7f)",
            boxShadow:
              "0 20px 60px -10px rgba(0,255,127,0.45), 0 0 0 6px rgba(0,255,127,0.08)",
            background:
              "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/chris.jpg"
            alt="Chris Tyson"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const fallback = t.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div
            style={{
              display: "none",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-anton), sans-serif",
              fontSize: 80,
              color: "var(--money-green-bright, #00ff7f)",
              letterSpacing: "0.04em",
            }}
          >
            CT
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
