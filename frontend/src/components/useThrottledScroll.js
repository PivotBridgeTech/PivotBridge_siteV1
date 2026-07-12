import { useEffect, useRef } from "react";

// Runs `callback` once immediately, then again on every scroll (and resize, if
// requested), rAF-throttled so it never runs more than once per animation frame.
export default function useThrottledScroll(callback, { resize = false } = {}) {
  const ticking = useRef(false);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const run = () => {
      ticking.current = false;
      callbackRef.current();
    };
    const onEvent = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(run);
    };
    onEvent();
    window.addEventListener("scroll", onEvent, { passive: true });
    if (resize) window.addEventListener("resize", onEvent);
    return () => {
      window.removeEventListener("scroll", onEvent);
      if (resize) window.removeEventListener("resize", onEvent);
    };
  }, [resize]);
}
