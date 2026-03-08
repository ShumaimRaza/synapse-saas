export default function CustomTooltip({ active, payload, label, prefix = "", suffix = "" }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-bg border border-border rounded-md px-3 py-2 text-xs shadow-lg">
      {label && <p className="text-muted mb-1.5">{label}</p>}
      {payload.map((p, i) => (
        <p key={i} className="font-medium" style={{ color: p.color }}>
          {p.name}:{" "}
          {prefix}
          {typeof p.value === "number" && p.value > 999
            ? `${(p.value / 1000).toFixed(1)}k`
            : p.value}
          {suffix}
        </p>
      ))}
    </div>
  );
}