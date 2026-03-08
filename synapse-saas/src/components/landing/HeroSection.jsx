import { ArrowRight } from "lucide-react";

const BRANDS = ["Vercel", "Linear", "Stripe", "Figma", "Notion", "Loom"];

export default function HeroSection({ onGetStarted, onLogin }) {
  return (
    <section className="pt-36 pb-24 px-5">
      <div className="max-w-3xl mx-auto text-center">

        {/* Label */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full
                        border border-border bg-surface text-muted text-xs font-medium mb-6">
          The all-in-one workspace for modern teams
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-2 font-display font-bold text-text leading-[1.15]
                       tracking-tight mb-5"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>
          Ship faster with the{" "}
          <span className="gradient-text">platform your team deserves</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up-3 text-muted leading-relaxed max-w-xl mx-auto mb-8"
           style={{ fontSize: "clamp(15px, 2vw, 17px)" }}>
          Synapse gives engineering teams the infrastructure, analytics, and
          tooling to move quickly without breaking things.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex items-center justify-center gap-3 flex-wrap mb-14">
          <button onClick={onGetStarted}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium
                       text-white rounded-md bg-accent hover:bg-accent-dim
                       transition-colors duration-150">
            Start for free <ArrowRight size={15} />
          </button>
          <button onClick={onLogin}
            className="px-5 py-2.5 text-sm font-medium text-muted rounded-md
                       border border-border hover:text-text hover:bg-surface
                       transition-colors duration-150">
            View demo
          </button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs text-subtle">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-6">
            {BRANDS.map(b => (
              <span key={b} className="text-subtle text-sm font-medium font-display">
                {b}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}