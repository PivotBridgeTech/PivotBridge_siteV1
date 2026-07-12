import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SERVICES } from "../data/content.jsx";
import { Eyebrow, PageHero, CTABand } from "../components/Shared.jsx";
import FitFinder from "../components/FitFinder.jsx";
import usePageTitle from "../components/usePageTitle.js";

export default function ServicesIndex() {
  usePageTitle("Services", "Four ways Pivot Bridge takes work off your plate: AI that earns its keep, full-stack product development, workflow automation, and cloud migration & management.");
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four ways we take work off your plate."
        intro="Every service below follows the same rule: it has to return more than it costs, in hours saved or revenue created. If a project can't clear that bar, we'll tell you before you spend a dollar."
      />
      <section className="max-w-6xl mx-auto px-5 pb-12 md:pb-16">
        <FitFinder />
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {SERVICES.map(({ slug, icon: Icon, tag, title, short }, i) => (
            <Link key={slug} to={`/services/${slug}`} className={`card reveal reveal-d${i % 2 === 1 ? 2 : 1} rounded-lg p-6 md:p-8 text-left no-underline`} style={{ color: "var(--ink)" }}>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-md" style={{ background: "rgba(46,102,71,0.08)" }}>
                  <Icon size={22} className="c-pine" />
                </span>
                <span className="f-mono text-xs c-steel tracking-widest">{tag}</span>
              </div>
              <h3 className="f-display font-bold text-xl mt-5">{title}</h3>
              <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{short}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold c-pine mt-4">
                Full details <ChevronRight size={16} className="card-arrow" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
