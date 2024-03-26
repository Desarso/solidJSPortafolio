import { onMount } from "solid-js";

type Props = {};

function BallsBackground({ }: Props) {

  let mouseX = 0;
  let mouseY = 0;
  onMount(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const num_balls = 100;
    // const ball_radius = 2;
    let background_color = [255, 255, 255];
    let ball_speed_range = [.5, 4];
    let ball_list = [];

    // document.addEventListener("mousemove", (e) => {
    //   const timestamp = Date.now();
    //   const prevMouseX = mouse.x;
    //   const prevMouseY = mouse.y;
    //   mouseX = e.clientX;
    //   mouseY = e.clientY;
    //   // const timeDiff = timestamp - mouse.prevTimeStamp;
    //   // if(timeDiff > 0){
    //   //   mouse.speed_x = (mouseX - prevMouseX) / timeDiff;
    //   //   mouse.speed_y = (mouseY - prevMouseY) / timeDiff;
    //   // }
    //   // mouse.prevTimeStamp = timestamp;
    //   // mouse.prevX = prevMouseX;
    //   // mouse.prevY = prevMouseY;
    //   console.log(mouse.speed_x, mouse.speed_y);
    // });

    const mouse = {
      x: 0,
      y: 0,
      speed_x: 2,
      speed_y: 2,
      prevX: 0,
      prevY: 0,
      prevTimeStamp: 0,
      radius: 5, // Adjust as needed
    };

    class Ball {
      x = 0;
      y = 0;
      speed_x = 0;
      speed_y = 0;
      radius = 0;
      color = "rgb(0, 0, 0, .2)";

      constructor(x: number, y: number, speed_x: number, speed_y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.speed_x = speed_x;
        this.speed_y = speed_y;
        this.radius = radius;
        this.color =`rgb(0,0,0,${randomFloat(0.01, 0.3)})`
        // this.color = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

      }

      update() {
        this.x += this.speed_x;
        this.y += this.speed_y;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.speed_x *= -1;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.speed_y *= -1;
        }

        this.handleCollisions();
      }



      handleCollisions() {




        for (const ball of ballList) {
          // const dxMouse = mouseX - ball.x;
          // const dyMouse = mouseY - ball.y;
          // const distanceMouse = Math.sqrt(dxMouse ** 2 + dyMouse ** 2);
          // const minDistanceMouse = ball.radius + mouse.radius;


          // //Handle mouse collision
          // if (distanceMouse < minDistanceMouse) {
          //   //calculate overlap and angle
          //   const overlapMouse = minDistanceMouse - distanceMouse;
          //   const angleMouse = Math.atan2(dyMouse, dxMouse);
          //   const mouseSpeedModifer = 0.05;

          //   const speed = Math.sqrt(ball.speed_x ** 2 + ball.speed_y ** 2);
          //   const newSpeedX = speed * Math.cos(angleMouse) + (mouse.speed_x * mouseSpeedModifer);
          //   const newSpeedY = speed * Math.sin(angleMouse) + (mouse.speed_y * mouseSpeedModifer);

          //   ball.speed_x = newSpeedX;
          //   ball.speed_y = newSpeedY;

          //   // Move the ball away from the mouse
          //   ball.x -= overlapMouse * Math.cos(angleMouse);
          //   ball.y -= overlapMouse * Math.sin(angleMouse);
          // }



          if (ball !== this) {
            const dx = ball.x - this.x;
            const dy = ball.y - this.y;
            const distance = Math.sqrt(dx ** 2 + dy ** 2);
            const minDistance = this.radius + ball.radius;

            if (distance < minDistance) {
              const overlap = minDistance - distance;
              const angle = Math.atan2(dy, dx);

              this.x -= 0.5 * overlap * Math.cos(angle);
              this.y -= 0.5 * overlap * Math.sin(angle);
              ball.x += 0.5 * overlap * Math.cos(angle);
              ball.y += 0.5 * overlap * Math.sin(angle);

              const angleCollision = Math.atan2(dy, dx);
              const angleSpeed = Math.atan2(this.speed_y, this.speed_x);

              //calculate masses based on radius
              const massThis = Math.PI * this.radius ** 2;
              const massBall = Math.PI * ball.radius ** 2;

              const speedSelf = Math.sqrt(
                this.speed_x ** 2 + this.speed_y ** 2
              );
              const speedBall = Math.sqrt(
                ball.speed_x ** 2 + ball.speed_y ** 2
              );
              let newSpeedSelfX =
                ((speedSelf * Math.cos(angleSpeed - angleCollision) * (massThis - massBall)) +
                  (2 * massBall * speedBall * Math.cos(angleCollision))) / (massThis + massBall);
              let newSpeedSelfY =
                ((speedSelf * Math.sin(angleSpeed - angleCollision) * (massThis - massBall)) +
                  (2 * massBall * speedBall * Math.sin(angleCollision))) / (massThis + massBall);

              let newSpeedBallX =
                ((speedBall * Math.cos(angleCollision - angleSpeed) * (massBall - massThis)) +
                  (2 * massThis * speedSelf * Math.cos(angleCollision))) / (massThis + massBall);
              let newSpeedBallY =
                ((speedBall * Math.sin(angleCollision - angleSpeed) * (massBall - massThis)) +
                  (2 * massThis * speedSelf * Math.sin(angleCollision))) / (massThis + massBall);

                  //loose a tiny bit of speed
              const speedLoss = 0.99;

              newSpeedSelfX *= speedLoss;
              this.speed_x = newSpeedSelfX;
 
              newSpeedSelfY *= speedLoss;
              this.speed_y = newSpeedSelfY;

              newSpeedBallX *= speedLoss;
              ball.speed_x = newSpeedBallX;

              newSpeedBallY *= speedLoss;
              ball.speed_y = newSpeedBallY;
            }
          }
        }
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }
    const ballList = [];

    for (let i = 0; i < num_balls; i++) {
      let ball_radius = randomInt(2, 10);
      const x = randomInt(ball_radius, canvas.width - ball_radius);
      const y = randomInt(ball_radius, canvas.height - ball_radius);
      const speed_x = randomFloat(...ball_speed_range) * randomSign();
      const speed_y = randomFloat(...ball_speed_range) * randomSign();
      const ball = new Ball(x, y, speed_x, speed_y, ball_radius);
      ballList.push(ball);
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = `rgb(${background_color[0]}, ${background_color[1]}, ${background_color[2]})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const ball of ballList) {
        ball.update();
        ball.draw(ctx);
      }
    }

    animate();

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randomSign() {
      return Math.random() < 0.5 ? -1 : 1;
    }

    // Handle window resize
    window.addEventListener("resize", () => {
      console.log("resize");
      let canvasWidth = window.innerWidth;
      let canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      for (const ball of ballList) {
        ball.x = normalizeValue(ball.x, canvasWidth, ball.radius);
        ball.y = normalizeValue(ball.y, canvasHeight, ball.radius);
      }
    });

    function normalizeValue(value, maxValue, offset) {
      return Math.min(Math.max(value, offset), maxValue - offset);
    }
  });

  return (
    <div class="canvas-container">
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default BallsBackground;
