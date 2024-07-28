import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import Hero2 from "./phone-view/Hero";
import Skills2 from "./phone-view/Skills";
import Experience2 from "./phone-view/Experience";
import About2 from "./phone-view/About";
import Project2 from "./phone-view/Project";
import Contact2 from "./phone-view/Contact";
import Footer2 from "./phone-view/Footer";


const App = () => (
  <main id="home" className="w-full">
    <div className="max-lg:hidden">
      <Nav></Nav>
      <section className="px-20 py-16 mt-7">
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
    <div className="hidden max-lg:block">
    {/* <div className="hidden max-lg:block h-screen w-screen sora-800 text-4xl"> */}
      {/* <h1 className="flex h-screen w-screen justify-center items-center p-10">Mohon buka dengan laptop ya ges aokwokwok</h1> */}
      <Nav></Nav>
      <section className="px-4 py-10 flex justify-center">
        <Hero2 />
      </section>
      <section id="skills" className="px-4 py-10">
        <Skills2 />
      </section>
      <section id="experience" className="bg-black px-4 py-10">
        <Experience2 />
      </section>
      <section id="about" className="px-4 py-10">
        <About2 />
      </section>
      <section id="project" className="bg-black px-4 py-10">
        <Project2 />
      </section>
      <section id="contact" className="px-4 py-10">
        <Contact2 />
      </section>
      <section className="px-4 py-6 bg-black">
        <Footer2 />
      </section>
    </div>
  </main>
);

export default App;
