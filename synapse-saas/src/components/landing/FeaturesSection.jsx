import { Zap, Shield, BarChart2, Globe, Code2, Layers } from "lucide-react";
import { features } from "../../data/mockData";

const ICONS = { Zap, Shield, BarChart2, Globe, Code2, Layers };

export default function FeaturesSection() {
  return (
    <section className="py-20 px-5 border-t border-border">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="font-display font-bold text-text leading-tight mb-3"
              style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
            Everything you need to ship
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            One platform instead of a dozen tools. Covers infrastructure,
            observability, and team collaboration out of the box.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
          {features.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <div key={i} className="bg-surface p-6 hover:bg-surface/80 transition-colors duration-150">
                {/* Icon */}
                <div className="w-9 h-9 rounded-md flex items-center justify-center mb-4"
                     style={{ backgroundColor: f.hex + "18", color: f.hex }}>
                  {Icon && <Icon size={18} />}
                </div>
                <h3 className="font-display font-semibold text-text text-sm mb-2">
                  {f.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}