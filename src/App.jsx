import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Awards from "./components/Awards.jsx";
import Projects from "./components/Projects.jsx";
import Patents from "./components/Patents.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Awards />
        <Projects />
        <Patents />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
