import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function FounderStory() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 bg-[#09090b]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            I build because I{" "}
            <span className="gradient-text">actually care.</span>
          </h2>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-[#a1a1aa] text-lg leading-relaxed"
        >
          <p>
            College taught me algorithms. Real projects taught me{" "}
            <em className="not-italic font-semibold text-white">
              everything else
            </em>
            . As a student I watched talented people across campuses struggle to
            find internships, communities, and opportunities — all scattered
            across dead group chats and random platforms.
          </p>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-[#a855f7] pl-6 my-8 text-xl text-white font-medium italic">
            &ldquo;Why complain about the problem when you can just… build the solution?&rdquo;
          </blockquote>

          <p>
            So I built{" "}
            <a
              href="https://campusverse.co.in"
              target="_blank"
              rel="noreferrer"
              className="text-[#a855f7] font-semibold hover:underline"
            >
              CampusVerse
            </a>{" "}
            — designed the UI, built the backend, shipped it, iterated on user
            feedback, and kept going. Not as a side project. As a real product
            for real students.
          </p>

          <p>
            Today I focus on building fast, clean, scalable full-stack products.
            I care about product thinking, engineering quality, and actual
            impact. If you need someone who ships — not just someone who{" "}
            <em className="not-italic font-semibold text-white">talks</em> about
            shipping — let&apos;s talk.
          </p>

          {/* Fun fact row */}
          <div className="mt-10 flex flex-wrap gap-4">
            {[
              { label: "☕ Coffees consumed", value: "∞" },
              { label: "🐛 Bugs squashed", value: "∞ + 1" },
              { label: "🚀 Products shipped", value: "3+" },
              { label: "😅 3 a.m. commits", value: "many" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#18181b] border border-[#3f3f46] rounded-xl px-5 py-4 text-center min-w-[120px]"
              >
                <p className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-[#71717a] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
