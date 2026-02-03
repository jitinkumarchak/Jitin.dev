import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="border border-gray-800 p-6 rounded-xl hover:border-white transition"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="mt-4 text-gray-400">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {p.tech.map((t, i) => (
                <span key={i} className="bg-gray-800 px-3 py-1 text-sm rounded">
                  {t}
                </span>
              ))}
            </div>

            {p.link ? (
              <a
                href={p.link}
                className="inline-block mt-6 text-blue-400"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            ) : (
              <span className="inline-block mt-6 text-gray-500">Private</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
