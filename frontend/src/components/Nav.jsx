import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  ["/services", "Services"], ["/industries", "Industries"], ["/work", "Work"],
  ["/about", "About"], ["/insights", "Insights"], ["/contact", "Contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bd-line" style={{ background: "rgba(246,248,251,0.85)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="f-display font-bold text-lg tracking-tight no-underline" style={{ color: "var(--ink)" }}>
          Pivot Bridge
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `navlink no-underline ${isActive ? "active" : ""}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary text-sm font-semibold px-4 py-2 rounded-md no-underline">
            Book a consultation
          </Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} style={{ background: "none", border: "none" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t bd-line px-5 py-4 flex flex-col gap-4 bg-paper">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className="navlink no-underline text-left">
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary text-sm font-semibold px-4 py-2.5 rounded-md text-center no-underline">
            Book a consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
