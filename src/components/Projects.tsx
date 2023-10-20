import { Motion } from "@motionone/solid";
import { animate } from "motion";
import { For, createSignal } from "solid-js";
import Chess from "./images/chessBoard.jpg";
import Arrow from "./icons/Arrow";
import { A } from "@solidjs/router";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      title: "Multiplayer Chess",
      description: `
              An online chess multiplayer.`,
      link: "/chess-info",
    },
  ];
  const projectDescriptions = [];
  let elementHolder;
  let [currentId, setCurrentId] = createSignal(0);

  function scrollToElement(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function goToLink(link: string) {
    //retoute to link
  }

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      inView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      class="h-screen relative flex overflow-hidden flex-col
        text-left  max-w-full justify-evenly mx-auto items-center  z-0
        
        "
    >
      <h3 class="absolute ml-3 headerTitle top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Case Studies
      </h3>
      <div
        class="relative w-full flex overflow-x-scroll
        overflow-y-hidden snap-x snap-mandatory z-20 scroll-smooth"
      >
        <For each={projects}>
          {(project, i) => (
            <div
              id={`project-${i() + 1}`}
              class="w-screen flex-shrink-0 snap-center
                        flex flex-col space-y-5 items-center justify-center
                         p-20 md:pd-44 h-screen"
            >
              <A href={project.link}>
                <Motion.img
                  src={Chess}
                  initial={{
                    y: "-20%",
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  inView={{ opacity: 1, y: 0 }}
                  class="w-[50vmin] aspect-square max-h-[50vh] md:max-w-[540px] mb-10   rounded-3xl shadow-2xl mt-[20vh] cursor-pointer"
                />
              </A>
              <div class="space-y-10 px-0 md:px-10 max-width-6xl">
                <h4 class="text-4xl font-semibold text-center">
                  <span class="underline decoration-[#F7AB0A]/50">
                    {i() + 1} of {projects.length}:{" "}
                  </span>
                  {project.title}
                </h4>
                <div class="sm-display-none text-lg items-center relative">
                  {i() != 0 && (
                    // <Link href={`#project-${i}`}>
                    <div
                      class=" hidden sm:block selection:w-[6vh] h-[6vh] absolute arrow left-arrow -left-20"
                      onClick={() => scrollToElement(`project-${i}`)}
                    >
                      <Arrow />
                    </div>
                    // </Link>
                  )}
                  <div class="text-center">{project.description}</div>

                  {i() != projects.length - 1 && (
                    <div
                      class="w-[6vh] h-[inherit] absolute arrow right-arrow
                          -right-20 hidden sm:block
                        "
                      onClick={() => scrollToElement(`project-${i() + 2}`)}
                    >
                      <Arrow />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </For>
      </div>
      <div class="w-full absolute top-[30%] bg-[#4287f5]/10 left-0 h-[50vh] w -skew-y-12"></div>
    </Motion.div>
  );
}

export default Projects;
