import { Motion } from "@motionone/solid";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <Motion.div
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.1, 0.1, 0.1],
        borderRadius: ["20%","20%","50%","80%","20%",]
    }}
    transition={{
        duration: 2.5
    }}
    class='relative flex justify-center items-center'>
    <div class='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52
        animate-ping'/>
    <div class='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
    <div class='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52'/>
    <div class='absolute rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52
        animate-pulse'/>
    <div class='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/>
</Motion.div>
  )
}

export default BackgroundCircles