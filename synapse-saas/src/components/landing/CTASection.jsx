import { ArrowRight } from "lucide-react";

export default function CTASection({ onSignup, onContact }) {
  return (
    <section className="py-20 px-5 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="font-display font-bold text-text leading-tight mb-4"
            style={{ fontSize: "clamp(22px, 3vw, 38px)" }}>
          Ready to start building?
        </h2>

        <p className="text-muted text-sm leading-relaxed mb-8 max-w-md mx-auto">
          Join thousands of teams already using Synapse.
          Free for 14 days, no credit card required.
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button onClick={onSignup}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium
                       text-white rounded-md bg-accent hover:bg-accent-dim
                       transition-colors duration-150">
            Get started free <ArrowRight size={15} />
          </button>
          <button onClick={onContact} className="px-5 py-2.5 text-sm text-muted rounded-md
                             border border-border hover:text-text hover:bg-surface
                             transition-colors duration-150">
            Talk to sales
          </button>
        </div>

      </div>
    </section>
  );
}