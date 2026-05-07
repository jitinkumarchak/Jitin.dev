import { motion } from "framer-motion";

const M = { div: motion.div };

const stats = [
  { label: "☕ Coffees consumed", value: "∞" },
  { label: "🐛 Bugs squashed", value: "∞+1" },
  { label: "🚀 Products shipped", value: "3+" },
  { label: "😅 3 a.m. commits", value: "many" },
];

export default function FounderStory() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 py-28 md:py-36"
      style={{ background: "var(--bg)" }}
    >
      <span className="section-num" style={{ top: "2%", left: "-1%", opacity: 0.05 }} aria-hidden="true">06</span>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-14">
          <p className="section-label">About</p>
          <h2
            className="font-display font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "var(--text)" }}
          >
            I build because I{" "}
            <span className="gradient-text">actually care.</span>
          </h2>
        </div>

        <M.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="space-y-6 text-lg leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          <p>
            College taught me algorithms. Real projects taught me{" "}
            <em className="not-italic font-bold" style={{ color: "var(--text)" }}>everything else</em>.
            As a student I watched talented people across campuses struggle to find internships,
            communities, and opportunities — all scattered across dead group chats and random platforms.
          </p>

          <blockquote
            className="pl-6 my-8 text-xl font-bold italic"
            style={{ borderLeft: "4px solid var(--accent)", color: "var(--text)" }}
          >
            &ldquo;Why complain about the problem when you can just… build the solution?&rdquo;
          </blockquote>

          <p>
            So I built{" "}
            <a
              href="https://campusverse.co.in"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline underline-offset-3 decoration-dotted"
              style={{ color: "var(--accent)" }}
            >
              CampusVerse
            </a>{" "}
            — designed the UI, built the backend, shipped it, iterated on user feedback, and kept going.
            Not as a side project. As a real product for real students.
          </p>

          <p>
            Today I focus on building fast, clean, scalable full-stack products. I care about product
            thinking, engineering quality, and actual impact. If you need someone who ships — not just
            someone who <em className="not-italic font-bold" style={{ color: "var(--text)" }}>talks</em>{" "}
            about shipping — let&apos;s talk.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card text-center px-4 py-5"
                style={{ background: "var(--bg-card)" }}
              >
                <p className="font-display text-2xl font-black" style={{ color: "var(--accent)" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1.5" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </M.div>
      </div>
    </section>
  );
}
