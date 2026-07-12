import { Link } from "react-router-dom";
import {
  ArrowRight, ChevronRight,
  Activity, KeyRound, ShieldCheck,
} from "lucide-react";
import { SERVICES, INDUSTRIES } from "../data/content.jsx";
import { Eyebrow } from "../components/Shared.jsx";
import ContactForm from "../components/ContactForm.jsx";
import FitFinder from "../components/FitFinder.jsx";
import usePageTitle from "../components/usePageTitle.js";

// Which industries get a card on the homepage (full list lives on /industries)
const HOME_INDUSTRY_NAMES = [
  "Legal & professional services",
  "E-commerce & retail",
  "Logistics & field services",
  "Finance & accounting",
];

const TRUST = [
  { icon: Activity, title: "Monitored 24/7", body: "Managed infrastructure watched around the clock — issues get caught before your customers see them." },
  { icon: KeyRound, title: "You own everything", body: "Your code, your servers, your accounts. No lock-in, no hostage situations, full documentation." },
  { icon: ShieldCheck, title: "Security by default", body: "Hardened configurations, encrypted data, and access controls set up correctly from day one." },
];

export default function Home() {
  usePageTitle();
  return (
    <>
      <section className="relative overflow-hidden hero-glow">
        <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <span className="rise rise-1 block"><Eyebrow>Pivot Bridge Technology · Custom software for growing businesses</Eyebrow></span>
          <h1 className="f-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 max-w-4xl rise rise-2" style={{ lineHeight: 1.04 }}>
            Stop fighting your tools. Start growing your business.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg c-steel rise rise-3">
            We design and build the AI tools, custom software, and automations that take technology off your plate — then we run the infrastructure behind them. You name the bottleneck. We remove it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 rise rise-3">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-md no-underline">
              Book a consultation <ArrowRight size={18} />
            </Link>
            <Link to="/work" className="btn-ghost inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-md no-underline">
              View our work
            </Link>
          </div>
          <div className="mt-10 md:mt-12 grid sm:grid-cols-3 gap-4 rise rise-4">
            {TRUST.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-static rounded-lg p-5 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <Icon size={19} className="c-pine" />
                  <h3 className="f-display font-bold text-base">{title}</h3>
                </div>
                <p className="c-steel text-sm" style={{ lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="reveal">
          <Eyebrow>Services</Eyebrow>
          <h2 className="f-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-xl">
            Four ways we take work off your plate.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
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
                Learn more <ChevronRight size={16} className="card-arrow" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 reveal"><FitFinder /></div>
      </section>

      <section className="border-t bd-line" style={{ background: "#ECF2ED" }}>
        <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
          <div className="reveal">
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="f-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-2xl">
              Built for markets that run on servers.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {INDUSTRIES.filter(({ name }) => HOME_INDUSTRY_NAMES.includes(name)).map(({ icon: Icon, name, pain }, i) => (
              <div key={name} className={`card-static reveal reveal-d${(i % 4) + 1} rounded-lg p-6`}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md" style={{ background: "rgba(46,102,71,0.08)" }}>
                    <Icon size={20} className="c-pine" />
                  </span>
                  <h3 className="f-display font-bold text-base">{name}</h3>
                </div>
                <p className="c-steel text-sm mt-3" style={{ lineHeight: 1.65 }}>{pain}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-6">
            <Link to="/industries" className="btn-ghost inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-md no-underline">
              See how we work in your industry <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-12 md:py-20">
        <div className="reveal">
          <Eyebrow>Start a project</Eyebrow>
          <h2 className="f-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-2xl">
            Tell us the bottleneck. We'll bring the plan.
          </h2>
          <p className="c-steel mt-4 max-w-xl">
            Every project starts with a free 30-minute consultation. No pitch deck, no jargon — just a straight conversation about what's slowing you down and what it would take to fix it.
          </p>
        </div>
        <div className="card-static rounded-lg p-6 md:p-8 mt-8 max-w-2xl reveal"><ContactForm /></div>
      </section>
    </>
  );
}
