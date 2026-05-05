import { motion } from "framer-motion";

const MotionDiv = motion.div;
import { skills } from "../data/skills";

const CATEGORY_STYLES = {
  languages: { emoji: "📝", color: "#a855f7", label: "Languages" },
  frontend: { emoji: "🎨", color: "#06b6d4", label: "Frontend" },
  backend: { emoji: "⚙️", color: "#10b981", label: "Backend" },
  databases: { emoji: "🗄️", color: "#f59e0b", label: "Databases" },
  tools: { emoji: "🛠️", color: "#f97316", label: "Tools" },
  "soft skills": { emoji: "🧠", color: "#ec4899", label: "Soft Skills" },
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            My Arsenal{" "}
            <span className="gradient-text">⚡</span>
          </h2>
          <p className="mt-4 text-[#a1a1aa]">
            Tools I reach for when the blank editor is staring back at me.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items], i) => {
            const meta = CATEGORY_STYLES[group] || {
              emoji: "✦",
              color: "#a855f7",
              label: group,
            };

            return (
              <MotionDiv
                key={group}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true, margin: "-60px" }}
                className="glow-card bg-[#27272a] border border-[#3f3f46] rounded-2xl p-6 hover:border-opacity-60"
                style={{ "--glow-color": meta.color }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-2xl">{meta.emoji}</span>
                  <h3
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: meta.color }}
                  >
                    {meta.label}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 cursor-default"
                      style={{
                        color: meta.color,
                        borderColor: meta.color + "40",
                        background: meta.color + "12",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = meta.color + "28";
                        e.currentTarget.style.transform = "scale(1.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = meta.color + "12";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
