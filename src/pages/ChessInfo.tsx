import Chess from "../components/images/chessBoard.jpg";
type Props = {};

function ChessInfo({}: Props) {
  return (
    <div class="bg-[rgb(36,36,36)] w-full h-full">
      <div class="flex flex-col justify-center items-center pt-10">
        <h1 class="h-20 uppercase tracking-[10px] text-gray-500 text-3xl">
          Multiplayer Chess
        </h1>
      </div>

      <div class="bg-[rgba(90,75,75,0)] h-1/2 w-full flex">
        <div class="w-1/2   bg-[#99545400] z-[0] flex items-center justify-center">
          <a href="https://gabrielmalek.com/chess/">
            <img src={Chess} class="w-[40vmin] rounded-xl chessLink" />
          </a>
        </div>
        <div class="w-1/2 bg-[#5100ff00] z-[0] marker:items-center right-0">
          <h1 class="mt-uppercase tracking-[2px] text-gray-300 text-xl mt-10">
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
            Project is running on AWS, on a single EC2 instance, nginx runs on
            the raw EC2 instance while the graphql server is deployed using
            docker.
          </p>
        </div>
      </div>

      {/*footer*/}
      <div class="ml-10">
        <h1 class="mt-20 uppercase tracking-[2px] text-gray-300 text-xl">
          In-Depth:
        </h1>
        <p class="text-gray-300 text-l mt-4 ml-10 list-disc mr-20">
          I decided to do this project a while ago. I originally was writting my
          own chess engine AI in C++, and eventually decided I would need an UI
          for people to be able to play against it. After writting all the chess
          logic, and spending some time messing out with creating the chess UI,
          I decided a better project would be to create my own little version of
          chess.com. In order to complete this project I was forced to learn a
          very long list of technologies, so even though the project seems
          simple, it was incredibly constructive. The portal is open to anyone,
          you can go online right now. I will be adding an AI, as well, as a
          free play to mess around with the board.
        </p>
      </div>
    </div>
  );
}

export default ChessInfo;
