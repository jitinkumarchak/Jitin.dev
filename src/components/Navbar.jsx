import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#3f3f46] bg-[#09090b]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight"
          aria-label="Jitin home"
        >
          jitin
          <span className="text-[#a855f7]">.</span>
          <span className="text-[#10b981]">dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#a1a1aa]">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#a855f7] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 bg-[#a855f7] hover:bg-[#9333ea] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-purple-500/20"
          title="I don't bite — promise 😄"
        >
          Hire me 🚀
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#a1a1aa] hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#3f3f46] bg-[#18181b] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 bg-[#a855f7] text-white px-5 py-2.5 rounded-full text-sm font-semibold mt-2"
          >
            Hire me 🚀
          </a>
        </div>
      )}
    </header>
  );
}
