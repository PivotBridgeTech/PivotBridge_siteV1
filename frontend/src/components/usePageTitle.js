import { useEffect } from "react";

const BASE = "Pivot Bridge Technology";
const TAGLINE = "Serious engineering for SMBs";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — ${TAGLINE}`;
  }, [title]);
}
