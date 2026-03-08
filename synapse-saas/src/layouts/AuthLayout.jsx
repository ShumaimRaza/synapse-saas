export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">S</span>
          </div>
          <span className="font-display font-semibold text-text">Synapse</span>
        </div>

        {children}
      </div>
    </div>
  );
}