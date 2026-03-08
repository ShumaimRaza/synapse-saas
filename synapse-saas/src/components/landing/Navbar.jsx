import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Product",  href: "product"  },
  { label: "Features", href: "features" },
  { label: "Pricing",  href: "pricing"  },
  { label: "Docs",     href: null       }, // external — no section yet
];

const scrollTo = (id) => {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar({ onLogin, onSignup }) {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile,   setIsMobile]   = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
      ${scrolled ? "bg-bg/95 backdrop-blur-sm border-b border-border" : "bg-transparent"}`}>

      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo — scrolls to top */}
        <button onClick={() => scrollTo("home")}
          className="flex items-center gap-2 cursor-pointer">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">S</span>
          </div>
          <span className="font-display font-semibold text-text">Synapse</span>
        </button>

        {/* Desktop links */}
        {!isMobile && (
          <div className="flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <button key={l.label}
                onClick={() => handleNav(l.href)}
                className="px-3 py-1.5 text-sm text-muted rounded-md
                           hover:text-text hover:bg-surface transition-colors duration-150">
                {l.label}
              </button>
            ))}
          </div>
        )}

        {/* Desktop CTAs */}
        {!isMobile && (
          <div className="flex items-center gap-2">
            <button onClick={onLogin}
              className="px-4 py-1.5 text-sm text-muted rounded-md
                         hover:text-text transition-colors duration-150">
              Log in
            </button>
            <button onClick={onSignup}
              className="px-4 py-1.5 text-sm font-medium text-white rounded-md
                         bg-accent hover:bg-accent-dim transition-colors duration-150">
              Get started
            </button>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button onClick={() => setMobileOpen(v => !v)}
            className="w-8 h-8 flex items-center justify-center
                       text-muted hover:text-text rounded-md hover:bg-surface
                       transition-colors duration-150">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileOpen && (
        <div className="bg-bg border-b border-border px-5 pb-4">
          <div className="flex flex-col gap-1 mb-3">
            {NAV_LINKS.map(l => (
              <button key={l.label}
                onClick={() => handleNav(l.href)}
                className="px-3 py-2 text-sm text-muted text-left rounded-md
                           hover:text-text hover:bg-surface transition-colors duration-150">
                {l.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-3 border-t border-border">
            <button onClick={() => { setMobileOpen(false); onLogin(); }}
              className="w-full py-2 text-sm text-muted rounded-md
                         border border-border hover:text-text hover:bg-surface
                         transition-colors duration-150">
              Log in
            </button>
            <button onClick={() => { setMobileOpen(false); onSignup(); }}
              className="w-full py-2 text-sm font-medium text-white rounded-md
                         bg-accent hover:bg-accent-dim transition-colors duration-150">
              Get started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}