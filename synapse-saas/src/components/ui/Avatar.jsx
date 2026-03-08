export default function Avatar({ initials, hex, size = 36 }) {
  return (
    <div
      className="rounded-full flex items-center justify-center font-display font-semibold shrink-0"
      style={{
        width:           size,
        height:          size,
        fontSize:        size * 0.36,
        backgroundColor: hex + "22",
        color:           hex,
      }}
    >
      {initials}
    </div>
  );
}