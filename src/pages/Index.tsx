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
    <>
      <h3>Under Construction</h3>
      Usual links below
      <div class="flex flex-col">
        <ul class="list-disc pl-5">
          <li>
            <a href="https://gabrielmalek.com/circles/" class="hover:underline">
              Circles
            </a>
          </li>
          <li>
            <a
              href="https://gabrielmalek.com/sorting_visualizer/"
              class="hover:underline"
            >
              Sorting
            </a>
          </li>
          <li>
            <a
              href="https://gabrielmalek.com/towers_of_hanoi/"
              class="hover:underline"
            >
              Towers of Hanoi
            </a>
          </li>
          <li>
            <a
              href="https://desarso.github.io/solidMazeGenerator/"
              class="hover:underline"
            >
              Maze Generator
            </a>
          </li>
        </ul>
      </div>
    </>
    // <div
    //   class=" scroll-smooth bg-[rgba(255,255,255,0)] text-white h-screen snap-y snap-mandatory
    // overflow-scroll z-0 overflow-x-hidden overflow-x-scroll-hidden"
    // >
    //   <BallsBackground />

    //   <Header />

    //   <section id="hero" class="snap-start">
    //     <Hero />
    //   </section>

    //   <section id="about" class="snap-center ">
    //     <About />
    //   </section>

    //   {/* Projects */}
    //   <section id="projects" class="snap-center ">
    //     <Projects />
    //   </section>

    //   {/* Small Projects */}
    //   <section id="smallProjects" class="snap-start">
    //     <SmallerProjects />
    //   </section>

    //   {/* Contact Me */}
    //   <section id="contact" class="snap-start">
    //     <ContactMe />
    //   </section>

    //   {/* <section id="experience" class="snap-center">
    //     <Experience />
    //   </section> */}
    // </div>
  );
}

export default index;
