import { CASES } from "../data/content.jsx";
import { PageHero, CTABand } from "../components/Shared.jsx";
import usePageTitle from "../components/usePageTitle.js";

export default function Work() {
  usePageTitle("Our work");
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Built, shipped, and running in real businesses."
        intro="Engagements across industries that show how we work: find the expensive problem, build the smallest system that solves it, and leave the client owning everything."
      />
      <section className="max-w-6xl mx-auto px-5 pb-16 md:pb-24 flex flex-col gap-4">
        {CASES.map((c) => (
          <article key={c.title} className="card-static reveal rounded-lg p-6 md:p-8">
            <p className="f-mono text-xs c-pine tracking-widest">{c.industry}</p>
            <h2 className="f-display font-bold text-2xl mt-2">{c.title}</h2>
            <div className="grid md:grid-cols-3 gap-5 mt-6">
              <div>
                <p className="f-mono text-xs c-steel tracking-widest uppercase">Problem</p>
                <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{c.problem}</p>
              </div>
              <div>
                <p className="f-mono text-xs c-steel tracking-widest uppercase">What we built</p>
                <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{c.built}</p>
              </div>
              <div>
                <p className="f-mono text-xs c-steel tracking-widest uppercase">Result</p>
                <p className="text-sm mt-2 font-semibold" style={{ lineHeight: 1.65 }}>{c.result}</p>
              </div>
            </div>
            <p className="f-mono text-xs c-steel mt-5 pt-4 border-t bd-line">{c.stack}</p>
          </article>
        ))}
      </section>
      <CTABand />
    </>
  );
}
