"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div
              className="headline-mega text-money-green-bright"
              style={{ fontSize: "32px", letterSpacing: "0.04em" }}
            >
              MFA
            </div>
            <div className="mono-accent mt-1 text-[10px] uppercase tracking-[0.3em] text-gray-text">
              Music Funding Academy
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-[12px] uppercase tracking-[0.2em] text-gray-text mono-accent">
            <a href="#offer" className="hover:text-money-green-bright">
              Get The Method
            </a>
            <a href="#" className="hover:text-money-green-bright">
              Terms
            </a>
            <a href="#" className="hover:text-money-green-bright">
              Privacy
            </a>
            <a
              href="mailto:hello@musicfundingacademy.com"
              className="hover:text-money-green-bright"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-[11px] leading-relaxed text-gray-text/80">
          <p>
            © {new Date().getFullYear()} Music Funding Academy. All rights
            reserved. The $5/Day Method™ is a digital product. Results vary
            and depend on effort, content quality, and ad-spend consistency.
          </p>
          <p className="mt-3">
            This site is not part of the Facebook or Meta website, nor is it
            endorsed by Meta Platforms, Inc. Facebook™, Instagram™ and Meta™
            are trademarks of Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
