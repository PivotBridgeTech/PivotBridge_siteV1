import { INDUSTRIES } from "../data/content.jsx";
import { PageHero, CTABand } from "../components/Shared.jsx";
import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import usePageTitle from "../components/usePageTitle.js";

export default function Industries() {
  usePageTitle("Industries");
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for markets that run on servers."
        intro="If your business stops when a system goes down, infrastructure isn't an IT expense. It's the floor everything else stands on. Here's how that plays out in the markets we serve."
      />
      <section className="max-w-screen-2xl mx-auto px-5 pb-16 md:pb-24 flex flex-col gap-5">
        {INDUSTRIES.map(({ icon: Icon, name, pain, detail, image, imageAlt }, i) => (
          <Reveal key={name} delay={staggerDelay(i)} className="card-static rounded-lg overflow-hidden md:grid md:grid-cols-12">
            <div className="img-card md:col-span-3" style={{ aspectRatio: "16 / 9" }}>
              <img src={image} alt={imageAlt} loading="lazy" />
              <div className="img-scrim" />
              <span className="card-icon absolute bottom-3.5 left-4 inline-flex items-center justify-center w-11 h-11 rounded-md" style={{ background: "rgba(255,255,255,0.16)", backdropFilter: "blur(8px)" }}>
                <Icon size={20} style={{ color: "#fff" }} />
              </span>
            </div>
            <div className="p-6 md:p-8 md:col-span-9 grid md:grid-cols-9 gap-5 items-start">
              <div className="md:col-span-2">
                <h3 className="f-display font-bold text-xl">{name}</h3>
              </div>
              <div className="md:col-span-3">
                <p className="f-mono text-xs c-pine tracking-widest uppercase">The stakes</p>
                <p className="c-steel text-base mt-2" style={{ lineHeight: 1.65 }}>{pain}</p>
              </div>
              <div className="md:col-span-4">
                <p className="f-mono text-xs c-pine tracking-widest uppercase">What we do about it</p>
                <p className="c-steel text-base mt-2" style={{ lineHeight: 1.65 }}>{detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <p className="c-steel text-base mt-2 max-w-2xl">
          Don't see your industry? The pattern matters more than the label: if downtime, data, or manual work is costing you money, the conversation is worth having.
        </p>
      </section>
      <CTABand />
    </>
  );
}
