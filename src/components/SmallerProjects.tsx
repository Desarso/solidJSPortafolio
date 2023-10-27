import { Motion } from "@motionone/solid";
import SmallProjects from "./SmallProjects";
// import Circles from "./images/circles.jpg";
// import Sorting from "./images/sorting.jpg";
// import Towers from "./images/towersOfHanoi.jpg";
// import Maze from "./images/maze.jpg";

type Props = {};

function Skills({}: Props) {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      inView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      class="h-screen flex relative flex-col text-center 
            md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen 
            justify-center
            mx-auto items-center
            "
    >
      <h3 class="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Small Projects
      </h3>
      <h3 class="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm description">
        Fun projects I have made
      </h3>

      <div class='grid grid-cols-2 gap-3 mt-[10vh] md:mt-[10vh] xl"mt-[10vh]'>
        <SmallProjects
          title="Circles"
          description="An image emerges from splitting circles"
          link="https://gabrielmalek.com/circles/"
          image={"circles.jpg"}
        />
        <SmallProjects
          title="Sorting"
          description="An image emerges from splitting circles"
          link="https://gabrielmalek.com/sortingVisualizer/"
          image={"sorting.jpg"}
        />
        <SmallProjects
          title="Tower of Hanoi"
          description="An image emerges from splitting circles"
          link="https://gabrielmalek.com/towersOfHanoi/"
          image={"towersOfHanoi.jpg"}
        />
        <SmallProjects
          title="Maze Generator"
          description="An image emerges from splitting circles"
          link="https://desarso.github.io/solidMazeGenerator/"
          image={"maze.jpg"}
        />
      </div>
    </Motion.div>
  );
}

export default Skills;
