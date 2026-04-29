import CoverA from "../components/covers/CoverA";
import CoverB from "../components/covers/CoverB";
import CoverC from "../components/covers/CoverC";

export const metadata = {
  title: "Cover Concepts — The $5/Day Method",
};

const COVERS = [
  {
    id: "A",
    component: CoverA,
    name: "Ad Manager",
    desc: "Looks like a live Meta Ads dashboard. Tech / data / insider feel.",
    palette: ["#0866FF", "#00FF7F", "#0A0A0A"],
  },
  {
    id: "B",
    component: CoverB,
    name: "Money Stack",
    desc: "Bold Anton typography. Massive $5. Currency motif. Street swagger.",
    palette: ["#00FF7F", "#00C853", "#000000"],
  },
  {
    id: "C",
    component: CoverC,
    name: "Gradient Brutalist",
    desc: "Single huge gradient orb. Asymmetric editorial type. Apple-style.",
    palette: ["#00FF7F", "#0866FF", "#FFFFFF"],
  },
];

export default function CoversPage() {
  return (
    <main className="min-h-screen bg-near-black px-5 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 max-w-3xl">
          <span className="mono-accent text-[12px] uppercase tracking-[0.3em] text-money-green-bright">
            / Concepts
          </span>
          <h1
            className="headline-mega mt-3 text-off-white"
            style={{ fontSize: "clamp(44px, 7vw, 96px)" }}
          >
            Three cover directions.
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-gray-text sm:text-[18px]">
            Pick a direction and I&apos;ll refine. Each cover is rendered live
            as code (HTML/CSS/SVG) — fully scalable, no bitmap. Click any cover
            to see it full-size.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-7">
          {COVERS.map(({ id, component: Cover, name, desc, palette }) => (
            <article key={id} className="group">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="headline-mega text-money-green-bright"
                    style={{ fontSize: "44px", lineHeight: 1 }}
                  >
                    {id}
                  </span>
                  <div>
                    <div
                      className="font-semibold text-off-white"
                      style={{ fontSize: "20px" }}
                    >
                      {name}
                    </div>
                    <div className="mono-accent text-[10px] uppercase tracking-[0.25em] text-gray-text">
                      Cover Concept · 2:3
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {palette.map((c) => (
                    <span
                      key={c}
                      title={c}
                      className="block size-4 rounded-full border border-white/15"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>

              <a
                href={`/covers/${id.toLowerCase()}`}
                className="block transition-transform hover:-translate-y-1"
              >
                <Cover />
              </a>

              <p className="mt-5 text-[14px] leading-relaxed text-gray-text">
                {desc}
              </p>
            </article>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8">
          <p className="mono-accent text-[11px] uppercase tracking-[0.3em] text-gray-text">
            Once you pick a direction, I&apos;ll refine the chosen cover —
            adjust type, hierarchy, finish, badges, or swap a fresh photo
            placeholder. We can also export it as 1600×2400 PNG for stores.
          </p>
        </footer>
      </div>
    </main>
  );
}
