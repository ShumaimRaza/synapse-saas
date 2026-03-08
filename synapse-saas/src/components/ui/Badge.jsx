const VARIANTS = {
  default: "bg-border      text-muted  ",
  success: "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20",
  warning: "bg-amber-400/10   text-amber-400   border border-amber-400/20",
  danger:  "bg-red-400/10     text-red-400     border border-red-400/20",
  info:    "bg-indigo-400/10  text-indigo-400  border border-indigo-400/20",
};

export default function Badge({ children, variant = "default" }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                      text-[11px] font-medium font-display
                      ${VARIANTS[variant]}`}>
      {children}
    </span>
  );
}