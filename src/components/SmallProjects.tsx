import { createSignal, onMount } from "solid-js";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function SmallProjects({ title, description, image, link }: Props) {
  return (
    <>
    <div class="w-full absolute top-[30%] z-0 bg-[#4287f5]/5 left-0 h-[50vh] w -skew-y-12"></div>
    <div
      class="smallProject z-10"
      onClick={async () => {
        await sleep(100);
        window.location.href = link;
      }}
    >
      <div class="title">{title}</div>
      {/* <div class="description"> {description}</div> */}
      <a href="#smallProjects">
        <img
          src={`https://ik.imagekit.io/dwjyllmmt/compressed/${image}?tr=w-${150}}`}
          class={`image`}
          alt="image"
        />
      </a>
    </div>
    </>
  );
}

export default SmallProjects;
