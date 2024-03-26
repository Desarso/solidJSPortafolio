import BallsBackground from "../components/BallsBackground";
import Chess from "../components/images/chessBoard.jpg";
type Props = {};

function ChessInfo({}: Props) {
  return (
    <>
      <BallsBackground />
      <div class="mainContainer h-full overflow-auto bg-[rgba(36,36,36,0)]">
        <div
          class="bg-[rgba(36,36,36,0)] w-full  flex items-center justify-center "
          id="chess-info"
        >
          <div class="documentContainer h-[fit-content] ml-[40px] mr-[40px] text-gray-500">
            <div class="titleContainer">
              <h1 class="mainArticleTitle">Multiplayer Chess</h1>
            </div>

            <div class="topSummary regular-font ">
              <div class="summaryContainer">
                <h1 class="headingTitle ">Tech Stack</h1>
                <ul
                  //make bullet points
                  class="bulletPoints indent"
                >
                  <li class="singleBulletPoint">Solidjs</li>
                  <li class="singleBulletPoint">Typescript</li>
                  <li class="singleBulletPoint">Go</li>
                  <li class="singleBulletPoint">Nginx</li>
                </ul>
                <h1 class="headingTitle">Summary:</h1>
                <p class="summary indent">
                  An online multiplayer chess platform that features real-time
                  mouse position tracking.
                </p>
                <h1 class="headingTitle">Links:</h1>
                <ul class="links indent">
                  <li>
                    <a
                      target="_blank"
                      href="https://github.com/Desarso/NarcissusCopper-chessBot"
                      class="hover:text-blue-500"
                    >
                      Link to github 🔗
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://gabrielmalek.com/chess/"
                      class="hover:text-blue-500"
                    >
                      Link to project 🔗
                    </a>
                  </li>
                </ul>
              </div>
              <div class="imageContainer">
                <a href="https://gabrielmalek.com/chess/" class="w-[300px] ">
                  <img src={Chess} class="h-[100%] rounded-xl chessLink" />
                </a>
                {/* <a
                  href="https://gabrielmalek.com/chess/"
                  class="imageDescription"
                >
                  GO TO PAGE 🔗
                </a> */}
              </div>
            </div>

            {/*footer*/}
            <div class="inDepth">
              <h1 class="headingTitle">In-Depth:</h1>
              <p class="paragraph regular-font indent">
                I decided to do this project a while ago. I originally was
                writting my own chess engine AI in C++, and eventually decided I
                would need an UI for people to be able to play against it. After
                writting all the chess logic, and spending some time messing out
                with creating the chess UI, I decided a better project would be
                to create an online multiplayer chess platform.
              </p>
              <h3 class="h3 small-indent">Drag N Drop:</h3>
              <p class="paragraph regular-font large indent text ">
                For this project, I developed a custom drag-and-drop library
                from scratch, utilizing mouse events such as clickdown, move,
                and clickup to handle all its functionality. It achieves this by
                applying a style transform to the targeted element.
              </p>
              <br></br>
              <p class="paragraph regular-font large indent text ">
                While the library's syntax drew heavy inspiration from{" "}
                <span
                  class="hover:text-blue-500 cursor-pointer italic"
                  onClick={() => {
                    window.open("https://solid-dnd.com/");
                  }}
                >
                  Solid DND 🔗
                </span>
                {""}, the implementation was entirely independent, with no
                direct reference to Solid DND. This approach was necessary
                because I required functionality that Solid DND did not offer.
                Specifically, I needed every droppable element to detect when a
                draggable element was initiated for dragging. Later on, this
                custom library proved invaluable when I added features to enable
                my virtual mouse implementation to drag game pieces seamlessly.
              </p>

              <h3 class="h3 small-indent">Virtual Mouse:</h3>
              <p class="paragraph regular-font large indent text ">
                This project enhances interactivity by streaming the opponent's
                mouse movements to the player's screen. It achieves this by
                transmitting a certain number of mouse events per second. These
                events, along with screen and board dimensions, are recorded and
                sent to the server via the WebSockets object handler once a game
                has started. Subsequently, the data is streamed to the opposing
                player.
              </p>
              <br></br>
              <p class="paragraph regular-font large indent text ">
                Upon receiving the mouse coordinates, the client uses them to
                display a virtual mouse. The management of this virtual mouse is
                delegated to a dedicated Virtual Mouse class. This class
                oversees a red circle element, symbolizing the virtual mouse,
                and it triggers virtual mouse events that the drag-and-drop
                library can detect. Consequently, the opponent can seamlessly
                interact with their own game pieces on the player's screen using
                the same drag-and-drop API.
              </p>

              <h3 class="h3 small-indent">Web Sockets:</h3>
              <div class="paragraph regular-font large indent text ">
                Almost all of the apps communication is done thru a single
                websockets connection, the Websocket class mantains the
                connection, and attempts to reconnect when the connections is
                lost, it also does message routing for the app for the different
                functionalities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChessInfo;
