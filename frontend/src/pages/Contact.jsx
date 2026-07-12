import { Mail, MapPin } from "lucide-react";
import { CONTACT, FAQS } from "../data/content.jsx";
import { Eyebrow, PageHero } from "../components/Shared.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Reveal from "../components/Reveal.jsx";
import usePageTitle from "../components/usePageTitle.js";

export default function Contact() {
  usePageTitle("Contact");
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us the bottleneck. We'll bring the plan."
        intro="Every project starts with a free 30-minute consultation. No pitch deck, no jargon: a straight conversation about what's slowing you down and what it would take to fix it."
      />
      <Reveal as="section" className="max-w-screen-2xl mx-auto px-5 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-static rounded-lg p-6 md:p-8"><ContactForm /></div>
          <div className="flex flex-col gap-4">
            <div className="card-static rounded-lg p-6 md:p-8">
              <h3 className="f-display font-bold text-lg">Reach us directly</h3>
              <div className="flex flex-col gap-3 mt-4 text-sm c-steel">
                <p className="flex items-center gap-2.5"><Mail size={17} className="c-pine" /> <a href={`mailto:${CONTACT.email}`} className="no-underline hover:underline" style={{ color: "inherit" }}>{CONTACT.email}</a></p>
                <p className="flex items-center gap-2.5"><MapPin size={17} className="c-pine" /> {CONTACT.base}</p>
              </div>
            </div>
            <div className="card-static rounded-lg p-6 md:p-8">
              <h3 className="f-display font-bold text-lg">What happens next</h3>
              <ul className="flex flex-col gap-3 mt-4 text-sm c-steel list-none p-0 m-0" style={{ lineHeight: 1.6 }}>
                <li>1. We reply within one business day to set up your free 30-minute consultation.</li>
                <li>2. On the call, we dig into the bottleneck: no pitch deck, no jargon.</li>
                <li>3. If there's a fit, you get a fixed written proposal. If there isn't, we'll tell you that too.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <Eyebrow>Common questions</Eyebrow>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {FAQS.map((f) => (
              <div key={f.q} className="card-static rounded-lg p-6">
                <h3 className="f-display font-bold text-base">{f.q}</h3>
                <p className="c-steel text-sm mt-2" style={{ lineHeight: 1.65 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
