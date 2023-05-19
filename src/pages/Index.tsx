import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";


type Props = {}

function index({}: Props) {
  return (
    <div
    class=" scroll-smooth bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0 overflow-x-hidden overflow-x-scroll-hidden"
  >


    <Header />

    <section id="hero" class="">
      <Hero />
    </section>

    <section id="about" class="">
      <About />
    </section>

        {/* Projects */}
    <section id="projects" class="">
      <Projects />
    </section>

    {/* Contact Me */}
    {/* <section id="contact" class="snap-start">
      <ContactMe/>
    </section> */}

    {/* <section id="experience" class="snap-center">
      <Experience />
    </section>

    <section id="skills" class="snap-start">
      <Skills />
    </section> */}


  </div>
  )
}

export default index