import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { CONTACT, FAQS } from "../data/content.jsx";
import { Eyebrow, PageHero } from "../components/Shared.jsx";
import ContactForm from "../components/ContactForm.jsx";
import usePageTitle from "../components/usePageTitle.js";

export default function Contact() {
  usePageTitle("Contact");
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us the bottleneck. We'll bring the plan."
        intro="Every project starts with a free 30-minute consultation. No pitch deck, no jargon — a straight conversation about what's slowing you down and what it would take to fix it."
      />
      <section className="max-w-6xl mx-auto px-5 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="card-static rounded-lg p-6 md:p-8"><ContactForm /></div>
          <div className="flex flex-col gap-4">
            <div className="card-static rounded-lg p-6 md:p-8">
              <h3 className="f-display font-bold text-lg">Reach us directly</h3>
              <div className="flex flex-col gap-3 mt-4 text-sm c-steel">
                <p className="flex items-center gap-2.5"><Mail size={17} className="c-blue" /> <a href={`mailto:${CONTACT.email}`} className="no-underline hover:underline" style={{ color: "inherit" }}>{CONTACT.email}</a></p>
                <p className="flex items-center gap-2.5"><Phone size={17} className="c-blue" /> <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="no-underline hover:underline" style={{ color: "inherit" }}>{CONTACT.phone}</a></p>
                <p className="flex items-center gap-2.5"><MapPin size={17} className="c-blue" /> {CONTACT.base}</p>
              </div>
              <p className="f-mono text-xs c-steel mt-4 pt-4 border-t bd-line">Placeholder details — replace before launch.</p>
            </div>
            <div className="card-static rounded-lg p-6 md:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-md" style={{ background: "rgba(34,81,204,0.08)" }}>
                  <Calendar size={22} className="c-blue" />
                </span>
                <div>
                  <h3 className="f-display font-bold text-lg">Book directly</h3>
                  <p className="c-steel text-sm">Free 30-minute consultation</p>
                </div>
              </div>
              <div className="flex-1 mt-5 rounded-md border border-dashed bd-line flex flex-col items-center justify-center text-center px-6 py-10" style={{ background: "#EEF2F8" }}>
                <p className="f-mono text-xs c-steel tracking-widest uppercase">Calendar embed</p>
                <p className="c-steel text-sm mt-2 max-w-xs">Replace with your Calendly or Cal.com inline embed.</p>
              </div>
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
      </section>
    </>
  );
}
