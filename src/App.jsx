import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import FounderStory from "./components/FounderStory";
import Contact from "./components/Contact";



export default function App() {
  return (
    <div className="bg-[#f6f6f6] text-black min-h-screen">
      <Navbar />
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <FounderStory />
      <Contact />
    </div>
  );
}
