import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24 bg-white">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="border border-gray-200 p-6 rounded-xl">
            <h3 className="text-xl font-semibold capitalize mb-4">{group}</h3>

            <div className="flex flex-wrap gap-2">
              {items.map((s, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 text-sm rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
