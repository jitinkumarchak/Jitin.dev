export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 md:px-12 py-6 gap-6">
      <h1 className="font-bold text-xl">Jitin</h1>

      <div className="flex flex-wrap gap-6 text-sm font-medium justify-center sm:justify-start">
        <a href="#work" className="hover:opacity-60">
          Work
        </a>
        <a href="#experience" className="hover:opacity-60">
          Experience
        </a>
        <a href="#skills" className="hover:opacity-60">
          Skills
        </a>
        <a href="#education" className="hover:opacity-60">
          Education
        </a>
        <a href="#about" className="hover:opacity-60">
          About
        </a>
      </div>

      <a
        href="#contact"
        className="border border-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition self-start sm:self-auto"
      >
        Contact Me
      </a>
    </div>
  );
}
