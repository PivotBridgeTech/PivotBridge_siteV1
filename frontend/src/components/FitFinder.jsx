import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PAINS, SERVICES } from "../data/content.jsx";
import { Eyebrow } from "./Shared.jsx";

export default function FitFinder() {
  const [picked, setPicked] = useState(null);
  const rec = picked !== null ? SERVICES.find((s) => s.slug === PAINS[picked].slug) : null;
  return (
    <div className="card-static rounded-lg p-6 md:p-8">
      <Eyebrow>Not sure which service you need?</Eyebrow>
      <h3 className="f-display font-bold text-xl md:text-2xl mt-2">Pick the sentence that sounds like your week.</h3>
      <div className="grid sm:grid-cols-2 gap-3 mt-6">
        {PAINS.map((p, i) => (
          <button
            key={p.text}
            onClick={() => setPicked(i)}
            className={`painbtn text-left text-sm rounded-md border bd-line px-4 py-3.5 ${picked === i ? "on" : ""}`}
            style={{ background: picked === i ? undefined : "#fff", cursor: "pointer", color: "var(--ink)", fontFamily: "inherit", lineHeight: 1.5 }}
          >
            "{p.text}"
          </button>
        ))}
      </div>
      {rec && (
        <div className="mt-5 rounded-md p-5 flex flex-col sm:flex-row sm:items-center gap-4" style={{ background: "rgba(34,81,204,0.06)", border: "1px solid rgba(34,81,204,0.3)" }}>
          <div className="flex items-center gap-3 flex-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-md shrink-0" style={{ background: "rgba(34,81,204,0.12)" }}>
              <rec.icon size={20} className="c-blue" />
            </span>
            <div>
              <p className="f-mono text-xs c-blue tracking-widest uppercase">Start here</p>
              <p className="f-display font-bold text-base">{rec.title}</p>
            </div>
          </div>
          <Link to={`/services/${rec.slug}`} className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-md inline-flex items-center gap-2 self-start no-underline">
            See how <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </div>
  );
}
