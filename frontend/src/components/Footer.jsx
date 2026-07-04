import { Link } from "react-router-dom";
import { SERVICES, CONTACT } from "../data/content.jsx";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="grid sm:grid-cols-4 gap-10">
          <div>
            <p className="f-display font-bold text-lg text-white">Pivot Bridge Technology</p>
            <p className="text-sm mt-3 max-w-xs" style={{ color: "#8FA0B5" }}>
              Custom software, AI tools, and managed infrastructure for small and medium businesses.
            </p>
          </div>
          <div>
            <p className="f-mono text-xs c-sky tracking-widest uppercase">Services</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm list-none p-0" style={{ color: "#B8C4D6" }}>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="no-underline hover:text-white" style={{ color: "inherit" }}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="f-mono text-xs c-sky tracking-widest uppercase">Company</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm list-none p-0" style={{ color: "#B8C4D6" }}>
              {[["/industries", "Industries"], ["/work", "Our work"], ["/about", "About"], ["/insights", "Insights"], ["/contact", "Contact"]].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="no-underline hover:text-white" style={{ color: "inherit" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="f-mono text-xs c-sky tracking-widest uppercase">Connect</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm list-none p-0" style={{ color: "#B8C4D6" }}>
              <li><a href={`mailto:${CONTACT.email}`} className="no-underline hover:text-white" style={{ color: "inherit" }}>{CONTACT.email}</a></li>
              <li><a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="no-underline hover:text-white" style={{ color: "inherit" }}>{CONTACT.phone}</a></li>
              {/* Add LinkedIn/GitHub links here once the profiles exist */}
            </ul>
          </div>
        </div>
        <div className="border-t mt-10 pt-6" style={{ borderColor: "rgba(157,184,240,0.15)" }}>
          <p className="f-mono text-xs" style={{ color: "#8FA0B5" }}>© 2026 Pivot Bridge Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
