import { motion } from "framer-motion";
import campusverseImg from "../assets/Campusverse.png";
import hmssImg from "../assets/HMSS.png";
import streamverseImg from "../assets/StreamVerse.png";

const MotionDiv = motion.div;

const projects = [
  {
    title: "CampusVerse",
    emoji: "🎓",
    tagline: "The super-app for college life",
    description:
      "Built a full student super-app from scratch — chat, clubs, events, blogs, internships, leaderboards. Designed, developed, and shipped it as a real product used by real students. Yes, I wore all the hats.",
    tech: ["React", "Redux", "Node.js", "Supabase", "Tailwind CSS"],
    image: campusverseImg,
    demo: "https://campusverse.co.in",
    accent: "#a855f7",
  },
  {
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
    <section id="work" className="px-6 md:px-12 py-24 md:py-32 bg-[#09090b]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Things I&apos;ve Shipped{" "}
            <span className="gradient-text">🚀</span>
          </h2>
          <p className="mt-4 text-[#a1a1aa] max-w-lg">
            Real products. Real users. Real commits at 2 a.m.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <MotionDiv
              key={project.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{project.emoji}</span>
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border"
                    style={{
                      color: project.accent,
                      borderColor: project.accent + "44",
                      background: project.accent + "11",
                    }}
                  >
                    {project.tagline}
                  </span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-[#a1a1aa] text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="badge-sticker"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex mt-8 items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border transition-all"
                    style={{
                      borderColor: project.accent + "66",
                      background: project.accent + "18",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = project.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = project.accent + "18";
                    }}
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <p className="mt-8 text-sm text-[#52525b] italic">
                    Demo available on request — DM me.
                  </p>
                )}
              </div>

              {/* Image */}
              <div
                className="glow-card rounded-2xl overflow-hidden border border-[#3f3f46] bg-[#18181b] aspect-video flex items-center justify-center"
                style={{ "--glow-color": project.accent }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
