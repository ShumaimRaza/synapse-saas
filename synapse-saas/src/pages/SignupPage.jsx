import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../layouts/AuthLayout";

export default function SignupPage({ onSignup, onBack, onGoLogin }) {
  const [form, setForm] = useState({
    name: "", email: "", password: "", confirm: "",
  });
  const [showPass,    setShowPass]    = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error,       setError]       = useState("");
  const [loading,     setLoading]     = useState(false);

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    onSignup();
  };

  const fields = [
    { key: "name",    label: "Full name",    type: "text",     placeholder: "Alex Park" },
    { key: "email",   label: "Work email",   type: "email",    placeholder: "you@company.com" },
  ];

  return (
    <AuthLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-display font-bold text-text text-xl mb-1">
          Create your account
        </h1>
        <p className="text-sm text-muted">Free for 14 days, no credit card required.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Error */}
        {error && (
          <div className="px-3 py-2.5 rounded-md bg-red-400/10 border border-red-400/20
                          text-red-400 text-xs">
            {error}
          </div>
        )}

        {/* Name + Email */}
        {fields.map(f => (
          <div key={f.key} className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-muted">{f.label}</label>
            <input
              type={f.type}
              value={form[f.key]}
              onChange={set(f.key)}
              placeholder={f.placeholder}
              className="w-full px-3 py-2 rounded-md text-sm text-text
                         bg-surface border border-border
                         placeholder:text-subtle
                         focus:outline-none focus:border-accent
                         transition-colors duration-150"
            />
          </div>
        ))}

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={form.password}
              onChange={set("password")}
              placeholder="Min. 8 characters"
              className="w-full px-3 py-2 pr-10 rounded-md text-sm text-text
                         bg-surface border border-border
                         placeholder:text-subtle
                         focus:outline-none focus:border-accent
                         transition-colors duration-150"
            />
            <button type="button"
              onClick={() => setShowPass(v => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted
                         hover:text-text transition-colors duration-150">
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {/* Confirm password */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted">Confirm password</label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              value={form.confirm}
              onChange={set("confirm")}
              placeholder="Repeat password"
              className="w-full px-3 py-2 pr-10 rounded-md text-sm text-text
                         bg-surface border border-border
                         placeholder:text-subtle
                         focus:outline-none focus:border-accent
                         transition-colors duration-150"
            />
            <button type="button"
              onClick={() => setShowConfirm(v => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted
                         hover:text-text transition-colors duration-150">
              {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading}
          className="w-full py-2 text-sm font-medium text-white rounded-md
                     bg-accent hover:bg-accent-dim transition-colors duration-150
                     disabled:opacity-60 disabled:cursor-not-allowed mt-1">
          {loading ? "Creating account…" : "Create account"}
        </button>

        {/* Terms */}
        <p className="text-[11px] text-subtle text-center leading-relaxed">
          By signing up you agree to our{" "}
          <span className="text-muted hover:text-text cursor-pointer transition-colors duration-150">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-muted hover:text-text cursor-pointer transition-colors duration-150">
            Privacy Policy
          </span>.
        </p>

      </form>

      {/* Footer links */}
      <p className="mt-5 text-xs text-muted text-center">
        Already have an account?{" "}
        <button onClick={onGoLogin}
          className="text-accent hover:text-accent/80 font-medium transition-colors duration-150">
          Sign in
        </button>
      </p>

      <button onClick={onBack}
        className="mt-4 flex items-center gap-1.5 text-xs text-muted
                   hover:text-text transition-colors duration-150 mx-auto">
        <ArrowLeft size={13} /> Back to home
      </button>
    </AuthLayout>
  );
}