export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Education</h2>

        <div className="space-y-8">
          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-2xl font-semibold">
                IK Gujral Punjab Technical University, Kapurthala
              </h3>
              <p className="text-gray-500">Oct 2022 - Jun 2026</p>
            </div>
            <p className="text-gray-700 mt-2">B.Tech in Computer Science</p>
            <p className="text-gray-600 mt-1">CGPA: 8.24 / 10</p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-2xl font-semibold">
                Raj Kamal Public School, Sikandra Rao, Hathras
              </h3>
              <p className="text-gray-500">Jun 2019 - Aug 2021</p>
            </div>
            <p className="text-gray-700 mt-2">Intermediate - CBSE</p>
            <p className="text-gray-600 mt-1">Score: 81%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
