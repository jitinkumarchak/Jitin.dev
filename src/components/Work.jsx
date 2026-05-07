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
      "Built a full student super-app from scratch — chat, clubs, events, blogs, internships, leaderboards. Designed, developed, and shipped it as a real product used by real students. Yes, I wore all the hats.",
    tech: ["React", "Redux", "Node.js", "Supabase", "Tailwind CSS"],
    image: campusverseImg,
    demo: "https://campusverse.co.in",
    accent: "#7c3aed",
  },
  {
    num: "02",
    title: "Hospital Management System",
    emoji: "🏥",
    tagline: "RESTful order in a chaotic world",
    description:
      "Designed and built a full REST API suite for patients, appointments, billing, and staff with role-based access control for doctors, admins, and staff. Healthcare-grade reliability — no drama.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    image: hmssImg,
    demo: null,
    accent: "#10b981",
  },
  {
    num: "03",
    title: "StreamVerse",
    emoji: "🎬",
    tagline: "Movies & TV — actually fun to browse",
    description:
      "A modern movie and TV discovery app with real-time search, smart filtering, trailers, and trending content. Because browsing for movies should be as good as watching them.",
    tech: ["React", "Vite", "Tailwind CSS", "TMDB API"],
    image: streamverseImg,
    demo: "https://streamverse-one.vercel.app/",
    accent: "#f59e0b",
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

                {/* Tech stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="badge-sticker">
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    id={`work-demo-${project.num}`}
                    className="inline-flex mt-8 items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200"
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
                    Live Demo ↗
                  </a>
                ) : (
                  <p className="mt-8 text-sm italic" style={{ color: "var(--text-faint)" }}>
                    Demo available on request — DM me.
                  </p>
                )}
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
