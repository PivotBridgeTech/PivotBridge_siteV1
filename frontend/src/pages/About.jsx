import { PROCESS } from "../data/content.jsx";
import { Eyebrow, PageHero, CTABand } from "../components/Shared.jsx";
import usePageTitle from "../components/usePageTitle.js";

const VALUES = [
  { title: "Plain language, always", body: "Every proposal, update, and invoice reads in business terms. If you ever need a translator to understand what you're paying for, we've failed." },
  { title: "You own everything", body: "Code, servers, accounts, and documentation live under your control from day one. Our job is to be valuable, not to be irreplaceable." },
  { title: "ROI or we say no", body: "If a project won't return more than it costs — in hours, revenue, or risk removed — we'll tell you in the first meeting and save you the money." },
];

const NOT_FOR = [
  { title: "Cheapest-bid shoppers", body: "If the deciding factor is the lowest number on the page, we'll lose that comparison — and you'll usually pay for the difference later in rebuilds." },
  { title: "Hands-off buyers", body: "Good systems need your knowledge of your own business. If nobody on your side can give us an hour a week during a build, the result will miss." },
  { title: "Overnight-unicorn hunters", body: "We build things that compound: hours saved, revenue captured, risk removed. If the goal is a moonshot app by next month, we're the wrong call — and we'll say so." },
];

export default function About() {
  usePageTitle("About");
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The engineering team you don't have to hire."
        intro="Pivot Bridge Technology exists for one kind of client: the small or medium business that knows technology could be moving their numbers, but doesn't have — and shouldn't need — an in-house engineering department."
      />
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <div className="grid md:grid-cols-3 gap-4">
          {VALUES.map((v) => (
            <div key={v.title} className="card-static rounded-lg p-6 md:p-7">
              <h3 className="f-display font-bold text-lg">{v.title}</h3>
              <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-12">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="f-display font-bold text-2xl md:text-3xl tracking-tight mt-3">Four steps, no surprises.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {PROCESS.map(({ icon: PIcon, name, body }, i) => (
            <div key={name} className="card-static rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md" style={{ background: "rgba(34,81,204,0.08)" }}>
                  <PIcon size={20} className="c-blue" />
                </span>
                <span className="f-mono text-xs c-steel tracking-widest">0{i + 1}</span>
              </div>
              <h3 className="f-display font-bold text-base mt-4">{name}</h3>
              <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16 md:pb-24">
        <div className="card-static rounded-lg p-6 md:p-8" style={{ borderColor: "var(--ink)", borderWidth: 1.5 }}>
          <Eyebrow>The honest part</Eyebrow>
          <h2 className="f-display font-bold text-2xl md:text-3xl tracking-tight mt-3">Who we're not for.</h2>
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {NOT_FOR.map((v) => (
              <div key={v.title}>
                <h3 className="f-display font-bold text-base">{v.title}</h3>
                <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
