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
  /* Duplicate the list so the animation loops seamlessly */
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="w-full overflow-hidden border-y border-[#3f3f46] bg-[#18181b] py-4"
      aria-hidden="true"
    >
      <div className="marquee-inner whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-block mx-8 text-sm font-semibold text-[#a1a1aa] tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
