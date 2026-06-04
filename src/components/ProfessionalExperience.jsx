import { motion } from "framer-motion";

const M = { div: motion.div };

const experiences = [
  {
    company: "CampusVerse",
    role: "Founder & Lead Engineer",
    period: "2024 – Present",
    color: "#10b981",
    emoji: "🚀",
    points: [
      "Founded and shipped a full-stack student super-app with 90+ active users from day 1",
      "Designed entire UI/UX, built robust backend APIs, and managed 3-person engineering team",
      "Implemented real-time features, authentication, role-based access control, and scalable infrastructure",
      "Demonstrated product-market fit, user acquisition, and team leadership",
    ],
  },
  {
    company: "Self-Directed Learning",
    role: "Full-Stack Developer",
    period: "2023 – Present",
    color: "#7c3aed",
    emoji: "📚",
    points: [
      "Built 5+ production-ready full-stack projects with real users",
      "Mastered React, Node.js, MongoDB, and modern DevOps practices",
      "Created PulseNet — hospital resource management platform with healthcare-grade reliability",
      "Continuously shipping projects to market and iterating on user feedback",
    ],
  },
];

export default function ProfessionalExperience() {
  return (
    <section
      id="professional-experience"
      className="relative px-6 md:px-12 py-28 md:py-36"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Decorative number */}
      <span
        className="section-num"
        style={{ top: "2%", left: "-1%", opacity: 0.06 }}
        aria-hidden="true"
      >
        02.5
      </span>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Professional Path</p>
          <h2
            className="font-display font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--text)" }}
          >
            My{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <M.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card relative overflow-hidden p-8 md:p-10"
            >
              {/* Left accent stripe */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                style={{ background: exp.color }}
              />

              <div className="pl-5">
                {/* Title row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: exp.color + "14",
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {exp.emoji}
                    </div>
                    <div>
                      <h3
                        className="font-display font-black text-2xl md:text-3xl"
                        style={{ color: "var(--text)" }}
                      >
                        {exp.company}
                      </h3>
                      <p className="text-sm font-bold mt-1" style={{ color: exp.color }}>
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full self-start md:self-auto"
                    style={{
                      color: exp.color,
                      background: exp.color + "14",
                      border: `1px solid ${exp.color}35`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: exp.color }}
                    />
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="space-y-3">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="mt-0.5 text-base flex-shrink-0 font-bold"
                        style={{ color: exp.color }}
                      >
                        ✦
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </M.div>
          ))}
        </div>

        {/* Additional context */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 p-6 rounded-xl"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border-strong)",
          }}
        >
          <p style={{ color: "var(--text-muted)" }} className="text-sm">
            <span className="font-bold" style={{ color: "var(--text)" }}>
              Current Focus:
            </span>{" "}
            Seeking full-stack engineer or backend developer roles at growth-stage startups. Open to internships or full-time positions. Remote-friendly, willing to relocate.
          </p>
        </M.div>
      </div>
    </section>
  );
}
