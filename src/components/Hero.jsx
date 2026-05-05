import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import resumePdf from "../assets/Jitin Kumar chak Resume.pdf";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Ambient blobs */}
      <div
        className="blob w-96 h-96 bg-purple-600 absolute -top-32 -left-32"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="blob w-80 h-80 bg-cyan-500 absolute top-20 right-0"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="blob w-64 h-64 bg-emerald-500 absolute bottom-0 left-1/3"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left – copy */}
        <div>
          {/* Status badge */}
          <MotionDiv {...fadeUp(0)} className="mb-6 inline-flex">
            <span className="flex items-center gap-2 bg-[#18181b] border border-[#3f3f46] text-xs font-semibold text-[#a1a1aa] px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </span>
          </MotionDiv>

          {/* Heading */}
          <MotionH1
            {...fadeUp(0.1)}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tight"
          >
            <span className="block">Jitin</span>
            <span className="block">Kumar</span>
            <span className="block gradient-text">Chak</span>
          </MotionH1>

          {/* Tagline */}
          <MotionP
            {...fadeUp(0.25)}
            className="mt-6 text-[#a1a1aa] text-lg max-w-md leading-relaxed"
          >
            Full-Stack Dev & Founder of{" "}
            <a
              href="https://campusverse.co.in"
              target="_blank"
              rel="noreferrer"
              className="text-[#a855f7] hover:underline font-semibold"
            >
              CampusVerse
            </a>
            . I turn caffeine &amp; code into products real people actually use.
          </MotionP>

          <MotionP
            {...fadeUp(0.3)}
            className="mt-3 text-[#52525b] text-sm"
            title="I'm serious about that asterisk — zero AI vibes, all handcrafted. 🤌"
          >
            Clean code. Fast ships. No BS.*
          </MotionP>

          {/* CTAs */}
          <MotionDiv {...fadeUp(0.4)} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-6 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              See my work ✦
            </a>
            <a
              href={resumePdf}
              download
              className="border border-[#3f3f46] hover:border-[#a855f7] text-[#a1a1aa] hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
              title="It's a great read, I promise"
            >
              Download Résumé
            </a>
          </MotionDiv>

          {/* Social icons */}
          <MotionDiv {...fadeUp(0.5)} className="flex gap-3 mt-8">
            <a
              href="https://www.linkedin.com/in/jitin-kumar-chak-6b0a071ba/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 border border-[#3f3f46] rounded-full flex items-center justify-center text-[#a1a1aa] hover:border-[#a855f7] hover:text-[#a855f7] transition-all"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://github.com/jitinkumarchak"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 border border-[#3f3f46] rounded-full flex items-center justify-center text-[#a1a1aa] hover:border-[#10b981] hover:text-[#10b981] transition-all"
            >
              <FaGithub size={16} />
            </a>
          </MotionDiv>
        </div>

        {/* Right – photo */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Rotating badge ring */}
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
                className="font-display fill-[#a855f7] text-[13px]"
                style={{ fontSize: 13, fontFamily: "Space Grotesk, sans-serif" }}
              >
                <textPath href="#circle-path" spacing="auto">
                  ✦ OPEN TO WORK ✦ HIRE ME ✦ LET&apos;S BUILD ✦ OPEN TO WORK ✦ HIRE ME ✦ LET&apos;S BUILD ✦
                </textPath>
              </text>
            </svg>
          </div>

          {/* Profile image */}
          <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-[#3f3f46] shadow-2xl">
            <img
              src={profile}
              alt="Jitin Kumar Chak"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              title="👋 Hey there!"
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
