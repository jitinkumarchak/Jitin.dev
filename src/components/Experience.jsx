import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-24 bg-[#09090b]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Where I&apos;ve Hustled
          </h2>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="glow-card relative border border-[#3f3f46] bg-[#18181b] rounded-2xl p-8 overflow-hidden"
        >
          {/* Accent stripe */}
          <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#a855f7] to-[#06b6d4]" />

          <div className="pl-4">
            {/* Title row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="font-display text-2xl font-bold">
                  CampusVerse
                </h3>
                <p className="text-[#a855f7] text-sm font-semibold mt-0.5">
                  Founder &amp; Lead Engineer
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10b981] bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full self-start md:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                2024 – Present
              </span>
            </div>

            <p className="text-[#a1a1aa] text-base leading-relaxed mb-5">
              Wore every hat you can imagine — designer, developer, product manager,
              and late-night debugger. Built a scalable student super-app from 0 → live users.
            </p>

            <ul className="space-y-3">
              {[
                "Built a responsive React + Redux frontend with Tailwind CSS and Framer Motion animations.",
                "Implemented real-time APIs, authentication, and granular role-based access control.",
                "Led a 3-person engineering team through Agile sprints, code reviews, and GitHub workflows.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-[#a1a1aa] text-sm">
                  <span className="text-[#a855f7] mt-0.5">✦</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
