import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => (
  <main id="home" className="w-full">
    <div className="max-lg:hidden">
      <Nav></Nav>
      <section className="px-20 py-16 mt-7 max-sm:px-4 max-sm:py-10 max-sm:mt-0">
        <Hero />
      </section>
      <section id="skills" className="px-20 py-16">
        <Skills />
      </section>
      <section id="experience" className="bg-black px-20 py-16">
        <Experience />
      </section>
      <section id="about" className="px-20 py-16">
        <About />
      </section>
      <section id="project" className="bg-black px-20 py-16">
        <Project />
      </section>
      <section id="contact" className="px-20 py-16">
        <Contact />
      </section>
      <section className="px-20 py-6 bg-black">
        <Footer />
      </section>
    </div>
    <div className="hidden max-lg:block h-screen w-screen sora-800 text-4xl">
      <h1 className="flex h-screen w-screen justify-center items-center p-10">Mohon buka dengan laptop ya ges aokwokwok</h1>
    </div>
  </main>
);

export default App;
