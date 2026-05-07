import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import resumePdf from "../assets/Jitin kumar chak_27_04_26.pdf";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const M = { div: motion.div, h1: motion.h1, p: motion.p, span: motion.span };

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 md:px-12 pt-20 pb-28 md:pt-28 md:pb-36 dot-grid"
    >
      {/* Ambient blobs */}
      <div className="blob w-[500px] h-[500px] absolute -top-40 -left-40"
        style={{ background: "var(--accent)" }} />
      <div className="blob w-96 h-96 absolute top-16 right-0"
        style={{ background: "#06b6d4", animationDelay: "2s" }} />
      <div className="blob w-72 h-72 absolute bottom-0 left-1/3"
        style={{ background: "#10b981", animationDelay: "4s" }} />

      {/* Oversized decorative text */}
      <span
        className="section-num select-none pointer-events-none"
        style={{ top: "10%", right: "-2%", opacity: 0.06 }}
        aria-hidden="true"
      >
        01
      </span>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* ── Left – copy ── */}
        <div>
          {/* Status badge */}
          <M.div {...up(0)} className="mb-7 inline-flex">
            <span
              className="flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold tracking-wide"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-strong)",
                color: "var(--accent)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for work
            </span>
          </M.div>

          {/* Name */}
          <M.h1
            {...up(0.1)}
            className="font-display leading-none tracking-tight"
            style={{ fontSize: "clamp(3.2rem, 9vw, 6.5rem)", fontWeight: 900 }}
          >
            <span className="block" style={{ color: "var(--text)" }}>Jitin</span>
            <span className="block" style={{ color: "var(--text)" }}>Kumar</span>
            <span className="block gradient-text">Chak</span>
          </M.h1>

          {/* Tagline */}
          <M.p {...up(0.25)} className="mt-6 text-lg max-w-md leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Full-Stack Dev &amp; Founder of{" "}
            <a
              href="https://campusverse.co.in"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline underline-offset-3 decoration-dotted"
              style={{ color: "var(--accent)" }}
            >
              CampusVerse
            </a>
            . I turn caffeine &amp; code into products real people actually use.
          </M.p>

          <M.p
            {...up(0.3)}
            className="mt-3 text-sm font-mono"
            style={{ color: "var(--text-faint)" }}
            title="Zero AI vibes, all handcrafted. 🤌"
          >
            Clean code. Fast ships. No BS.*
          </M.p>

          {/* CTAs */}
          <M.div {...up(0.4)} className="mt-10 flex flex-wrap gap-3">
            <a href="#work" id="hero-work-btn" className="btn-primary">
              See my work ✦
            </a>
            <a
              href={resumePdf}
              download
              id="hero-resume-btn"
              className="btn-outline"
              title="It's a great read, I promise"
            >
              Download Résumé
            </a>
          </M.div>

          {/* Social icons */}
          <M.div {...up(0.5)} className="flex gap-3 mt-8">
            {[
              {
                href: "https://www.linkedin.com/in/jitin-kumar-chak-6b0a071ba/",
                icon: <FaLinkedinIn size={15} />,
                label: "LinkedIn",
                id: "hero-linkedin",
              },
              {
                href: "https://github.com/jitinkumarchak",
                icon: <FaGithub size={15} />,
                label: "GitHub",
                id: "hero-github",
              },
            ].map(({ href, icon, label, id }) => (
              <a
                key={id}
                id={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1.5px solid var(--border-strong)",
                  color: "var(--text-muted)",
                  background: "var(--bg-card)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.background = "var(--surface)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "var(--bg-card)";
                }}
              >
                {icon}
              </a>
            ))}
          </M.div>
        </div>

        {/* ── Right – photo ── */}
        <M.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          {/* Decorative ring */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none float-anim"
            style={{ animationDelay: "0s" }}
          >
            <div
              className="rounded-full"
              style={{
                width: "340px",
                height: "340px",
                background: `conic-gradient(from 0deg, var(--accent), #06b6d4, #10b981, var(--accent))`,
                padding: "2px",
                borderRadius: "9999px",
                opacity: 0.35,
                filter: "blur(1px)",
              }}
            />
          </div>

          {/* Rotating text badge */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              viewBox="0 0 300 300"
              className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rotate-badge"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="circle-path"
                  d="M 150,150 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                />
              </defs>
              <text
                style={{
                  fontSize: 12,
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fill: "var(--accent)",
                }}
              >
                <textPath href="#circle-path" spacing="auto">
                  ✦ OPEN TO WORK ✦ HIRE ME ✦ LET&apos;S BUILD ✦ OPEN TO WORK ✦ HIRE ME ✦ LET&apos;S BUILD ✦
                </textPath>
              </text>
            </svg>
          </div>

          {/* Profile photo */}
          <div
            className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden"
            style={{
              border: "3px solid var(--border-strong)",
              boxShadow: "0 24px 80px var(--accent-glow)",
            }}
          >
            <img
              src={profile}
              alt="Jitin Kumar Chak"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              title="👋 Hey there!"
            />
          </div>

          {/* Floating mini card */}
          <M.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-4 -right-4 md:right-0 card px-4 py-3 flex items-center gap-3 z-20 float-anim"
            style={{
              animationDelay: "1.5s",
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
            }}
          >
            <span className="text-2xl">🚀</span>
            <div>
              <p className="text-xs font-bold" style={{ color: "var(--text)" }}>3+ Products</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Shipped &amp; Live</p>
            </div>
          </M.div>

          <M.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="absolute top-4 -left-4 md:left-0 card px-4 py-3 flex items-center gap-3 z-20 float-anim"
            style={{
              animationDelay: "3s",
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
            }}
          >
            <span className="text-2xl">☕</span>
            <div>
              <p className="text-xs font-bold" style={{ color: "var(--text)" }}>Full-Stack</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Dev &amp; Founder</p>
            </div>
          </M.div>
        </M.div>
      </div>
    </section>
  );
}
