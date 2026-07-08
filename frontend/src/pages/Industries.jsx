import { INDUSTRIES } from "../data/content.jsx";
import { PageHero, CTABand } from "../components/Shared.jsx";
import usePageTitle from "../components/usePageTitle.js";

export default function Industries() {
  usePageTitle("Industries");
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for markets that run on servers."
        intro="If your business stops when a system goes down, infrastructure isn't an IT expense — it's the floor everything else stands on. Here's how that plays out in the markets we serve."
      />
      <section className="max-w-6xl mx-auto px-5 pb-16 md:pb-24 flex flex-col gap-4">
        {INDUSTRIES.map(({ icon: Icon, name, pain, detail }) => (
          <div key={name} className="card-static rounded-lg p-6 md:p-8 grid md:grid-cols-12 gap-5">
            <div className="md:col-span-4 flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-md shrink-0" style={{ background: "rgba(46,102,71,0.08)" }}>
                <Icon size={22} className="c-pine" />
              </span>
              <h3 className="f-display font-bold text-lg">{name}</h3>
            </div>
            <div className="md:col-span-4">
              <p className="f-mono text-xs c-pine tracking-widest uppercase">The stakes</p>
              <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{pain}</p>
            </div>
            <div className="md:col-span-4">
              <p className="f-mono text-xs c-pine tracking-widest uppercase">What we do about it</p>
              <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{detail}</p>
            </div>
          </div>
        ))}
        <p className="c-steel text-sm mt-2 max-w-2xl">
          Don't see your industry? The pattern matters more than the label — if downtime, data, or manual work is costing you money, the conversation is worth having.
        </p>
      </section>
      <CTABand />
    </>
  );
}
