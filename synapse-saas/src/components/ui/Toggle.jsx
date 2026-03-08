export default function Toggle({ on, onToggle, disabled = false }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => !disabled && onToggle()}
      className={`relative w-9 h-5 rounded-full transition-colors duration-200 shrink-0
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
                  ${on      ? "bg-accent"      : "bg-border"}
                  ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-sm
                   transition-all duration-200"
        style={{ left: on ? "calc(100% - 17px)" : "3px" }}
      />
    </button>
  );
}