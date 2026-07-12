import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import useThrottledScroll from "./useThrottledScroll.js";

const LINKS = [
  ["/", "Home"], ["/services", "Services"], ["/industries", "Industries"], ["/work", "Work"],
  ["/about", "About"], ["/insights", "Insights"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useThrottledScroll(() => setScrolled(window.scrollY > 8));

  return (
    <header
      className={`sticky top-0 z-50 border-b bd-line nav-header ${scrolled ? "nav-scrolled" : ""}`}
      style={{ background: "rgba(247,249,246,0.85)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-screen-2xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="no-underline inline-flex items-center" aria-label="Pivot Bridge Technology — home">
          <Logo size={38} />
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `navlink no-underline ${isActive ? "active" : ""}`}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary text-sm font-semibold px-4 py-2 rounded-md no-underline">
            Book a consultation
          </Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} style={{ background: "none", border: "none" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`mobile-nav md:hidden${open ? " open" : ""}`}>
        <div>
          <nav className="border-t bd-line px-5 py-4 flex flex-col gap-4 bg-paper">
            {LINKS.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)} className="navlink no-underline text-left">
                {label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary text-sm font-semibold px-4 py-2.5 rounded-md text-center no-underline">
              Book a consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
