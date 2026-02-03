import profile from "../assets/profile.png";
import resumePdf from "../assets/Jitin Kumar chak Resume.pdf";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 pt-16 md:pt-24 items-center">
      <div>
        <h1 className="text-center md:text-left text-4xl sm:text-5xl md:text-[4.5rem] leading-tight md:leading-[0.95] font-bold">
          Jitin
          <br />
          Kumar
          <br />
          Chak
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-md">
          Full-Stack and Frontend Developer. Founder of CampusVerse. I build
          real products used by real users.
        </p>

        <p className="mt-4 text-gray-600 text-base max-w-md">
          Open to internships and full-time opportunities.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#work"
            className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-80"
          >
            See My Work ->
          </a>

          <a
            href={resumePdf}
            download
            className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/jitin-kumar-chak-6b0a071ba/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/jitinkumarchak"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="relative mt-16 md:mt-0">
        <img
          src={profile}
          className="w-full max-w-xs md:max-w-md mx-auto grayscale"
          alt="Jitin Kumar Chak"
        />
      </div>
    </motion.section>
  );
}
