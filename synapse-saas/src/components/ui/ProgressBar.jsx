export default function ProgressBar({ value = 0, hex }) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{
          width:           `${clamped}%`,
          backgroundColor: hex ?? "#6366f1",
        }}
      />
    </div>
  );
}