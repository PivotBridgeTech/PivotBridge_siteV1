import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, SITE_NAME, TAGLINE, DEFAULT_DESCRIPTION, OG_IMAGE } from "../seo.js";

// Keeps document.title, meta description, canonical, and Open Graph / Twitter
// tags in sync with the current route. SPA-rendered: correct for browsers and
// JS-executing crawlers (Google). For non-JS scrapers (some social unfurlers),
// add prerendering at build time — the tag values here are the source to bake.
function upsertMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function useSeo({ title, description } = {}) {
  const { pathname } = useLocation();
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — ${TAGLINE}`;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = SITE_URL + (pathname === "/" ? "" : pathname);

    document.title = fullTitle;
    upsertMeta("name", "description", desc);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", desc);
    upsertMeta("name", "twitter:image", OG_IMAGE);
    upsertLink("canonical", url);
  }, [title, description, pathname]);
}
