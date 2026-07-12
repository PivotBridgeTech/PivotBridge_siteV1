import { forwardRef, useLayoutEffect, useEffect, useMemo, useRef, useState } from "react";

// Content must never depend on JS/IntersectionObserver actually running to become
// visible (headless renders, crawlers, print-to-PDF, disabled/erroring JS never fire a
// real scroll). Visible is the unconditional default; we only arm the hidden pre-reveal
// state for elements confirmed off-screen at mount, and a safety-net timer guarantees
// every element ends up visible even if the observer never reports an intersection.
const FALLBACK_MS = 1500;

// Shared stagger step for card/list reveals: 60ms apart, capped at 400ms total
// (per the animation guidance, cap total stagger time rather than let long lists crawl in).
export function staggerDelay(i, step = 0.06, max = 0.4) {
  return Math.min(i * step, max);
}

function mergeRefs(a, b) {
  return (node) => {
    if (typeof a === "function") a(node); else if (a) a.current = node;
    if (typeof b === "function") b(node); else if (b) b.current = node;
  };
}

const Reveal = forwardRef(function Reveal({ children, as: Tag = "div", className = "", delay = 0, style, ...rest }, forwardedRef) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  const mergedRef = useMemo(() => mergeRefs(ref, forwardedRef), [forwardedRef]);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const belowFold = el.getBoundingClientRect().top >= (window.innerHeight || 0);
    if (belowFold) setVisible(false);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setVisible(true);
    };
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { reveal(); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    const fallback = setTimeout(reveal, FALLBACK_MS);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <Tag
      ref={mergedRef}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={{ ...style, transitionDelay: visible ? `${delay}s` : "0s" }}
      {...rest}
    >
      {children}
    </Tag>
  );
});

export default Reveal;
