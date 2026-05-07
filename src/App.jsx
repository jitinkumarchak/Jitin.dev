import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import FounderStory from "./components/FounderStory";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);

  /* Persist preference */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  /* Custom cursor */
  useEffect(() => {
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    document.body.appendChild(dot);
    const move = (e) => {
      dot.style.left = e.clientX - 4 + "px";
      dot.style.top = e.clientY - 4 + "px";
    };
    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); dot.remove(); };
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} dark={dark} />}

      <div
        className="min-h-screen theme-transition"
        style={{ background: "var(--bg)", color: "var(--text)" }}
        aria-hidden={loading ? "true" : undefined}
      >
        <Navbar dark={dark} onToggle={() => setDark((d) => !d)} />
        <Hero />
        <Marquee />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <FounderStory />
        <Contact />
      </div>
    </>
  );
}
