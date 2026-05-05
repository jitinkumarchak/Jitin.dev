import { useState } from "react";
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

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div
        className="bg-[#09090b] text-[#fafafa] min-h-screen"
        aria-hidden={loading ? "true" : undefined}
      >
        <Navbar />
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
