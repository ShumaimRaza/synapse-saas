import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../layouts/AuthLayout";

export default function LoginPage({ onLogin, onBack, onGoSignup }) {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    // Simulate async auth
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    onLogin();
  };

  return (
    <AuthLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-display font-bold text-text text-xl mb-1">
          Welcome back
        </h1>
        <p className="text-sm text-muted">Sign in to your Synapse workspace.</p>
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

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted">Email address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full px-3 py-2 rounded-md text-sm text-text
                       bg-surface border border-border
                       placeholder:text-subtle
                       focus:outline-none focus:border-accent
                       transition-colors duration-150"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted">Password</label>
            <button type="button"
              className="text-xs text-accent hover:text-accent/80 transition-colors duration-150">
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
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

        {/* Submit */}
        <button type="submit" disabled={loading}
          className="w-full py-2 text-sm font-medium text-white rounded-md
                     bg-accent hover:bg-accent-dim transition-colors duration-150
                     disabled:opacity-60 disabled:cursor-not-allowed mt-1">
          {loading ? "Signing in…" : "Sign in"}
        </button>

      </form>

      {/* Footer links */}
      <p className="mt-5 text-xs text-muted text-center">
        Don't have an account?{" "}
        <button onClick={onGoSignup}
          className="text-accent hover:text-accent/80 font-medium transition-colors duration-150">
          Sign up
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