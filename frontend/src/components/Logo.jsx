// Official brand mark: two stem+bowl letterforms in 180° rotational symmetry.
// The dark shape reads as "b"; rotated 180° it becomes the moss "p" below it —
// same object, mid-turn. That symmetry is the literal "Pivot" in Pivot Bridge.
const DARK = "#1B4332";
const MOSS = "#52B788";

export function LogoMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="21 20 70 70" aria-hidden="true">
      <rect x="28" y="20" width="9" height="38" rx="4.5" fill={DARK} />
      <circle cx="58" cy="42" r="13" fill={DARK} />
      <rect x="75" y="52" width="9" height="38" rx="4.5" fill={MOSS} />
      <circle cx="54" cy="68" r="13" fill={MOSS} />
    </svg>
  );
}

export default function Logo({ light = false, size = 36 }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="flex flex-col" style={{ lineHeight: 1 }}>
        <span style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 700,
          fontSize: size * 0.54,
          letterSpacing: "-0.01em",
          color: light ? "#fff" : "var(--ink)",
        }}>
          Pivot Bridge
        </span>
        <span className="f-mono" style={{
          fontSize: Math.max(8, size * 0.22),
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          color: light ? "var(--sage)" : "var(--steel)",
          marginTop: 4,
        }}>
          Technology
        </span>
      </span>
    </span>
  );
}
