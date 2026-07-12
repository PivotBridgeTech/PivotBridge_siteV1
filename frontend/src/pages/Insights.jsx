import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
          {POSTS.map((p, i) => (
            <Link
              key={p.slug}
              to={`/insights/${p.slug}`}
              className={`card reveal reveal-d${(i % 3) + 1} rounded-lg p-6 md:p-7 flex flex-col no-underline`}
              style={{ color: "var(--ink)" }}
            >
              <div className="flex items-center justify-between">
                <span className="f-mono text-xs c-pine tracking-widest">{p.tag}</span>
                <span className="f-mono text-xs c-steel tracking-widest">{p.readTime}</span>
              </div>
              <h2 className="f-display font-bold text-lg mt-4" style={{ lineHeight: 1.3 }}>{p.title}</h2>
              <p className="c-steel text-sm mt-3 flex-1" style={{ lineHeight: 1.65 }}>{p.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 f-mono text-xs c-pine tracking-widest mt-5 pt-4 border-t bd-line">
                READ ARTICLE <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
