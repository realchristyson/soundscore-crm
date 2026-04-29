import { notFound } from "next/navigation";
import CoverA from "../../components/covers/CoverA";
import CoverB from "../../components/covers/CoverB";
import CoverC from "../../components/covers/CoverC";

const MAP = {
  a: { Component: CoverA, name: "Ad Manager" },
  b: { Component: CoverB, name: "Money Stack" },
  c: { Component: CoverC, name: "Gradient Brutalist" },
} as const;

export function generateStaticParams() {
  return [{ id: "a" }, { id: "b" }, { id: "c" }];
}

export default function CoverDetail({ params }: { params: { id: string } }) {
  const entry = MAP[params.id.toLowerCase() as keyof typeof MAP];
  if (!entry) notFound();
  const { Component, name } = entry;

  return (
    <main className="min-h-screen bg-near-black px-5 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <a
          href="/covers"
          className="mono-accent inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gray-text transition-colors hover:text-money-green-bright"
        >
          ← All Concepts
        </a>
        <h1
          className="headline-mega mt-4 text-off-white"
          style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          {name}
        </h1>
        <div className="mt-10">
          <Component />
        </div>
      </div>
    </main>
  );
}
