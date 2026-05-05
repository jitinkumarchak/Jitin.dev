import { motion } from "framer-motion";

const MotionDiv = motion.div;

const educationItems = [
  {
    school: "IK Gujral Punjab Technical University, Kapurthala",
    degree: "B.Tech in Computer Science",
    period: "Oct 2022 – Jun 2026",
    grade: "CGPA: 8.24 / 10",
    emoji: "🎓",
    color: "#a855f7",
  },
  {
    school: "Raj Kamal Public School, Sikandra Rao, Hathras",
    degree: "Intermediate – CBSE",
    period: "Jun 2019 – Aug 2021",
    grade: "Score: 81%",
    emoji: "📚",
    color: "#10b981",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 py-24 bg-[#18181b]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-3">
            Education
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Where I Levelled Up
          </h2>
        </div>

        <div className="space-y-6">
          {educationItems.map((item, i) => (
            <MotionDiv
              key={item.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glow-card border border-[#3f3f46] bg-[#27272a] rounded-2xl p-6 flex gap-5 items-start"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: item.color + "18", border: `1px solid ${item.color}40` }}
              >
                {item.emoji}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <h3 className="font-display text-lg font-bold leading-snug">
                    {item.school}
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 self-start"
                    style={{ color: item.color, background: item.color + "18", border: `1px solid ${item.color}40` }}
                  >
                    {item.period}
                  </span>
                </div>
                <p className="text-[#a1a1aa] text-sm mt-1">{item.degree}</p>
                <p
                  className="text-sm font-semibold mt-2"
                  style={{ color: item.color }}
                >
                  {item.grade}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
