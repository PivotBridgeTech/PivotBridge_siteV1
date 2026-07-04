import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import usePageTitle from "../components/usePageTitle.js";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <section className="hero-glow">
      <div className="max-w-6xl mx-auto px-5 py-24 md:py-36 text-center">
        <p className="f-mono text-xs c-blue tracking-widest uppercase">404</p>
        <h1 className="f-display font-extrabold tracking-tight text-4xl md:text-5xl mt-4">
          That page doesn't exist.
        </h1>
        <p className="c-steel mt-4 max-w-md mx-auto">
          The link may be old or mistyped. Everything we offer is one click from the home page.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-md mt-8 no-underline">
          <ArrowLeft size={17} /> Back to home
        </Link>
      </div>
    </section>
  );
}
