import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { POSTS } from "../data/content.jsx";
import { Eyebrow, CTABand } from "../components/Shared.jsx";
import usePageTitle from "../components/usePageTitle.js";
import { SITE_URL, SITE_NAME } from "../seo.js";

// BlogPosting structured data so articles are eligible for rich results.
function useArticleSchema(post) {
  useEffect(() => {
    if (!post) return;
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `${SITE_URL}/insights/${post.slug}`,
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME },
    });
    document.head.appendChild(el);
    return () => el.remove();
  }, [post]);
}

// Inline markup: **bold** and *italic*.
function Inline({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={i} style={{ color: "var(--ink)" }}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*"))
      return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

// Block markup: "## " starts a section heading; blank lines separate paragraphs.
function ArticleBody({ body }) {
  const blocks = body.split(/\n\s*\n/);
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="f-display font-bold text-xl md:text-2xl tracking-tight mt-10 mb-4">
          {block.slice(3)}
        </h2>
      );
    }
    return (
      <p key={i} className="c-steel text-base mt-4" style={{ lineHeight: 1.75 }}>
        <Inline text={block} />
      </p>
    );
  });
}

export default function Article() {
  const { slug } = useParams();
  const idx = POSTS.findIndex((p) => p.slug === slug);
  usePageTitle(
    idx === -1 ? undefined : POSTS[idx].title,
    idx === -1 ? undefined : POSTS[idx].excerpt
  );
  useArticleSchema(idx === -1 ? null : POSTS[idx]);
  if (idx === -1) return <Navigate to="/insights" replace />;
  const post = POSTS[idx];
  const prev = POSTS[(idx + POSTS.length - 1) % POSTS.length];
  const next = POSTS[(idx + 1) % POSTS.length];

  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-5 pt-14 pb-10 md:pt-20 md:pb-12">
          <Link to="/insights" className="navlink inline-flex items-center gap-1.5 no-underline rise rise-1">
            <ArrowLeft size={14} /> All insights
          </Link>
          <span className="rise rise-1 block mt-6"><Eyebrow>{post.tag}</Eyebrow></span>
          <h1 className="f-display font-extrabold tracking-tight text-3xl md:text-4xl lg:text-5xl mt-4 rise rise-2" style={{ lineHeight: 1.1 }}>
            {post.title}
          </h1>
          <p className="f-mono text-xs c-steel tracking-widest mt-5 rise rise-3">
            {post.date} · {post.readTime}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-5 pb-16 md:pb-20">
        <ArticleBody body={post.body} />
      </article>

      <section className="max-w-3xl mx-auto px-5 pb-16">
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to={`/insights/${prev.slug}`} className="card rounded-lg p-5 text-left flex items-center gap-3 no-underline" style={{ color: "var(--ink)" }}>
            <ArrowLeft size={18} className="c-steel shrink-0" />
            <div>
              <p className="f-mono text-xs c-steel tracking-widest uppercase">Previous</p>
              <p className="f-display font-bold text-sm mt-0.5" style={{ lineHeight: 1.35 }}>{prev.title}</p>
            </div>
          </Link>
          <Link to={`/insights/${next.slug}`} className="card rounded-lg p-5 text-left flex items-center justify-end gap-3 no-underline" style={{ color: "var(--ink)" }}>
            <div className="text-right">
              <p className="f-mono text-xs c-steel tracking-widest uppercase">Next</p>
              <p className="f-display font-bold text-sm mt-0.5" style={{ lineHeight: 1.35 }}>{next.title}</p>
            </div>
            <ArrowRight size={18} className="c-steel shrink-0" />
          </Link>
        </div>
      </section>
      <CTABand />
    </>
  );
}
