import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const M = { div: motion.div };

export default function Projects() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-12 py-28 md:py-36"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Decorative number */}
      <span
        className="section-num"
        style={{ top: "2%", left: "-1%", opacity: 0.06 }}
        aria-hidden="true"
      >
        02
      </span>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Portfolio</p>
          <h2
            className="font-display font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--text)" }}
          >
            Things I&apos;ve{" "}
            <span className="gradient-text">Shipped 🚀</span>
          </h2>
          <p className="mt-4" style={{ color: "var(--text-muted)" }}>
            Real products. Real users. Real commits at 2 a.m.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <M.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 md:p-10"
            >
              {/* Title & Metrics Row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3
                    className="font-display font-black text-2xl md:text-3xl"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>
                  {project.metrics && (
                    <p className="text-sm font-mono mt-2" style={{ color: "var(--accent)" }}>
                      {project.metrics}
                    </p>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                      border: "1px solid var(--accent-subtle)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 flex-wrap">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all"
                    style={{
                      background: "var(--accent)",
                      color: "white",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    <FiExternalLink size={16} />
                    {project.link.includes("github") ? "View Code" : "Live Demo"}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all"
                    style={{
                      background: "var(--surface)",
                      color: "var(--text)",
                      border: "1px solid var(--border-strong)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--border-strong)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--surface)";
                    }}
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </M.div>
          ))}
        </div>
      </div>
    </section>
  );
}
