import { useEffect } from "react";

// Reveals elements with the `.reveal` class as they scroll into view.
// Re-runs on route change (pass the pathname) so each page's elements are
// observed after it mounts. No-ops under reduced-motion or without support,
// leaving all content visible.
export default function useScrollReveal(key) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    document.body.classList.add("reveal-ready");
    const els = document.querySelectorAll(".reveal:not(.reveal-in)");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}
