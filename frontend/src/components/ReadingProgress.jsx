import { useState } from "react";
import useThrottledScroll from "./useThrottledScroll.js";

export default function ReadingProgress({ targetRef }) {
  const [progress, setProgress] = useState(0);

  useThrottledScroll(() => {
    const el = targetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const scrolled = -rect.top;
    const pct = total > 0 ? Math.min(100, Math.max(0, (scrolled / total) * 100)) : 0;
    setProgress(pct);
  }, { resize: true });

  return (
    <div className="reading-progress-track" aria-hidden="true">
      <div className="reading-progress-fill" style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  );
}
