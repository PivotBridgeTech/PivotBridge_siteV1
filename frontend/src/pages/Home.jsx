import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Calendar, ChevronRight,
  Activity, KeyRound, ShieldCheck,
} from "lucide-react";
import { SERVICES, INDUSTRIES, CASES } from "../data/content.jsx";
import { Eyebrow } from "../components/Shared.jsx";
import ContactForm from "../components/ContactForm.jsx";
import FitFinder from "../components/FitFinder.jsx";
import usePageTitle from "../components/usePageTitle.js";

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
        <div className="relative max-w-6xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
          <span className="rise rise-1 block"><Eyebrow>Pivot Bridge Technology · Custom software for SMBs</Eyebrow></span>
          <h1 className="f-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 max-w-4xl rise rise-2" style={{ lineHeight: 1.04 }}>
            Serious engineering for businesses that don't have an engineering team.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg c-steel rise rise-3">
            We design and build the AI tools, custom software, and automations that move your numbers — then we run the infrastructure behind them. You name the bottleneck. We remove it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 rise rise-3">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-md no-underline">
              Book a consultation <ArrowRight size={18} />
            </Link>
            <Link to="/work" className="btn-ghost inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-md no-underline">
              View our work
            </Link>
          </div>
          <div className="mt-14 md:mt-16 grid sm:grid-cols-3 gap-4 rise rise-4">
            {TRUST.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-static rounded-lg p-5 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <Icon size={19} className="c-blue" />
                  <h3 className="f-display font-bold text-base">{title}</h3>
                </div>
                <p className="c-steel text-sm" style={{ lineHeight: 1.6 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <Eyebrow>Services</Eyebrow>
        <h2 className="f-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-xl">
          Four ways we take work off your plate.
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {SERVICES.map(({ slug, icon: Icon, tag, title, short }) => (
            <Link key={slug} to={`/services/${slug}`} className="card rounded-lg p-6 md:p-8 text-left no-underline" style={{ color: "var(--ink)" }}>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-md" style={{ background: "rgba(34,81,204,0.08)" }}>
                  <Icon size={22} className="c-blue" />
                </span>
                <span className="f-mono text-xs c-steel tracking-widest">{tag}</span>
              </div>
              <h3 className="f-display font-bold text-xl mt-5">{title}</h3>
              <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{short}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold c-blue mt-4">
                Learn more <ChevronRight size={16} />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6"><FitFinder /></div>
      </section>

      <section className="border-t bd-line" style={{ background: "#EEF2F8" }}>
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
          <Eyebrow>Industries we serve</Eyebrow>
          <h2 className="f-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-2xl">
            Built for markets that run on servers.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {INDUSTRIES.map(({ icon: Icon, name, pain }) => (
              <div key={name} className="card-static rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-md" style={{ background: "rgba(34,81,204,0.08)" }}>
                    <Icon size={20} className="c-blue" />
                  </span>
                  <h3 className="f-display font-bold text-base">{name}</h3>
                </div>
                <p className="c-steel text-sm mt-3" style={{ lineHeight: 1.65 }}>{pain}</p>
              </div>
            ))}
          </div>
          <Link to="/industries" className="btn-ghost inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-md mt-8 no-underline">
            See how we work in your industry <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-ink relative overflow-hidden">
        <div className="absolute inset-0 dark-glow" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-24">
          <Eyebrow light>Featured solutions</Eyebrow>
          <h2 className="f-display font-bold text-3xl md:text-4xl tracking-tight mt-3 text-white max-w-xl">
            Built, shipped, and running in real businesses.
          </h2>
          <div className="mt-10">
            {CASES.map((c) => (
              <article key={c.ref} className="border-t py-8 md:py-10 grid md:grid-cols-12 gap-6" style={{ borderColor: "rgba(157,184,240,0.18)" }}>
                <div className="md:col-span-3">
                  <p className="f-mono text-xs c-sky tracking-widest">{c.ref}</p>
                  <h3 className="f-display font-bold text-xl text-white mt-2">{c.title}</h3>
                </div>
                <div className="md:col-span-3">
                  <p className="f-mono text-xs c-sky tracking-widest uppercase">Problem</p>
                  <p className="text-sm mt-2" style={{ color: "#B8C4D6", lineHeight: 1.65 }}>{c.problem}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="f-mono text-xs c-sky tracking-widest uppercase">What we built</p>
                  <p className="text-sm mt-2" style={{ color: "#B8C4D6", lineHeight: 1.65 }}>{c.built}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="f-mono text-xs c-sky tracking-widest uppercase">Result</p>
                  <p className="text-sm mt-2 text-white" style={{ lineHeight: 1.65 }}>{c.result}</p>
                </div>
              </article>
            ))}
          </div>
          <Link to="/work" className="mt-8 inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-md text-white no-underline" style={{ border: "1px solid rgba(255,255,255,0.4)" }}>
            Full case studies <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
        <Eyebrow>Start a project</Eyebrow>
        <h2 className="f-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-2xl">
          Tell us the bottleneck. We'll bring the plan.
        </h2>
        <p className="c-steel mt-4 max-w-xl">
          Every project starts with a free 30-minute consultation. No pitch deck, no jargon — just a straight conversation about what's slowing you down and what it would take to fix it.
        </p>
        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          <div className="card-static rounded-lg p-6 md:p-8"><ContactForm /></div>
          <div className="card-static rounded-lg p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-md" style={{ background: "rgba(34,81,204,0.08)" }}>
                <Calendar size={22} className="c-blue" />
              </span>
              <div>
                <h3 className="f-display font-bold text-lg">Book directly</h3>
                <p className="c-steel text-sm">Free 30-minute consultation</p>
              </div>
            </div>
            <div className="flex-1 mt-6 rounded-md border border-dashed bd-line flex flex-col items-center justify-center text-center px-6 py-14" style={{ background: "#EEF2F8" }}>
              <p className="f-mono text-xs c-steel tracking-widest uppercase">Calendar embed</p>
              <p className="c-steel text-sm mt-2 max-w-xs">Replace this panel with your Calendly or Cal.com inline embed to let clients book instantly.</p>
              <a href="https://calendly.com" target="_blank" rel="noreferrer" className="btn-ghost text-sm font-semibold px-5 py-2.5 rounded-md mt-5 inline-flex items-center gap-2 no-underline">
                Open scheduling page <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
