import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PROJECT_TYPES } from "../data/content.jsx";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full" style={{ background: "rgba(46,102,71,0.1)" }}>
          <Check size={24} className="c-pine" />
        </span>
        <h3 className="f-display font-bold text-xl mt-4">Message sent</h3>
        <p className="c-steel text-sm mt-2 max-w-xs">We reply within one business day — keep an eye on your inbox.</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={submit} noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="f-mono text-xs c-steel tracking-widest uppercase">Name</span>
          <input
            className="field rounded-md px-3.5 py-2.5 text-sm" name="name" autoComplete="name"
            value={form.name} onChange={update("name")} placeholder="Alex Morgan"
            aria-invalid={invalid.name || undefined}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="f-mono text-xs c-steel tracking-widest uppercase">Company</span>
          <input
            className="field rounded-md px-3.5 py-2.5 text-sm" name="organization" autoComplete="organization"
            value={form.company} onChange={update("company")} placeholder="Morgan Supply Co."
          />
        </label>
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="f-mono text-xs c-steel tracking-widest uppercase">Email</span>
        <input
          type="email" className="field rounded-md px-3.5 py-2.5 text-sm" name="email" autoComplete="email"
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
          rows={4} className="field rounded-md px-3.5 py-2.5 text-sm resize-none" name="message"
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
      {error && <p className="text-sm" role="alert" style={{ color: "#B4322A" }}>{error}</p>}
      <button type="submit" disabled={status === "sending"} className="btn-primary font-semibold px-6 py-3 rounded-md inline-flex items-center justify-center gap-2 mt-1" style={{ opacity: status === "sending" ? 0.7 : 1 }}>
        {status === "sending" ? "Sending…" : "Send message"} <ArrowRight size={17} />
      </button>
    </form>
  );
}
