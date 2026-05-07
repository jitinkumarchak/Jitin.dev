import { motion } from "framer-motion";

const M = { div: motion.div };

const educationItems = [
  {
    school: "IK Gujral Punjab Technical University, Kapurthala",
    degree: "B.Tech in Computer Science",
    period: "Oct 2022 – Jun 2026",
    grade: "CGPA: 8.33/ 10",
    emoji: "🎓",
    color: "#7c3aed",
  },
  {
    school: "Raj Kamal Public School, Sikandra Rao, Hathras",
    degree: "Intermediate – CBSE",
    period: "Jun 2019 – Aug 2021",
    grade: "Score: 81%",
    emoji: "📚",
    color: "#10b981",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative px-6 md:px-12 py-28 md:py-36"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Decorative number */}
      <span
        className="section-num"
        style={{ top: "2%", right: "-1%", opacity: 0.06 }}
        aria-hidden="true"
      >
        05
      </span>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Education</p>
          <h2
            className="font-display font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--text)" }}
          >
            Where I{" "}
            <span className="gradient-text">Levelled Up</span>
          </h2>
        </div>

        <div className="space-y-5">
          {educationItems.map((item, i) => (
            <M.div
              key={item.school}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 flex gap-5 items-start"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: item.color + "14",
                  border: `1px solid ${item.color}35`,
                }}
              >
                {item.emoji}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <h3
                    className="font-display font-bold text-lg leading-snug"
                    style={{ color: "var(--text)" }}
                  >
                    {item.school}
                  </h3>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 self-start"
                    style={{
                      color: item.color,
                      background: item.color + "14",
                      border: `1px solid ${item.color}35`,
                    }}
                  >
                    {item.period}
                  </span>
                </div>
                <p className="text-sm mt-1.5" style={{ color: "var(--text-muted)" }}>
                  {item.degree}
                </p>
                <p
                  className="text-sm font-bold mt-1.5"
                  style={{ color: item.color }}
                >
                  {item.grade}
                </p>
              </div>
            </M.div>
          ))}
        </div>
      </div>
    </section>
  );
}
