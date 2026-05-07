import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const M = { div: motion.div };

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 md:px-12 py-28 md:py-40"
      style={{ background: "var(--bg-alt)" }}
    >
      {/* Blobs */}
      <div
        className="blob w-[500px] h-[500px] absolute -top-40 left-1/2 -translate-x-1/2"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="blob w-72 h-72 absolute bottom-0 -right-16"
        style={{ background: "#06b6d4", animationDelay: "2s" }}
      />

      {/* Decorative number */}
      <span
        className="section-num"
        style={{ top: "2%", right: "-1%", opacity: 0.05 }}
        aria-hidden="true"
      >
        07
      </span>

      <M.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <p className="section-label justify-center">Let&apos;s connect</p>

        <h2
          className="font-display font-black leading-tight tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 7vw, 4.5rem)", color: "var(--text)" }}
        >
          Got a project?{" "}
          <span className="gradient-text">Let&apos;s make it real.</span>
        </h2>

        <p className="mt-6 text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Open to full-stack &amp; frontend internships and full-time roles. If
          you need someone who can actually ship — not just talk about it — I am{" "}
          <span className="font-bold" style={{ color: "#10b981" }}>ready to talk. 🟢</span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:jitinkumarchak@gmail.com"
            id="contact-email-btn"
            className="btn-primary text-base px-8 py-4"
          >
            <HiOutlineMail size={20} />
            Send me a mail
          </a>

          <a
            href="https://www.linkedin.com/in/jitin-kumar-chak"
            target="_blank"
            rel="noreferrer"
            id="contact-linkedin-btn"
            className="btn-outline text-base px-8 py-4"
          >
            <FaLinkedinIn size={17} />
            LinkedIn
          </a>

          <a
            href="https://github.com/jitinkumarchak"
            target="_blank"
            rel="noreferrer"
            id="contact-github-btn"
            className="btn-outline text-base px-8 py-4"
          >
            <FaGithub size={17} />
            GitHub
          </a>
        </div>

        {/* Easter egg */}
        <p
          className="mt-14 text-xs cursor-default select-none"
          style={{ color: "var(--text-faint)" }}
          title="👀 I see you reading this. Impressive dedication."
        >
          No recruiters were harmed in the making of this portfolio.
        </p>
      </M.div>
    </section>
  );
}
