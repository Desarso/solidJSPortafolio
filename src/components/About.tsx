import { Motion, Presence } from "@motionone/solid";
import { Show, createSignal, onMount } from "solid-js";
import aboutImage from "./images/newAbout.jpg";
import { inView, animate } from "motion";

type Props = {};

function About({}: Props) {

    onMount(()=> {
        inView("#about-image", (info)=> {
            animate(info.target, {
                x: [-200, 0],
                opacity: [0,1],
            },
            {duration: 1.2}
            )
        }),
        inView("#about-text", (info)=> {
            animate(info.target, {
                opacity: [0,1],
            },
            {duration: 1.2}
            )
        })
    })


  return (
        <div
          class="flex flex-col relative h-screen text-center md:text-left 
            md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
          <h3 class="absolute xl:pl-[70px] top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
          </h3>

          <img
            id = "about-image"
            src={aboutImage}
            class="about-image -mb-[20vh] mt-[5vh] md:mb-[10vh] flex-shrink-0 w-36 h-36 rounded-full object-cover 
         md:rounded-lg md:w-64 md:h-[40vh] xl:w-[500px] xl:h-[72vh]"
          />

          <div
            id="about-text"
            class="about-title space-y-10 px-0 md:px-10 mt-[5vh]"
          >
            <h4 class="text-4xl font-semibold">
              A little background
            </h4>
            <p class="text-base">
              My name is Gabriel Malek, I&apos;m a self taught web developer,
              long-time tech enthusiast, currently working on my CS bachelors
              degree at CSUS. My love of coding started with a passion project
              working on a chrome extension while working in tech repair. I
              build applications for the web, I like making fast
              performing, applications for the browser, using
              technologies that can scale, I am also interested in leveraging AI technologies for 
              the next generation of user applications.
            </p>
          </div>
        </div>
  );
}

export default About;
