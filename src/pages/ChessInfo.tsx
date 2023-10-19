import Chess from "../components/images/chessBoard.jpg";
type Props = {};

function ChessInfo({}: Props) {
  return (
    <div class="bg-[rgb(36,36,36)] w-full h-[100%] flex items-center justify-center">
      <div class="bg-[rgb(36,36,36)] w-[1000px] h-full">
        <div class="flex flex-col justify-center items-center pt-10">
          <h1 class="h-20 uppercase tracking-[10px] text-gray-500 text-3xl">
            Multiplayer Chess
          </h1>
        </div>
        <div class="w-[400px] bg-[#5100ff00] z-[0] marker:items-center right-0">
          <h1 class="mt-uppercase tracking-[2px] text-gray-300 text-xl">
            Tech Stack
          </h1>
          <ul
            //make bullet points
            class="text-gray-300 text-l mt-5 ml-10 list-disc"
          >
            <li class="ml-5">Solidjs</li>
            <li class="ml-5">Typescript</li>
            <li class="ml-5">Apollo Graphqql</li>
            <li class="ml-5">Nginx</li>
            <li class="ml-5">Docker</li>
          </ul>
          <h1 class="mt-20 uppercase tracking-[2px] text-gray-300 text-xl">
            Details:
          </h1>
          <p class="text-gray-300 text-l mt-5 ml-10 list-disc mr-20">
            Project is running on AWS, on a single EC2 instance, it uses proxy
            passing, to also server the graphql.
            <a>Link to github: </a>
          </p>
          <ul class=""></ul>
        </div>
      </div>
    </div>
  );
}

export default ChessInfo;
