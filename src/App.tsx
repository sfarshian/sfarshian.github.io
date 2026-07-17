import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import TechnicalArsenal from "./components/TechnicalArsenal";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WorkExperience />
        <TechnicalArsenal />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
