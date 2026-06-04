import { motion } from "framer-motion";
import campusverseImg from "../assets/Campusverse.png";
import hmssImg from "../assets/HMSS.png";
import streamverseImg from "../assets/StreamVerse.png";

const M = { div: motion.div };

const projects = [
  {
    num: "01",
    title: "CampusVerse",
    emoji: "🎓",
    tagline: "The super-app for college life",
    description:
      "Built a full student super-app from scratch — 90+ active users, real product with chat, clubs, events, blogs, internships, leaderboards. Designed UI, built backend APIs, managed 3-person team. Shipped MVP in 3 months.",
    tech: ["React", "Redux", "Node.js", "Supabase", "Tailwind CSS"],
    image: campusverseImg,
    demo: "https://campusverse.co.in",
    github: "https://github.com/jitinkumarchak/CampusVerseV1",
    accent: "#7c3aed",
    metrics: "90+ active users | 3-person team | Live product",
  },
  {
    num: "02",
    title: "PulseNet",
    emoji: "🏥",
    tagline: "Emergency resource availability platform",
    description:
      "Real-time hospital resource tracking system. Monitors beds, doctors, ambulances, and critical resources. Built full REST API suite with role-based access control for admins, hospital staff, and emergency responders. Healthcare-grade reliability.",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: hmssImg,
    demo: "https://github.com/jitinkumarchak/PulseNet",
    github: "https://github.com/jitinkumarchak/PulseNet",
    accent: "#10b981",
    metrics: "Healthcare-grade | Real-time tracking",
  },
  {
    num: "03",
    title: "StreamVerse",
    emoji: "🎬",
    tagline: "Movies & TV — actually fun to browse",
    description:
      "Modern movie and TV discovery app with real-time search, smart filtering, trailers, and trending content. Integrated TMDB API for comprehensive data. Responsive UI with smooth animations.",
    tech: ["React", "Vite", "Tailwind CSS", "TMDB API"],
    image: streamverseImg,
    demo: "https://streamverse-one.vercel.app/",
    github: "https://github.com/jitinkumarchak/StreamVerse",
    accent: "#f59e0b",
    metrics: "Live demo",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-12 py-28 md:py-36"
      style={{ background: "var(--bg)" }}
    >
      {/* Decorative number */}
      <span
        className="section-num"
        style={{ top: "2%", left: "-1%", opacity: 0.05 }}
        aria-hidden="true"
      >
        02
      </span>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-20">
          <p className="section-label">Portfolio</p>
          <h2
            className="font-display font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--text)" }}
          >
            Things I&apos;ve{" "}
            <span className="gradient-text">Shipped 🚀</span>
          </h2>
          <p className="mt-4 max-w-lg" style={{ color: "var(--text-muted)" }}>
            Real products. Real users. Real commits at 2 a.m.
          </p>
        </div>

        <div className="space-y-28 md:space-y-36">
          {projects.map((project, idx) => (
            <M.div
              key={project.title}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text side */}
              <div>
                {/* Project number + tagline */}
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="font-display font-black text-4xl select-none"
                    style={{ color: project.accent + "30" }}
                  >
                    {project.num}
                  </span>
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{
                      color: project.accent,
                      borderColor: project.accent + "50",
                      background: project.accent + "12",
                      border: `1px solid ${project.accent}50`,
                    }}
                  >
                    {project.emoji} {project.tagline}
                  </span>
                </div>

                <h3
                  className="font-display font-black leading-none tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text)" }}
                >
                  {project.title}
                </h3>

                <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>

                {/* Metrics badge */}
                {project.metrics && (
                  <p className="mt-3 text-xs font-mono" style={{ color: project.accent }}>
                    📊 {project.metrics}
                  </p>
                )}

                {/* Tech stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="badge-sticker">
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      id={`work-demo-${project.num}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200"
                      style={{
                        color: project.accent,
                        border: `1.5px solid ${project.accent}60`,
                        background: project.accent + "10",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = project.accent;
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = project.accent + "10";
                        e.currentTarget.style.color = project.accent;
                      }}
                    >
                      {project.demo.includes("github") ? "View Code" : "Live Demo"} ↗
                    </a>
                  ) : null}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200"
                      style={{
                        color: "var(--text-muted)",
                        border: "1.5px solid var(--border)",
                        background: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--surface)";
                        e.currentTarget.style.color = "var(--text)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--text-muted)";
                      }}
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Image side */}
              <div
                className="glow-card rounded-2xl overflow-hidden aspect-video"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  boxShadow: `0 8px 40px ${project.accent}18`,
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </M.div>
          ))}
        </div>
      </div>
    </section>
  );
}
