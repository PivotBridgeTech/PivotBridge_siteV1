import { POSTS } from "../data/content.jsx";
import { PageHero, CTABand } from "../components/Shared.jsx";
import usePageTitle from "../components/usePageTitle.js";

export default function Insights() {
  usePageTitle("Insights");
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Plain-language answers to expensive questions."
        intro="Short, practical reads on the technology decisions business owners actually face — written to be useful before you ever talk to us."
      />
      <section className="max-w-6xl mx-auto px-5 pb-16 md:pb-24">
        <div className="grid md:grid-cols-3 gap-4">
          {POSTS.map((p) => (
            <article key={p.title} className="card-static rounded-lg p-6 md:p-7 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="f-mono text-xs c-pine tracking-widest">{p.tag}</span>
                <span className="f-mono text-xs tracking-widest px-2 py-1 rounded" style={{ background: "rgba(180,50,42,0.08)", color: "#B4322A" }}>DRAFT</span>
              </div>
              <h2 className="f-display font-bold text-lg mt-4" style={{ lineHeight: 1.3 }}>{p.title}</h2>
              <p className="c-steel text-sm mt-3 flex-1" style={{ lineHeight: 1.65 }}>{p.excerpt}</p>
              <span className="f-mono text-xs c-steel mt-5 pt-4 border-t bd-line">Replace with your published article before launch</span>
            </article>
          ))}
        </div>
        <div className="card-static rounded-lg p-6 mt-6" style={{ background: "#ECF2ED" }}>
          <p className="c-steel text-sm max-w-2xl" style={{ lineHeight: 1.65 }}>
            <span className="font-semibold" style={{ color: "var(--ink)" }}>Launch note:</span> keep this page out of the nav until at least two of these are real, published articles. An empty or stale blog signals an inactive company — the opposite of its purpose.
          </p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
