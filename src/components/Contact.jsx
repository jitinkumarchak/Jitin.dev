import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import emailjs from "emailjs-com";

const M = { div: motion.div, p: motion.p };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        console.error("EmailJS credentials not configured:", {
          publicKey: !!publicKey,
          serviceId: !!serviceId,
          templateId: !!templateId,
        });
        setSubmitStatus("error");
        return;
      }

      emailjs.init(publicKey);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "jitinkumarchak@gmail.com",
        time: new Date().toLocaleString(),
      };

      console.log("Sending email with params:", templateParams);
      console.log("Service ID:", serviceId, "Template ID:", templateId);

      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log("EmailJS response:", result);

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error(`Unexpected status: ${result.status}`);
      }
    } catch (error) {
      console.error("EmailJS error details:", error);
      console.error("Error message:", error.message);
      console.error("Error type:", error.type);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          Open to full-stack &amp; backend roles, internships, or interesting projects. If
          you need someone who can ship — not just talk about it — I am{" "}
          <span className="font-bold" style={{ color: "#10b981" }}>ready to talk. 🟢</span>
        </p>

        {/* Contact Form */}
        <M.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-all"
              style={{
                background: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--accent)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border)";
              }}
            />
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-all"
              style={{
                background: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--accent)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border)";
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-all"
              style={{
                background: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--accent)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border)";
              }}
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-all resize-none"
              style={{
                background: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--accent)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border)";
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-3 font-bold transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {submitStatus === "success" && (
            <p className="mt-3 text-sm font-bold" style={{ color: "#10b981" }}>
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-3 text-sm font-bold" style={{ color: "#ef4444" }}>
              ✗ Failed to send. Try emailing me directly below.
            </p>
          )}
        </M.div>

        {/* OR divider */}
        <div className="mt-8 mb-8 flex items-center gap-4">
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>OR</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>

        {/* Social CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
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
