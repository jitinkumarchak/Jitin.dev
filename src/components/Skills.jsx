import { motion } from "framer-motion";
import { skills } from "../data/skills";

const M = { div: motion.div };

const CATEGORY_STYLES = {
  languages:    { emoji: "📝", color: "#7c3aed", label: "Languages" },
  frontend:     { emoji: "🎨", color: "#06b6d4", label: "Frontend" },
  backend:      { emoji: "⚙️", color: "#10b981", label: "Backend" },
  databases:    { emoji: "🗄️", color: "#f59e0b", label: "Databases" },
  tools:        { emoji: "🛠️", color: "#f97316", label: "Tools" },
  "soft skills":{ emoji: "🧠", color: "#ec4899", label: "Soft Skills" },
};

const LEVEL_COLORS = {
  Expert: { bg: "bg-green-500", text: "text-green-600" },
  Advanced: { bg: "bg-blue-500", text: "text-blue-600" },
  Intermediate: { bg: "bg-yellow-500", text: "text-yellow-600" },
  Beginner: { bg: "bg-gray-500", text: "text-gray-600" },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-12 py-28 md:py-36"
      style={{ background: "var(--bg)" }}
    >
      {/* Decorative number */}
      <span
        className="section-num"
        style={{ top: "2%", left: "-1%", opacity: 0.05 }}
        aria-hidden="true"
      >
        04
      </span>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Skills</p>
          <h2
            className="font-display font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--text)" }}
          >
            My Arsenal{" "}
            <span className="gradient-text">⚡</span>
          </h2>
          <p className="mt-4" style={{ color: "var(--text-muted)" }}>
            Tools I reach for when the blank editor is staring back at me.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([group, items], i) => {
            const meta = CATEGORY_STYLES[group] || {
              emoji: "✦",
              color: "var(--accent)",
              label: group,
            };

            return (
              <M.div
                key={group}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                viewport={{ once: true, margin: "-60px" }}
                className="card p-6 group"
                style={{ background: "var(--bg-card)" }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: meta.color + "14",
                      border: `1px solid ${meta.color}30`,
                    }}
                  >
                    {meta.emoji}
                  </div>
                  <h3
                    className="text-sm font-extrabold uppercase tracking-widest"
                    style={{ color: meta.color }}
                  >
                    {meta.label}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => {
                    // Handle both old string format and new object format
                    const skillName = typeof skill === "string" ? skill : skill.name;
                    const skillLevel = typeof skill === "string" ? "Intermediate" : skill.level;
                    const levelColor = LEVEL_COLORS[skillLevel] || LEVEL_COLORS["Intermediate"];

                    return (
                      <div
                        key={skillName}
                        className="group/skill"
                        title={skillLevel}
                      >
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold border transition-all duration-200 cursor-default flex items-center gap-1.5"
                          style={{
                            color: meta.color,
                            borderColor: meta.color + "35",
                            background: meta.color + "0e",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = meta.color + "25";
                            e.currentTarget.style.transform = "scale(1.07)";
                            e.currentTarget.style.borderColor = meta.color + "70";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = meta.color + "0e";
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.borderColor = meta.color + "35";
                          }}
                        >
                          {skillName}
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{
                              background: levelColor.bg.replace("bg-", ""),
                            }}
                          />
                        </span>
                        {/* Level tooltip */}
                        <div
                          className="opacity-0 group-hover/skill:opacity-100 transition-opacity text-xs px-2 py-1 rounded bg-gray-800 text-white absolute -top-6 left-0 whitespace-nowrap pointer-events-none"
                          style={{ color: "white" }}
                        >
                          {skillLevel}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </M.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
