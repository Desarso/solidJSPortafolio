import { createTypeWriter, Cursor } from "solidjs-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { createSignal, onMount } from "solid-js";

type Props = {}

function Hero({}: Props) {


    function scrollToElement(id: string){
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
          });
    }

    const typeWriter  = createTypeWriter({
        words: [
            "Hi I'm Gabriel",
            'This is my Portafolio', 
            "<Built with Next.js />"],
            loop: true,
            delaySpeed: 2000
    })
    


  return (
    <div class='h-screen flex flex-col space-y-7 items-center justify-center 
    text-center overflow-hidden'>
    <BackgroundCircles/>
      <img
        class='relative rounded-full h-45 w-40 nx-auto object-cover'
        src="https://avatars.githubusercontent.com/u/10700498?v=4" 
        alt="image not found" />
        <div class='z-20'>
          <h2 
          class='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'
          >
            Softwate Engineer
          </h2>
          <h1 class='text-5xl lg:text-6xl font-semibold scroll-px-10'>
            <span class='mr-3'>{typeWriter().text}</span>
            <Cursor cursorColor='#F7AB0A'/>
          </h1>
        <div class='pt-5'>
            <button class='heroButton' onClick={() => scrollToElement('about')}>About</button>

            {/* <button class='heroButton' onClick={() => scrollToElement('experience')}>Experience</button>

            <button class='heroButton' onClick={() => scrollToElement('skills')}>Skills</button> */}

            <button class='heroButton' onClick={() => scrollToElement('projects')}>Projects</button>
        </div>
      </div>
    
  </div>
  )
}

export default Hero