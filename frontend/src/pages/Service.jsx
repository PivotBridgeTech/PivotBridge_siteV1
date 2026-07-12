import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SERVICES, PROCESS } from "../data/content.jsx";
import { Eyebrow, PageHero, CTABand } from "../components/Shared.jsx";
import usePageTitle from "../components/usePageTitle.js";

export default function Service() {
  const { slug } = useParams();
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  usePageTitle(
    idx === -1 ? undefined : SERVICES[idx].title,
    idx === -1 ? undefined : SERVICES[idx].short
  );
  if (idx === -1) return <Navigate to="/services" replace />;
  const svc = SERVICES[idx];
  const Icon = svc.icon;
  const prev = SERVICES[(idx + SERVICES.length - 1) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <>
      <PageHero eyebrow={svc.tag} title={svc.heroLine} intro={svc.intro} watermark={Icon} />
      <section className="max-w-6xl mx-auto px-5 pb-8">
        <div className="grid sm:grid-cols-2 gap-4">
          {svc.offerings.map((o) => (
            <div key={o.name} className="card-static rounded-lg p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-md" style={{ background: "rgba(46,102,71,0.08)" }}>
                  <Icon size={18} className="c-pine" />
                </span>
                <h3 className="f-display font-bold text-base">{o.name}</h3>
              </div>
              <p className="c-steel text-sm mt-3" style={{ lineHeight: 1.65 }}>{o.body}</p>
            </div>
          ))}
        </div>
        <div className="card-static rounded-lg p-6 md:p-7 mt-4" style={{ borderColor: "var(--pine)", borderWidth: 1.5 }}>
          <p className="f-mono text-xs c-pine tracking-widest uppercase">Is this you?</p>
          <p className="text-sm mt-2 c-steel" style={{ lineHeight: 1.65 }}>{svc.fit}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="f-display font-bold text-2xl md:text-3xl tracking-tight mt-3">From first call to running system.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {PROCESS.map(({ icon: PIcon, name, body }, i) => (
            <div key={name} className="card-static rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md" style={{ background: "rgba(46,102,71,0.08)" }}>
                  <PIcon size={20} className="c-pine" />
                </span>
                <span className="f-mono text-xs c-steel tracking-widest">0{i + 1}</span>
              </div>
              <h3 className="f-display font-bold text-base mt-4">{name}</h3>
              <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          <Link to={`/services/${prev.slug}`} className="card rounded-lg p-5 text-left flex items-center gap-3 no-underline" style={{ color: "var(--ink)" }}>
            <ArrowLeft size={18} className="c-steel shrink-0" />
            <div>
              <p className="f-mono text-xs c-steel tracking-widest uppercase">Previous service</p>
              <p className="f-display font-bold text-base mt-0.5">{prev.title}</p>
            </div>
          </Link>
          <Link to={`/services/${next.slug}`} className="card rounded-lg p-5 text-left flex items-center justify-end gap-3 no-underline" style={{ color: "var(--ink)" }}>
            <div className="text-right">
              <p className="f-mono text-xs c-steel tracking-widest uppercase">Next service</p>
              <p className="f-display font-bold text-base mt-0.5">{next.title}</p>
            </div>
            <ArrowRight size={18} className="c-steel shrink-0" />
          </Link>
        </div>
      </section>
      <CTABand />
    </>
  );
}
