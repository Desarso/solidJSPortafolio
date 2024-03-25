import About from "../components/About";
import BallsBackground from "../components/BallsBackground";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import SmallerProjects from "../components/SmallerProjects";

type Props = {};

function index({}: Props) {
  return (
    <div
      class=" scroll-smooth bg-[rgba(255,255,255,0)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0 overflow-x-hidden overflow-x-scroll-hidden"
    >
      {/* <BallsBackground /> */}

      <Header />

      <section id="hero" class="snap-start">
        <Hero />
      </section>

      <section id="about" class="snap-center ">
        <About />
      </section>

      {/* Projects */}
      <section id="projects" class="snap-center ">
        <Projects />
      </section>

      {/* Small Projects */}
      <section id="smallProjects" class="snap-start">
        <SmallerProjects />
      </section>

      {/* Contact Me */}
      <section id="contact" class="snap-start">
        <ContactMe />
      </section>

      {/* <section id="experience" class="snap-center">
        <Experience />
      </section> */}
    </div>
  );
}

export default index;
