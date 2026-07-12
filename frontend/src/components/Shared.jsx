import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Eyebrow = ({ children, light }) => (
  <p className="f-mono text-xs tracking-wide" style={{ color: light ? "#94BFA2" : "#2E6647" }}>{children}</p>
);

export const CTABand = () => (
  <section className="bg-ink relative overflow-hidden">
    <div className="absolute inset-0 dark-glow" aria-hidden="true" />
    <div className="relative max-w-6xl mx-auto px-5 py-10 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h2 className="f-display font-bold text-2xl md:text-3xl tracking-tight text-white max-w-lg">
          Tell us the bottleneck. We'll bring the plan.
        </h2>
        <p className="mt-2 text-sm md:text-base" style={{ color: "#BFCFC4" }}>
          Free 30-minute consultation. No pitch deck, no jargon.
        </p>
      </div>
      <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-md self-start md:self-auto no-underline">
        Book a consultation <ArrowRight size={18} />
      </Link>
    </div>
  </section>
);

export const PageHero = ({ eyebrow, title, intro, watermark: Watermark }) => (
  <section className="hero-glow relative overflow-hidden">
    {Watermark && (
      <div className="absolute pointer-events-none" style={{ right: "-40px", top: "-20px", opacity: 0.06 }} aria-hidden="true">
        <Watermark size={280} />
      </div>
    )}
    <div className="relative max-w-6xl mx-auto px-5 pt-10 pb-8 md:pt-14 md:pb-10">
      <span className="rise rise-1 block"><Eyebrow>{eyebrow}</Eyebrow></span>
      <h1 className="f-display font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl mt-4 max-w-3xl rise rise-2" style={{ lineHeight: 1.06 }}>
        {title}
      </h1>
      {intro && <p className="mt-5 max-w-2xl text-base md:text-lg c-steel rise rise-3">{intro}</p>}
    </div>
  </section>
);
