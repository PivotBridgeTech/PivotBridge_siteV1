import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SERVICES, INDUSTRIES } from "../data/content.jsx";
import { Eyebrow } from "../components/Shared.jsx";
import ContactForm from "../components/ContactForm.jsx";
import FitFinder from "../components/FitFinder.jsx";
import Reveal, { staggerDelay } from "../components/Reveal.jsx";
import usePageTitle from "../components/usePageTitle.js";
import heroTeamImg from "../assets/hero-team.png";

// Which industries get a card on the homepage (full list lives on /industries)
const HOME_INDUSTRY_NAMES = [
  "Legal & professional services",
  "E-commerce & retail",
  "Logistics & field services",
  "Finance & accounting",
];

export default function Home() {
  usePageTitle();
  return (
    <>
      <section className="relative overflow-hidden hero-glow">
        <div className="relative max-w-screen-2xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <span className="fadeUp fadeUp-1 block"><Eyebrow>Pivot Bridge Technology · Custom software for growing businesses</Eyebrow></span>
          <h1 className="f-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 max-w-4xl fadeUp fadeUp-2" style={{ lineHeight: 1.04 }}>
            Stop fighting your tools. Start growing your business.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg c-steel fadeUp fadeUp-3">
            We design and build the AI tools, custom software, and automations that take technology off your plate, then we run the infrastructure behind them. You name the bottleneck. We remove it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 fadeUp fadeUp-4">
            <Link to="/contact" className="btn-primary group inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-md no-underline">
              Book a consultation <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/work" className="btn-ghost inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-md no-underline">
              View our work
            </Link>
          </div>

          <div className="hero-panel block mt-10 md:mt-12 fadeUp fadeUp-5" style={{ height: "clamp(280px, 38vw, 460px)" }}>
            <img
              src={heroTeamImg}
              alt="The Pivot Bridge team reviewing a live system dashboard together"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-5 py-12 md:py-16">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="f-display font-bold text-4xl md:text-5xl tracking-tight mt-3 max-w-2xl">
            Four ways we take work off your plate.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {SERVICES.map(({ slug, icon: Icon, tag, title, short, image, imageAlt }, i) => (
            <Reveal as={Link} key={slug} delay={staggerDelay(i)} to={`/services/${slug}`} className="card group rounded-lg overflow-hidden text-left no-underline flex flex-col" style={{ color: "var(--ink)" }}>
              <div className="img-card" style={{ aspectRatio: "4 / 3" }}>
                <img src={image} alt={imageAlt} loading="lazy" />
                <div className="img-scrim" />
                <span className="img-pill absolute top-3.5 left-4">{tag}</span>
                <span className="card-icon absolute bottom-3.5 left-4 inline-flex items-center justify-center w-10 h-10 rounded-md" style={{ background: "rgba(255,255,255,0.16)", backdropFilter: "blur(8px)" }}>
                  <Icon size={18} style={{ color: "#fff" }} />
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="f-display font-bold text-lg">{title}</h3>
                <p className="c-steel text-base mt-2.5 flex-1" style={{ lineHeight: 1.65 }}>{short}</p>
                <span className="inline-flex items-center gap-1.5 text-base font-semibold c-pine mt-4">
                  Learn more <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6"><FitFinder /></div>
      </section>

      <section className="border-t bd-line" style={{ background: "#ECF2ED" }}>
        <div className="max-w-screen-2xl mx-auto px-5 py-12 md:py-16">
          <Reveal>
            <Eyebrow>Industries we serve</Eyebrow>
            <h2 className="f-display font-bold text-4xl md:text-5xl tracking-tight mt-3 max-w-2xl">
              Built for markets that run on servers.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {INDUSTRIES.filter(({ name }) => HOME_INDUSTRY_NAMES.includes(name)).map(({ icon: Icon, name, pain, image, imageAlt }, i) => (
              <Reveal key={name} delay={staggerDelay(i)} className="card-static rounded-lg overflow-hidden">
                <div className="img-card" style={{ aspectRatio: "4 / 3" }}>
                  <img src={image} alt={imageAlt} loading="lazy" />
                  <div className="img-scrim" />
                  <span className="card-icon absolute bottom-3.5 left-4 inline-flex items-center justify-center w-10 h-10 rounded-md" style={{ background: "rgba(255,255,255,0.16)", backdropFilter: "blur(8px)" }}>
                    <Icon size={18} style={{ color: "#fff" }} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="f-display font-bold text-lg">{name}</h3>
                  <p className="c-steel text-base mt-2.5" style={{ lineHeight: 1.65 }}>{pain}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/industries" className="btn-ghost inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-md mt-6 no-underline">
            See how we work in your industry <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto px-5 py-12 md:py-16">
        <Reveal>
          <Eyebrow>More to explore</Eyebrow>
          <h2 className="f-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-xl">
            The team, the work, the thinking.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4 mt-8" style={{ "--bento-h": "clamp(280px, 34vw, 420px)" }}>
          <Reveal as={Link} to="/about" className="bento-tile group" style={{ height: "var(--bento-h)" }}>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=75"
              alt="A team lead presenting a project update to the room"
              loading="lazy"
            />
            <div className="bento-tile-content">
              <span className="img-pill">About Pivot Bridge</span>
              <h3 className="on-photo f-display font-bold text-xl md:text-2xl tracking-tight mt-3 max-w-xs" style={{ lineHeight: 1.2 }}>
                Small team, senior engineers, real accountability.
              </h3>
              <span className="on-photo inline-flex items-center gap-1.5 text-sm font-semibold mt-4">
                Meet the team <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Reveal>
          <div className="grid gap-4">
            <Reveal as={Link} to="/work" delay={0.08} className="bento-tile group" style={{ height: "calc((var(--bento-h) - 1rem) / 2)" }}>
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=75"
                alt="Reviewing infrastructure status on a tablet beside a server rack"
                loading="lazy"
              />
              <div className="bento-tile-content" style={{ padding: "1.25rem" }}>
                <span className="img-pill">Case studies</span>
                <h3 className="on-photo f-display font-bold text-base mt-2">Real systems, running in real businesses.</h3>
              </div>
            </Reveal>
            <Reveal as={Link} to="/insights" delay={0.14} className="bento-tile group" style={{ height: "calc((var(--bento-h) - 1rem) / 2)" }}>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=75"
                alt="Macro shot of a circuit board"
                loading="lazy"
              />
              <div className="bento-tile-content" style={{ padding: "1.25rem" }}>
                <span className="img-pill">Insights</span>
                <h3 className="on-photo f-display font-bold text-base mt-2">Plain-language answers to expensive questions.</h3>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal as="section" className="max-w-screen-2xl mx-auto px-5 py-12 md:py-20">
        <Eyebrow>Start a project</Eyebrow>
        <h2 className="f-display font-bold text-3xl md:text-4xl tracking-tight mt-3 max-w-2xl">
          Tell us the bottleneck. We'll bring the plan.
        </h2>
        <p className="c-steel mt-4 max-w-xl">
          Every project starts with a free 30-minute consultation. No pitch deck, no jargon. Just a straight conversation about what's slowing you down and what it would take to fix it.
        </p>
        <div className="card-static rounded-lg p-6 md:p-8 mt-8 max-w-2xl"><ContactForm /></div>
      </Reveal>
    </>
  );
}
