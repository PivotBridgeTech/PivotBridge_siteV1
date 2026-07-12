import { CASES } from "../data/content.jsx";
import { PageHero, CTABand } from "../components/Shared.jsx";
import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import usePageTitle from "../components/usePageTitle.js";

// Left-to-right cascade of a card's three columns, once the card itself reveals.
const COLUMN_STAGGER = 0.08;

export default function Work() {
  usePageTitle("Our work");
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Built, shipped, and running in real businesses."
        intro="Engagements across industries that show how we work: find the expensive problem, build the smallest system that solves it, and leave the client owning everything."
      />
      <section className="max-w-screen-2xl mx-auto px-5 pb-16 md:pb-24 flex flex-col gap-4">
        {CASES.map((c, i) => {
          const cardDelay = staggerDelay(i);
          return (
            <Reveal as="article" key={c.title} delay={cardDelay} className="card-static rounded-lg overflow-hidden">
              <div className="img-card" style={{ aspectRatio: "21 / 6" }}>
                <img src={c.image} alt={c.imageAlt} loading="lazy" />
                <div className="img-scrim" />
                <span className="img-pill absolute top-4 left-4 md:top-5 md:left-6">{c.industry}</span>
              </div>
              <div className="p-6 md:p-8">
                <h2 className="f-display font-bold text-2xl">{c.title}</h2>
                <div className="grid md:grid-cols-3 gap-5 mt-6">
                  <div className="reveal-child" style={{ transitionDelay: `${cardDelay + COLUMN_STAGGER}s` }}>
                    <p className="f-mono text-xs c-steel tracking-widest uppercase">Problem</p>
                    <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{c.problem}</p>
                  </div>
                  <div className="reveal-child" style={{ transitionDelay: `${cardDelay + COLUMN_STAGGER * 2}s` }}>
                    <p className="f-mono text-xs c-steel tracking-widest uppercase">What we built</p>
                    <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{c.built}</p>
                  </div>
                  <div className="reveal-child" style={{ transitionDelay: `${cardDelay + COLUMN_STAGGER * 3}s` }}>
                    <p className="f-mono text-xs c-steel tracking-widest uppercase">Result</p>
                    <p className="text-sm mt-2 font-semibold" style={{ lineHeight: 1.65 }}>{c.result}</p>
                  </div>
                </div>
                <p className="f-mono text-xs c-steel mt-5 pt-4 border-t bd-line">{c.stack}</p>
              </div>
            </Reveal>
          );
        })}
      </section>
      <CTABand />
    </>
  );
}
