import { motion } from "framer-motion";
import campusverseImg from "../assets/Campusverse.png";
import hmssImg from "../assets/HMSS.png";
import streamverseImg from "../assets/StreamVerse.png";

const projects = [
  {
    title: "CampusVerse",
    description:
      "A scalable student platform with chat, clubs, events, blogs, internships, and leaderboards. Built and launched as a real product for real students.",
    tech: ["React", "Redux", "Node.js", "Supabase", "Tailwind CSS"],
    image: campusverseImg,
    demo: "https://campusverse.co.in",
  },
  {
    title: "Hospital Management System",
    description:
      "Designed REST APIs for patients, appointments, billing, and staff management with secure role-based access for doctors, staff, and admins.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    image: hmssImg,
    demo: null,
  },
  {
    title: "StreamVerse",
    description:
      "Modern movie and TV streaming discovery app with search, filtering, trailers, trending content, and responsive UI.",
    tech: ["React", "Vite", "Tailwind CSS", "TMDB API"],
    image: streamverseImg,
    demo: "https://streamverse-one.vercel.app/",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-12 py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16">
          Selected Work
        </h2>

        <div className="space-y-20 md:space-y-24">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 md:gap-12 items-center"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold">
                  {project.title}
                </h3>
                <p className="mt-5 text-gray-600 text-lg">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm"
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
                    className="inline-flex mt-6 px-6 py-3 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition"
                  >
                    Live Demo
                  </a>
                ) : (
                  <p className="mt-6 text-sm text-gray-500">
                    Demo available on request.
                  </p>
                )}
              </div>

              <div className="bg-gray-100 rounded-3xl h-56 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
