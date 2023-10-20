import { Motion, Presence } from "@motionone/solid";
import { Show, createSignal, onMount } from "solid-js";
import { inView, animate } from "motion";

type Props = {};

function About({}: Props) {
  const [imageUrl, setImageUrl] = createSignal("");
  const [imageSize, setImageSize] = createSignal(0);

  onMount(() => {
    inView("#about-image", (info) => {
      animate(
        info.target,
        {
          x: [-200, 0],
          opacity: [0, 1],
        },
        { duration: 1.2 }
      );
    }),
      inView("#about-text", (info) => {
        animate(
          info.target,
          {
            opacity: [0, 1],
          },
          { duration: 1.2 }
        );
      });

    let aboutImage = document.querySelector("#about-image");
    let aboutImageSize = aboutImage?.width;
    setImageSize(aboutImageSize);
    setImageUrl(
      `https://ik.imagekit.io/dwjyllmmt/compressed/newAbout.jpg?tr=w-${imageSize()}`
    );
    // add event listener to resize image
    window.addEventListener("resize", async () => {
      await sleep(100);
      let aboutImage = document.querySelector("#about-image");
      let aboutImageSize = aboutImage?.width;
      if (imageSize() < aboutImageSize) {
        setImageSize(aboutImageSize);
        //round image size to nearest 100
        aboutImageSize = Math.round(aboutImageSize / 100) * 100;
        setImageUrl(
          `https://ik.imagekit.io/dwjyllmmt/compressed/newAbout.jpg?tr=w-${aboutImageSize}`
        );
      }
    });
  });

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div
      class="flex flex-col relative h-screen text-center md:text-left 
            md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 class="absolute xl:pl-[70px] top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <img
        id="about-image"
        src={imageUrl()}
        class="about-image -mb-[20vh] mt-[5vh] md:mb-[10vh] flex-shrink-0 w-36 h-36 rounded-full object-cover 
         md:rounded-lg md:w-64 md:h-[40vh] xl:w-[500px] xl:h-[72vh]"
      />

      <div
        id="about-text"
        class="about-title space-y-10 px-0 md:px-10 mt-[5vh]"
      >
        <h4 class="text-4xl font-semibold">A little background</h4>
        <p class="text-base">
          I'm Gabriel Malek, a web developer and Computer Science student at
          CSUS. My coding adventures kicked off with a Chrome extension project
          during my tech repair days. I focus on building high-performance web
          applications and exploring the exciting possibilities of AI in user
          applications.
        </p>
      </div>
    </div>
  );
}

export default About;
