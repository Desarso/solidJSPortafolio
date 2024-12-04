import { ImGithub } from "solid-icons/im";
import { BiRegularEnvelope } from "solid-icons/bi";
import { Motion } from "@motionone/solid";
import Mail from "./icons/Mail";
import { ImTwitter } from "solid-icons/im";
import { BsInstagram } from "solid-icons/bs";
import { ImLinkedin2 } from "solid-icons/im";
import { onMount } from "solid-js";
import ResumeIcon from "./icons/ResumeIcon";
import Resume from "../files/Gabriel_Malek_CV.pdf";
type Props = {};

function Header({}: Props) {
  function goToContact() {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <header
      class="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20
    xl:items-center"
    >
      <Motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        class="flex flex-row items-center justify-center"
      >
        {/* Social Icons */}
        <a href="https://github.com/Desarso" class="social-icon">
          <ImGithub class="icon symbol" size={25} color="gray" />
        </a>

        {/* <a 
            href="https://www.instagram.com/desardo/"
           class="social-icon" 
            >
          <BsInstagram 
            class="icon symbol" 
            size={25} 
            color = "gray"
            />
        </a> */}
        <a
          href="https://www.linkedin.com/in/gabriel-m-aa6534122/"
          class="social-icon"
        >
          <ImLinkedin2 class="icon symbol" size={25} color="gray" />
        </a>

        <a href={Resume}>
          <ResumeIcon className="icon symbol" width={22} fill={"gray"} />
        </a>
      </Motion.div>

      <Motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        class="flex flex-row items-center text-gray-300 cursor-pointer align-middle justify-center"
      >
        <div style="" onClick={() => goToContact()}>
          <a>
            <BiRegularEnvelope class="icon symbol" size={25} color="gray" />
          </a>

          {/* <Mail /> */}
        </div>
        <p
          class="uppercase hidden md:inline-flex text-sm text-gray-400 icon hover:text-gray-50"
          onClick={() => goToContact()}
        >
          Get in Touch
        </p>
      </Motion.div>
    </header>
  );
}

export default Header;
