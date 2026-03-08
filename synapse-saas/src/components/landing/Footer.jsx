const scrollTo = (id) => {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const PRODUCT_LINKS = [
  { label: "Features", href: "features" },
  { label: "Pricing",  href: "pricing"  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-2 gap-8 mb-10">

          {/* Brand */}
          <div>
            <button onClick={() => scrollTo("home")}
              className="flex items-center gap-2 mb-3 cursor-pointer">
              <div className="w-6 h-6 rounded bg-accent flex items-center justify-center">
                <span className="text-white font-display font-bold text-xs">S</span>
              </div>
              <span className="font-display font-semibold text-sm text-text">Synapse</span>
            </button>
            <p className="text-xs text-muted leading-relaxed max-w-[200px]">
              The developer platform for teams that ship fast and scale safely.
            </p>
          </div>

          {/* Product links */}
          <div>
            <p className="text-xs font-semibold text-text mb-3">Product</p>
            <div className="flex flex-col gap-2">
              {PRODUCT_LINKS.map(link => (
                <button key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-xs text-muted text-left hover:text-text
                             cursor-pointer transition-colors duration-150">
                  {link.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted">© 2026 Synapse Inc. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map(l => (
              <span key={l} className="text-xs text-muted hover:text-text
                                       cursor-pointer transition-colors duration-150">
                {l}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}