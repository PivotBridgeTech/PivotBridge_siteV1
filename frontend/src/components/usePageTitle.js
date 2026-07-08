import { useEffect } from "react";

const BASE = "Pivot Bridge Technology";
const TAGLINE = "Custom software, AI & cloud for growing businesses";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — ${TAGLINE}`;
  }, [title]);
}
