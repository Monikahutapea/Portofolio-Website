import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Awards from "./components/Awards";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-white text-navy">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Awards />
      <Contact />
    </div>
  );
}
