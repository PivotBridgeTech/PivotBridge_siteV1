import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal.jsx";

export const Eyebrow = ({ children, light }) => (
  <p className="f-mono text-xs tracking-wide" style={{ color: light ? "#94BFA2" : "#2E6647" }}>{children}</p>
);

export const CTABand = () => (
  <Reveal as="section" className="bg-ink relative overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=60"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity: 0.25 }}
      loading="lazy"
    />
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(28,43,34,0.55), rgba(28,43,34,0.93))" }} aria-hidden="true" />
    <div className="absolute inset-0 dark-glow" aria-hidden="true" />
    <div className="relative max-w-screen-2xl mx-auto px-5 py-14 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h2 className="f-display font-bold text-2xl md:text-3xl tracking-tight text-white max-w-lg">
          Tell us the bottleneck. We'll bring the plan.
        </h2>
        <p className="mt-2 text-sm md:text-base" style={{ color: "#BFCFC4" }}>
          Free 30-minute consultation. No pitch deck, no jargon.
        </p>
      </div>
      <Link to="/contact" className="btn-primary group inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-md self-start md:self-auto no-underline">
        Book a consultation <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </Reveal>
);

export const PageHero = ({ eyebrow, title, intro, watermark: Watermark }) => (
  <section className="hero-glow relative overflow-hidden">
    {Watermark && (
      <div className="absolute pointer-events-none" style={{ right: "-40px", top: "-20px", opacity: 0.06 }} aria-hidden="true">
        <Watermark size={280} />
      </div>
    )}
    <div className="relative max-w-screen-2xl mx-auto px-5 pt-14 pb-10 md:pt-20 md:pb-14">
      <span className="fadeUp fadeUp-1 block"><Eyebrow>{eyebrow}</Eyebrow></span>
      <h1 className="f-display font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl mt-4 max-w-3xl fadeUp fadeUp-2" style={{ lineHeight: 1.06 }}>
        {title}
      </h1>
      {intro && <p className="mt-5 max-w-2xl text-base md:text-lg c-steel fadeUp fadeUp-3">{intro}</p>}
    </div>
  </section>
);
