import { motion } from "framer-motion";

const MotionDiv = motion.div;
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 md:px-12 py-28 md:py-40 bg-[#18181b]"
    >
      {/* Blobs */}
      <div className="blob w-96 h-96 bg-purple-600 absolute -top-32 left-1/2 -translate-x-1/2" />
      <div className="blob w-64 h-64 bg-cyan-500 absolute bottom-0 -right-16" />

      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Label */}
        <span className="inline-block text-[#a855f7] text-sm font-semibold tracking-widest uppercase mb-6">
          Let&apos;s connect
        </span>

        {/* Heading */}
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          Got a project?{" "}
          <span className="gradient-text">Let&apos;s make it real.</span>
        </h2>

        <p className="mt-6 text-[#a1a1aa] text-lg max-w-xl mx-auto leading-relaxed">
          Open to full-stack &amp; frontend internships and full-time roles. If
          you need someone who can actually ship — not just talk about it — I
          am{" "}
          <span className="text-[#10b981] font-semibold">
            ready to talk. 🟢
          </span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jitinkumarchak@gmail.com"
            className="flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            <HiOutlineMail size={18} />
            Send me a mail
          </a>

          <a
            href="https://www.linkedin.com/in/jitin-kumar-chak"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#3f3f46] hover:border-[#a855f7] text-[#a1a1aa] hover:text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:-translate-y-0.5"
          >
            <FaLinkedinIn size={16} />
            LinkedIn
          </a>

          <a
            href="https://github.com/jitinkumarchak"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-[#3f3f46] hover:border-[#10b981] text-[#a1a1aa] hover:text-[#10b981] px-8 py-4 rounded-full text-base font-semibold transition-all hover:-translate-y-0.5"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        </div>

        {/* Easter egg */}
        <p
          className="mt-12 text-xs text-[#3f3f46] cursor-default select-none"
          title="👀 I see you reading this. Impressive dedication."
        >
          No recruiters were harmed in the making of this portfolio.
        </p>
      </MotionDiv>
    </section>
  );
}
