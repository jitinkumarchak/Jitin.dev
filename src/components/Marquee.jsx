const ITEMS = [
  "React ⚡",
  "Node.js 🚀",
  "Full-Stack Dev 🧑‍💻",
  "Tailwind CSS 🎨",
  "MongoDB 🍃",
  "Framer Motion 🎬",
  "Open to Work 🟢",
  "Supabase ⚡",
  "Product Builder 🏗️",
  "Redux 🔄",
  "Express.js 🛤️",
  "Clean Code ✨",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="w-full overflow-hidden py-4"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg-alt)",
      }}
      aria-hidden="true"
    >
      <div className="marquee-inner whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 text-xs font-bold tracking-widest uppercase"
            style={{ color: i % 3 === 0 ? "var(--accent)" : "var(--text-muted)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
