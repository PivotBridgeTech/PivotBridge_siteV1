import useSeo from "./useSeo.js";

// Thin wrapper kept for existing call sites. Pass a description as the second
// argument for per-page SEO; omit it to fall back to the site default.
export default function usePageTitle(title, description) {
  useSeo({ title, description });
}
