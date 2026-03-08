import { Check } from "lucide-react";
import { pricingPlans } from "../../data/mockData";

export default function PricingSection({ onSignup, onContact }) {
  return (
    <section className="py-20 px-5 border-t border-border">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-display font-bold text-text leading-tight mb-3"
              style={{ fontSize: "clamp(22px, 3vw, 34px)" }}>
            Simple, honest pricing
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            No hidden fees. No surprise overages. Cancel anytime.
            14-day free trial on every plan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingPlans.map((plan, i) => (
            <div key={i}
              className={`flex flex-col rounded-lg p-6 border
                ${plan.highlight
                  ? "bg-accent/[0.06] border-accent/40"
                  : "bg-surface border-border"
                }`}>

              {/* Header */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-display font-semibold text-sm text-text">{plan.name}</p>
                  {plan.highlight && (
                    <span className="text-[10px] font-medium text-accent bg-accent/10
                                     px-2 py-0.5 rounded-full border border-accent/20">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted">{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="mb-5 pb-5 border-b border-border">
                {typeof plan.price === "number" ? (
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-bold text-3xl text-text">
                      ${plan.price}
                    </span>
                    <span className="text-muted text-sm">/ {plan.period}</span>
                  </div>
                ) : (
                  <span className="font-display font-bold text-3xl text-text">
                    {plan.price}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted">
                    <Check size={14} className="text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={plan.name === "Enterprise" ? onContact : onSignup}
                className={`w-full py-2 text-sm font-medium rounded-md transition-colors duration-150
                  ${plan.highlight
                    ? "bg-accent text-white hover:bg-accent-dim"
                    : "bg-border text-text hover:bg-border/80"
                  }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}