import { Star } from "lucide-react";
import { testimonials } from "../../data/mockData";

export default function Testimonials() {
  return (
    <section className="py-20 px-5 border-t border-border">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-display font-bold text-text leading-tight"
              style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
            Trusted by engineering teams
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-surface border border-border rounded-lg p-5 flex flex-col gap-4">

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-8 h-8 rounded-full flex items-center justify-center
                                text-xs font-display font-bold shrink-0"
                     style={{ backgroundColor: t.hex + "20", color: t.hex }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-text">{t.name}</p>
                  <p className="text-xs text-muted">{t.role} · {t.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}