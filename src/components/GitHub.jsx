import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { repos } from "../data/repos";

const M = { div: motion.div };

export default function GitHubShowcase() {
  return (
    <section
      id="repos"
      className="relative px-6 md:px-12 py-28 md:py-36"
      style={{ background: "var(--bg)" }}
    >
      {/* Decorative number */}
      <span
        className="section-num"
        style={{ top: "2%", right: "-1%", opacity: 0.06 }}
        aria-hidden="true"
      >
        03
      </span>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label">Open Source & Projects</p>
          <h2
            className="font-display font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--text)" }}
          >
            On{" "}
            <span className="gradient-text">GitHub</span>
          </h2>
          <p className="mt-4" style={{ color: "var(--text-muted)" }}>
            Public repos showcasing my work — from full-stack products to algorithm solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {repos.map((repo, i) => (
            <M.div
              key={repo.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="card p-6 group flex flex-col"
              style={{ background: "var(--bg-card)" }}
            >
              {/* Header with icon */}
              <div className="flex items-start justify-between mb-4">
                <FiGithub
                  size={28}
                  style={{ color: "var(--accent)" }}
                  className="flex-shrink-0"
                />
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-lg leading-tight mb-2"
                style={{ color: "var(--text)" }}
              >
                {repo.name}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-4 flex-grow"
                style={{ color: "var(--text-muted)" }}
              >
                {repo.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {repo.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full font-bold"
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

              {/* Link */}
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold transition-all"
                style={{ color: "var(--accent)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                View on GitHub
                <FiExternalLink size={14} />
              </a>
            </M.div>
          ))}
        </div>

        {/* CTA to GitHub profile */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p style={{ color: "var(--text-muted)" }} className="mb-4">
            Check out more on my GitHub profile
          </p>
          <a
            href="https://github.com/jitinkumarchak"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <FiGithub size={20} />
            Visit GitHub Profile
          </a>
        </M.div>
      </div>
    </section>
  );
}
