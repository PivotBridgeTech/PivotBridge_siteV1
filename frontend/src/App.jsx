import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import ChatWidget from "./components/ChatWidget.jsx";
import Home from "./pages/Home.jsx";
import ServicesIndex from "./pages/ServicesIndex.jsx";
import Service from "./pages/Service.jsx";
import Industries from "./pages/Industries.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Insights from "./pages/Insights.jsx";
import Article from "./pages/Article.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import useScrollReveal from "./components/useScrollReveal.js";

function RouteWatcher() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
  useScrollReveal(pathname);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen">
      <RouteWatcher />
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<Service />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
