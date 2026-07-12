import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { POSTS } from "../data/content.jsx";
import { PageHero, CTABand } from "../components/Shared.jsx";
import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import usePageTitle from "../components/usePageTitle.js";

export default function Insights() {
  usePageTitle("Insights");
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Plain-language answers to expensive questions."
        intro="Short, practical reads on the technology decisions business owners actually face, written to be useful before you ever talk to us."
      />
      <section className="max-w-screen-2xl mx-auto px-5 pb-16 md:pb-24">
        <div className="grid md:grid-cols-3 gap-4">
          {POSTS.map((p, i) => (
            <Reveal
              as={Link}
              key={p.slug}
              delay={staggerDelay(i)}
              to={`/insights/${p.slug}`}
              className="card group rounded-lg overflow-hidden flex flex-col no-underline"
              style={{ color: "var(--ink)" }}
            >
              <div className="img-card" style={{ aspectRatio: "4 / 3" }}>
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
                <div className="img-scrim" />
                <span className="img-pill absolute top-3.5 left-3.5">{p.tag}</span>
                <div className="on-photo absolute left-4 right-4 bottom-3.5">
                  <p className="f-mono text-[11px] tracking-widest" style={{ color: "#BFCFC4" }}>{p.date} · {p.readTime}</p>
                  <h2 className="f-display font-bold text-white text-lg mt-1" style={{ lineHeight: 1.3 }}>{p.title}</h2>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="c-steel text-sm flex-1" style={{ lineHeight: 1.65 }}>{p.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 f-mono text-xs c-pine tracking-widest mt-5 pt-4 border-t bd-line">
                  READ ARTICLE <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
