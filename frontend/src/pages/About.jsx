import { MISSION, PROCESS, TEAM_STATEMENTS } from "../data/content.jsx";
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
  usePageTitle("About", "Meet the team behind Pivot Bridge Technology — the engineering partner for growing businesses that need enterprise-grade software, AI, and cloud without an in-house department.");
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The engineering team you don't have to hire."
        intro="Pivot Bridge Technology exists for one kind of client: the growing business that knows technology could be moving their numbers, but doesn't have — and shouldn't need — an in-house engineering department."
      />

      {/* Mission — contained band, two columns */}
      <section className="border-y bd-line" style={{ background: "#ECF2ED" }}>
        <div className="max-w-6xl mx-auto px-5 py-10 md:py-14 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <Eyebrow>{MISSION.eyebrow}</Eyebrow>
            <h2 className="f-display font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight mt-3" style={{ lineHeight: 1.15 }}>
              {MISSION.lead}<span className="c-pine">{MISSION.highlight}</span>{MISSION.rest}
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="c-steel text-base md:text-lg" style={{ lineHeight: 1.7 }}>{MISSION.body}</p>
            <div className="card-static rounded-lg p-6 md:p-7" style={{ borderColor: "var(--pine)", borderWidth: 1.5 }}>
              <p className="f-mono text-xs c-pine tracking-widest uppercase">{MISSION.statementLabel}</p>
              <p className="text-sm md:text-base mt-2" style={{ lineHeight: 1.7 }}>{MISSION.statement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership — one contained card per person */}
      <section className="max-w-6xl mx-auto px-5 py-10 md:py-14">
        <Eyebrow>Leadership</Eyebrow>
        <h2 className="f-display font-bold text-2xl md:text-3xl tracking-tight mt-3">
          The people you'll actually work with.
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          {TEAM_STATEMENTS.map((p) => (
            <article key={p.name} className="card-static reveal rounded-lg p-6 md:p-8 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-3.5">
                <span
                  className="inline-flex items-center justify-center rounded-full f-display font-bold text-base shrink-0"
                  style={{ width: 52, height: 52, color: "#fff", background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})` }}
                  aria-hidden="true"
                >
                  {p.initials}
                </span>
                <div>
                  <p className="f-display font-bold text-base m-0">{p.name}</p>
                  <p className="f-mono text-xs c-steel tracking-widest uppercase m-0 mt-1">{p.role}</p>
                </div>
              </div>
              <div className="md:col-span-9">
                <blockquote className="m-0 f-display font-semibold text-base md:text-lg" style={{ lineHeight: 1.6, letterSpacing: "-0.01em" }}>
                  "{p.statement}"
                </blockquote>
                {p.bio && (
                  <p className="c-steel text-sm mt-5 pt-5 border-t bd-line" style={{ lineHeight: 1.65 }}>{p.bio}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <Eyebrow>What we stand by</Eyebrow>
        <h2 className="f-display font-bold text-2xl md:text-3xl tracking-tight mt-3">Three rules we don't break.</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {VALUES.map((v) => (
            <div key={v.title} className="card-static rounded-lg p-6 md:p-7">
              <h3 className="f-display font-bold text-lg">{v.title}</h3>
              <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="f-display font-bold text-2xl md:text-3xl tracking-tight mt-3">Four steps, no surprises.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
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
      </section>

      {/* The honest part */}
      <section className="max-w-6xl mx-auto px-5 pb-12 md:pb-16">
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
