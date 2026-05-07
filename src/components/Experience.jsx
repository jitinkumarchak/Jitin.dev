import { motion } from "framer-motion";

const M = { div: motion.div };

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 md:px-12 py-28 md:py-36"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Decorative number */}
      <span
        className="section-num"
        style={{ top: "2%", right: "-1%", opacity: 0.06 }}
        aria-hidden="true"
      >
        03
      </span>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Experience</p>
          <h2
            className="font-display font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--text)" }}
          >
            Where I&apos;ve{" "}
            <span className="gradient-text">Hustled</span>
          </h2>
        </div>

        <M.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="card relative overflow-hidden p-8 md:p-10"
        >
          {/* Left accent stripe */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
            style={{ background: "linear-gradient(to bottom, var(--accent), #06b6d4)" }}
          />

          <div className="pl-5">
            {/* Title row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
              <div>
                <h3
                  className="font-display font-black text-2xl md:text-3xl"
                  style={{ color: "var(--text)" }}
                >
                  CampusVerse
                </h3>
                <p className="text-sm font-bold mt-1" style={{ color: "var(--accent)" }}>
                  Founder &amp; Lead Engineer
                </p>
              </div>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full self-start"
                style={{
                  color: "#10b981",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.25)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                2024 – Present
              </span>
            </div>

            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Wore every hat you can imagine — designer, developer, product manager,
              and late-night debugger. Built a scalable student super-app from 0 → live users.
            </p>

            <ul className="space-y-3">
              {[
                "Built a responsive React + Redux frontend with Tailwind CSS and Framer Motion animations.",
                "Implemented real-time APIs, authentication, and granular role-based access control.",
                "Led a 3-person engineering team through Agile sprints, code reviews, and GitHub workflows.",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span
                    className="mt-0.5 text-base flex-shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    ✦
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </M.div>
      </div>
    </section>
  );
}
