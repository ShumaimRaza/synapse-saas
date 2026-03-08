import { useState } from "react";
import { ArrowLeft, Mail, MessageSquare, Building2 } from "lucide-react";

const REASONS = [
  "General enquiry",
  "Sales & pricing",
  "Technical support",
  "Partnership",
  "Other",
];

export default function ContactPage({ onBack }) {
  const [form, setForm] = useState({
    name:    "",
    email:   "",
    company: "",
    reason:  REASONS[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls = `w-full px-3 py-2 rounded-md text-sm text-text
                    bg-surface border border-border placeholder:text-subtle
                    focus:outline-none focus:border-accent transition-colors duration-150`;

  return (
    <div className="min-h-screen bg-bg">

      {/* Simple top bar */}
      <div className="border-b border-border px-5 h-16 flex items-center">
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 cursor-pointer">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">S</span>
            </div>
            <span className="font-display font-semibold text-text">Synapse</span>
          </button>
          <button onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs text-muted
                       hover:text-text transition-colors duration-150">
            <ArrowLeft size={13} /> Back
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — info */}
          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-widest mb-3">
              Contact
            </p>
            <h1 className="font-display font-bold text-text leading-tight mb-4"
                style={{ fontSize: "clamp(24px, 3vw, 36px)" }}>
              Get in touch
            </h1>
            <p className="text-sm text-muted leading-relaxed mb-10">
              Have a question about pricing, need a demo, or want to talk
              about how Synapse can work for your team? We'd love to hear from you.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text mb-0.5">Email us</p>
                  <p className="text-xs text-muted">hello@synapse.io</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                  <MessageSquare size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text mb-0.5">Live chat</p>
                  <p className="text-xs text-muted">Available Mon–Fri, 9am–6pm GMT</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                  <Building2 size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text mb-0.5">Enterprise sales</p>
                  <p className="text-xs text-muted">sales@synapse.io</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface border border-border rounded-lg p-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-400/10 flex items-center justify-center mb-2">
                  <Mail size={18} className="text-emerald-400" />
                </div>
                <p className="font-display font-semibold text-text">Message sent!</p>
                <p className="text-xs text-muted max-w-xs leading-relaxed">
                  Thanks for reaching out. We'll get back to you within one business day.
                </p>
                <button onClick={onBack}
                  className="mt-4 px-4 py-2 text-xs font-medium text-white
                             bg-accent hover:bg-accent-dim rounded-md
                             transition-colors duration-150">
                  Back to home
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted">Full name</label>
                    <input required value={form.name} onChange={set("name")}
                           placeholder="Alex Park" className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-muted">Work email</label>
                    <input required type="email" value={form.email} onChange={set("email")}
                           placeholder="alex@company.com" className={inputCls} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted">Company</label>
                  <input value={form.company} onChange={set("company")}
                         placeholder="Acme Inc." className={inputCls} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted">Reason for contact</label>
                  <select value={form.reason} onChange={set("reason")}
                    className={inputCls + " cursor-pointer"}>
                    {REASONS.map(r => <option key={r}>{r}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted">Message</label>
                  <textarea required value={form.message} onChange={set("message")}
                    placeholder="Tell us how we can help…"
                    rows={4}
                    className={inputCls + " resize-none"} />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full py-2 text-sm font-medium text-white rounded-md
                             bg-accent hover:bg-accent-dim transition-colors duration-150
                             disabled:opacity-60 disabled:cursor-not-allowed mt-1">
                  {loading ? "Sending…" : "Send message"}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}