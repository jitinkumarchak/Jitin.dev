export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-24 bg-[#f6f6f6]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="border border-gray-200 p-8 rounded-2xl bg-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="text-2xl font-semibold">
              CampusVerse - Founder & Lead Engineer
            </h3>
            <p className="text-gray-500">2024 - Present</p>
          </div>

          <p className="text-gray-700 mt-3">
            Built a scalable student platform with chat, clubs, events, blogs,
            internships, and leaderboards.
          </p>

          <ul className="mt-5 list-disc list-inside text-gray-700 space-y-2">
            <li>
              Developed responsive React + Redux frontend with Tailwind and
              Framer Motion.
            </li>
            <li>
              Implemented authentication, real-time APIs, and role-based access
              control.
            </li>
            <li>
              Led a 3-member engineering team using Agile sprints and GitHub
              workflows.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
