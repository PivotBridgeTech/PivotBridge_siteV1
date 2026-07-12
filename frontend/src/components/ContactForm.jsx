import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PROJECT_TYPES } from "../data/content.jsx";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONFETTI_COUNT = 10;
const CONFETTI_COLORS = ["var(--pine)", "var(--sage)", "var(--pine-deep)"];
const CONFETTI = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
  rot: (360 / CONFETTI_COUNT) * i,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  delay: (i % 3) * 0.05,
}));

function SuccessBadge() {
  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: 56, height: 56 }}>
      <span
        className="success-glow absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--pine) 35%, transparent), transparent 70%)" }}
        aria-hidden="true"
      />
      {CONFETTI.map((c, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{ "--rot": `${c.rot}deg`, animationDelay: `${0.35 + c.delay}s`, width: 5, height: 5, borderRadius: 1, background: c.color }}
          aria-hidden="true"
        />
      ))}
      <span
        className="check-circle relative inline-flex items-center justify-center rounded-full"
        style={{ width: 48, height: 48, background: "color-mix(in srgb, var(--pine) 10%, transparent)" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            className="check-path"
            d="M5 13l4 4L19 7"
            stroke="var(--pine)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}

function encodeForm(data) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", email: "", company: "", type: PROJECT_TYPES[0], message: "", website: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState({}); // { name?: true, email?: true, message?: true }

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const bad = {};
    if (!form.name.trim()) bad.name = true;
    if (!EMAIL_RE.test(form.email.trim())) bad.email = true;
    if (!form.message.trim()) bad.message = true;
    setInvalid(bad);
    if (Object.keys(bad).length) {
      setError("Add your name, a valid email, and a short note about the project, then send.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({
          "form-name": "contact",
          name: form.name,
          email: form.email.trim(),
          company: form.company,
          project_type: form.type,
          message: form.message,
          "bot-field": form.website, // honeypot — stays empty for humans
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setStatus("idle");
    }
  };

  if (status === "sent") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-12">
        <SuccessBadge />
        <h3 className="f-display font-bold text-xl mt-4 fadeUp fadeUp-5">Message sent</h3>
        <p className="c-steel text-sm mt-2 max-w-xs fadeUp fadeUp-7">We reply within one business day, keep an eye on your inbox.</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={submit} noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="f-mono text-xs c-steel tracking-widest uppercase">Name</span>
          <input
            className="field rounded-md px-3.5 py-2.5 text-sm" name="name" autoComplete="name" maxLength={200}
            value={form.name} onChange={update("name")} placeholder="Alex Morgan"
            aria-invalid={invalid.name || undefined}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="f-mono text-xs c-steel tracking-widest uppercase">Company</span>
          <input
            className="field rounded-md px-3.5 py-2.5 text-sm" name="organization" autoComplete="organization" maxLength={200}
            value={form.company} onChange={update("company")} placeholder="Morgan Supply Co."
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="f-mono text-xs c-steel tracking-widest uppercase">Email</span>
        <input
          type="email" className="field rounded-md px-3.5 py-2.5 text-sm" name="email" autoComplete="email" maxLength={320}
          value={form.email} onChange={update("email")} placeholder="alex@morgansupply.com"
          aria-invalid={invalid.email || undefined}
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="f-mono text-xs c-steel tracking-widest uppercase">Project type</span>
        <select className="field rounded-md px-3.5 py-2.5 text-sm" name="project_type" value={form.type} onChange={update("type")}>
          {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="f-mono text-xs c-steel tracking-widest uppercase">Message</span>
        <textarea
          rows={4} className="field rounded-md px-3.5 py-2.5 text-sm resize-none" name="message" maxLength={5000}
          value={form.message} onChange={update("message")} placeholder="What's the problem you're trying to solve?"
          aria-invalid={invalid.message || undefined}
        />
      </label>
      {/* Honeypot: hidden from humans, filled by bots */}
      <input
        type="text" value={form.website} onChange={update("website")}
        style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
        tabIndex={-1} autoComplete="off" aria-hidden="true" name="bot-field"
      />
      {error && <p className="text-sm" role="alert" style={{ color: "var(--error)" }}>{error}</p>}
      <button type="submit" disabled={status === "sending"} className="btn-primary font-semibold px-6 py-3 rounded-md inline-flex items-center justify-center gap-2 mt-1" style={{ opacity: status === "sending" ? 0.7 : 1 }}>
        {status === "sending" ? "Sending…" : "Send message"} <ArrowRight size={17} />
      </button>
    </form>
  );
}
