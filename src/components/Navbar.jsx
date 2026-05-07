import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#about", label: "About" },
];

export default function Navbar({ dark, onToggle }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full theme-transition"
      style={{
        background: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="font-display font-extrabold text-xl tracking-tight"
          style={{ color: "var(--text)" }}
          aria-label="Jitin home"
        >
          jitin
          <span style={{ color: "var(--accent)" }}>.</span>
          <span
            className="px-1 py-0.5 rounded-md text-white text-base"
            style={{ background: "var(--accent)", marginLeft: 1 }}
          >
            dev
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative group"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
            >
              {label}
              <span
                className="absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--accent)" }}
              />
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={onToggle}
            id="theme-toggle"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--accent)",
            }}
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            id="navbar-hire-btn"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Hire me 🚀
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden px-6 py-5 flex flex-col gap-4"
          style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--border)" }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold transition-colors"
              style={{ color: "var(--text-muted)" }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary justify-center mt-1"
          >
            Hire me 🚀
          </a>
        </div>
      )}
    </header>
  );
}
