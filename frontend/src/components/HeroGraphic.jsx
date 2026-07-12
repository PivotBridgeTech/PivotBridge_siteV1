import { useEffect, useState } from "react";

// "Chaos → Pivot Bridge → order": scattered inputs (the tools that fight you)
// flow through the brand mark and come out as clean, organized outputs.
// Data dots animate along the paths when motion is allowed; static otherwise.
const PATHS = [
  "M64,88 C150,96 214,176 286,220 C360,266 432,120 504,120",
  "M44,190 C150,190 214,206 286,220 C360,234 432,200 504,200",
  "M64,296 C150,292 214,244 286,220 C360,196 432,280 504,280",
  "M108,382 C190,360 232,272 286,220 C360,168 432,360 504,360",
];
const INPUTS = [[64, 88], [44, 190], [64, 296], [108, 382]];
const OUTPUTS = [[504, 120], [504, 200], [504, 280], [504, 360]];

export default function HeroGraphic() {
  const [motion, setMotion] = useState(true);
  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <svg viewBox="0 0 560 440" className="w-full h-auto" role="img"
      aria-label="Scattered tools and workflows flowing through Pivot Bridge into an organized system.">
      <defs>
        <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5D6E63" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#2E6647" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2E6647" />
        </linearGradient>
        <radialGradient id="hubGlow">
          <stop offset="0%" stopColor="#94BFA2" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#94BFA2" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connectors */}
      {PATHS.map((d, i) => (
        <path key={d} d={d} fill="none" stroke="url(#flow)" strokeWidth="2"
          strokeLinecap="round" className={`flow-path flow-p${i + 1}`} />
      ))}

      {/* Input nodes — muted, hollow, scattered */}
      {INPUTS.map(([x, y]) => (
        <circle key={`i${x}${y}`} cx={x} cy={y} r="7" fill="#F7F9F6"
          stroke="#5D6E63" strokeWidth="2" opacity="0.75" />
      ))}

      {/* Pivot Bridge mark as the hub */}
      <circle cx="286" cy="220" r="66" fill="url(#hubGlow)" className="hub-glow" />
      <g transform="translate(202,138) scale(1.5)">
        <rect x="28" y="20" width="9" height="38" rx="4.5" fill="#1B4332" />
        <circle cx="58" cy="42" r="13" fill="#1B4332" />
        <rect x="75" y="52" width="9" height="38" rx="4.5" fill="#52B788" />
        <circle cx="54" cy="68" r="13" fill="#52B788" />
      </g>

      {/* Output nodes — solid brand, aligned */}
      {OUTPUTS.map(([x, y]) => (
        <g key={`o${x}${y}`}>
          <circle cx={x} cy={y} r="11" fill="#94BFA2" opacity="0.35" />
          <circle cx={x} cy={y} r="6.5" fill="#2E6647" />
        </g>
      ))}

      {/* Flowing data dots */}
      {motion && PATHS.map((d, i) => (
        <circle key={`dot${i}`} r="4.5" fill="#52B788">
          <animateMotion dur="3.2s" repeatCount="indefinite" path={d}
            begin={`${i * 0.7}s`} />
          <animate attributeName="opacity" dur="3.2s" repeatCount="indefinite"
            begin={`${i * 0.7}s`} values="0;1;1;0.9;0" keyTimes="0;0.12;0.5;0.85;1" />
        </circle>
      ))}
    </svg>
  );
}
