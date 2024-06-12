<template>
  <div class="main-container">
    <div class="change-lang">
      <ChangeLangButton></ChangeLangButton>
    </div>
    <div id="hero" class="hero">
      <div class="canvas">
        <canvas class="connecting-dots"></canvas>
      </div>
      <div class="heading">
        <div class="heading__line-1">Hello, I'm <span>Kobi</span>.</div>
        <div class="heading__line-2">I'm a full stack web developer.</div>
        <div class="heading-cta">
          <LearnMoreButton/>
        </div>
      </div>
    </div>


    <div class="main-bg">
      <div class="canvas">
        <canvas class="canvas-2"></canvas>
      </div>
    </div>
  </div>

</template>

<script>
import LearnMoreButton from '@/components/LearnMoreButton';
import ChangeLangButton from '@/components/ChangeLangButton';

export default {
  name: "ConnectingDots",
  components: { LearnMoreButton,ChangeLangButton },
  data: () => ({
    draw: null
  }),


  methods: {
    canvasDotsBg() {
      const canvas = document.querySelector('.canvas-2'),
          ctx = canvas.getContext('2d'),
          colorDot = [
            'rgb(9, 241, 241)',
            'rgb(9, 241, 241)',
            'rgb(127,231,7)',
            'rgb(255, 77, 90)',
          ], // 75% of dots are blue. 25% pink
          color = 'rgb(9, 241, 241)';

      // ctx.globalAlpha = 0.8;
      canvas.width = document.body.scrollWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = 'block';
      ctx.fillStyle = colorDot;
      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = color;

      let mousePosition = {
        x: (30 * canvas.width) / 100,
        y: (30 * canvas.height) / 100,
      };

      const windowSize = window.innerWidth;
      let dots;

      if (windowSize > 1600) {
        dots = {
          nb: 300,
          distance: 0,
          d_radius: 0,
          array: [],
        };
      } else if (windowSize > 1300) {
        dots = {
          nb: 250,
          distance: 0,
          d_radius: 0,
          array: [],
        };
      } else if (windowSize > 1100) {
        dots = {
          nb: 50,
          distance: 0,
          d_radius: 0,
          array: [],
        };
        ctx.globalAlpha = 0;

      } else if (windowSize > 800) {
        dots = {
          nb: 25,
          distance: 0,
          d_radius: 0,
          array: [],
        };
        ctx.globalAlpha = 0;
      } else if (windowSize > 800) {
        dots = {
          nb: 300,
          distance: 0,
          d_radius: 0,
          array: [],
        };
        ctx.globalAlpha = 0;
      } else {
        dots = {
          nb: 1,
          distance: 0,
          d_radius: 0,
          array: [],
        };

        ctx.globalAlpha = 0;
      }

      // decided to turn off connecting dots under 1100px


      function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();

        this.radius = Math.random() * 1.5;

        // this.colour = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
      }

      Dot.prototype = {
        create: function () {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          // ctx.fillStyle = this.colour;

          // meed to acount for scroll height since the bg is static and uses mouse position
          const top =
              (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);

          // make the dot colour fade out the further they are from the mouse

          const dotDistance =
              ((this.x - mousePosition.x) ** 2 +
                  (this.y - mousePosition.y + top) ** 2) **
              0.5;
          const distanceRatio = dotDistance / (windowSize / 2);

          // this chops the bracket off the rgb colour and ads an opacity
          ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
          // ctx.fillStyle = this.colour;

          ctx.fill();
        },

        animate: function () {
          // dont animate the first dot, it will follow mouse
          for (let i = 1; i < dots.nb; i++) {
            const dot = dots.array[i];

            if (dot.y < 0 || dot.y > canvas.height) {
              dot.vx = dot.vx;
              dot.vy = -dot.vy;
            } else if (dot.x < 0 || dot.x > canvas.width) {
              dot.vx = -dot.vx;
              dot.vy = dot.vy;
            }
            dot.x += dot.vx;
            dot.y += dot.vy;
          }
        },

        line: function () {
          for (let i = 0; i < dots.nb; i++) {
            for (let j = 0; j < dots.nb; j++) {
              const i_dot = dots.array[i];
              const j_dot = dots.array[j];

              if (
                  i_dot.x - j_dot.x < dots.distance &&
                  i_dot.y - j_dot.y < dots.distance &&
                  i_dot.x - j_dot.x > -dots.distance &&
                  i_dot.y - j_dot.y > -dots.distance
              ) {
                if (
                    i_dot.x - mousePosition.x < dots.d_radius &&
                    i_dot.y - mousePosition.y < dots.d_radius &&
                    i_dot.x - mousePosition.x > -dots.d_radius &&
                    i_dot.y - mousePosition.y > -dots.d_radius
                ) {
                  ctx.beginPath();
                  ctx.moveTo(i_dot.x, i_dot.y);
                  ctx.lineTo(j_dot.x, j_dot.y);

                  // make the fill colour fade out the further you are from the mouse
                  const dotDistance =
                      ((i_dot.x - mousePosition.x) ** 2 +
                          (i_dot.y - mousePosition.y) ** 2) **
                      0.5;
                  let distanceRatio = dotDistance / dots.d_radius;

                  // make it so it doesnt fade out completely
                  distanceRatio -= 0.3;
                  if (distanceRatio < 0) {
                    distanceRatio = 0;
                  }

                  ctx.strokeStyle = `rgb(9, 241, 241, ${1 - distanceRatio})`;

                  ctx.stroke();
                  ctx.closePath();
                }
              }
            }
          }
        },
      };

      function createDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < dots.nb; i++) {
          dots.array.push(new Dot());
          var dot = dots.array[i];

          dot.create();
        }

        // first dot to be relativley large
        dots.array[0].radius = 1.5;

        // first dot to be blue
        dots.array[0].colour = 'rgb(9, 241, 241)';

        // dot.line();
        dot.animate();
      }

      // window.onmousemove = function (parameter) {
      //   mousePosition.x = parameter.pageX;
      //   mousePosition.y = parameter.pageY;

      //   // sometimes if the mouse is off screen on refresh, it bugs out
      //   try {
      //     // want the first dot to follow the mouse
      //     dots.array[0].x = parameter.pageX;
      //     dots.array[0].y = parameter.pageY;
      //   } catch {
      //     //
      //   }
      // };

      window.onscroll = function (parameter) {
        mousePosition.x = window.innerWidth / 2;
        mousePosition.y = window.innerHeight / 2;

        const top =
            (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
        mousePosition.y += top;
        // console.log(top);

        // console.log(mousePosition.x);
      };

      mousePosition.x = window.innerWidth / 2;
      mousePosition.y = window.innerHeight / 2;

      this.draw = setInterval(createDots, 1000 / 30);
      //
      // window.onresize = function () {
      //   clearInterval(draw);
      //   this.canvasDotsBg();
      //
      //   // console.log('yoza');
      // };
    },
    canvasDots() {
      const canvas = document.querySelector('canvas'),
          ctx = canvas.getContext('2d'),
          colorDot = [
            'rgb(9, 241, 241)',
            'rgb(5,138,80)',
            'rgb(9, 241, 241)',
            'rgb(9, 241, 241)',
            'rgb(255, 77, 90)',
          ], // 80% of dots are blue. 20% pink
          color = 'rgb(9, 241, 241)';

      // ctx.globalAlpha = 0.8;
      canvas.width = document.body.scrollWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = 'block';
      // ctx.fillStyle = colorDot;
      // ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = color;

      let mousePosition = {
        x: (30 * canvas.width) / 100,
        y: (30 * canvas.height) / 100,
      };

      const windowSize = window.innerWidth;
      let dots = {
        nb: 600, // number of particles
        distance: 70, // max distance between particles for them to link
        d_radius: 300, // radius from mouse location that particles will link
        array: [],
      }
      if (windowSize > 1600) {
        dots = {
          nb: 600, // number of particles
          distance: 70, // max distance between particles for them to link
          d_radius: 300, // radius from mouse location that particles will link
          array: [],
        };
      } else if (windowSize > 1300) {
        dots = {
          nb: 575,
          distance: 60,
          d_radius: 280,
          array: [],
        };
      } else if (windowSize > 1100) {
        dots = {
          nb: 500,
          distance: 55,
          d_radius: 250,
          array: [],
        };

      } else {
        dots = {
          nb: 300,
          distance: 60,
          d_radius: 280,
          array: [],
        };
      }

      function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();

        this.radius = Math.random() * 1.5;

        // this.colour = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
      }

      Dot.prototype = {
        create: function () {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          // ctx.fillStyle = this.colour;

          // make the dot colour fade out the further they are from the mouse
          const dotDistance =
              ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2) **
              0.5;
          const distanceRatio = dotDistance / (windowSize / 1.7);

          // this chops the bracket off the rgb colour and ads an opacity
          ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;

          ctx.fill();
        },

        animate: function () {
          // dont animate the first dot, it will follow mouse
          for (let i = 1; i < dots.nb; i++) {
            const dot = dots.array[i];

            if (dot.y < 0 || dot.y > canvas.height) {
              dot.vx = dot.vx;
              dot.vy = -dot.vy;
            } else if (dot.x < 0 || dot.x > canvas.width) {
              dot.vx = -dot.vx;
              dot.vy = dot.vy;
            }
            dot.x += dot.vx;
            dot.y += dot.vy;
          }
        },

        line: function () {
          for (let i = 0; i < dots.nb; i++) {
            for (let j = 0; j < dots.nb; j++) {
              const i_dot = dots.array[i];
              const j_dot = dots.array[j];

              if (
                  i_dot.x - j_dot.x < dots.distance &&
                  i_dot.y - j_dot.y < dots.distance &&
                  i_dot.x - j_dot.x > -dots.distance &&
                  i_dot.y - j_dot.y > -dots.distance
              ) {
                if (
                    i_dot.x - mousePosition.x < dots.d_radius &&
                    i_dot.y - mousePosition.y < dots.d_radius &&
                    i_dot.x - mousePosition.x > -dots.d_radius &&
                    i_dot.y - mousePosition.y > -dots.d_radius
                ) {
                  ctx.beginPath();
                  ctx.moveTo(i_dot.x, i_dot.y);
                  ctx.lineTo(j_dot.x, j_dot.y);

                  // make the fill colour fade out the further you are from the mouse
                  const dotDistance =
                      ((i_dot.x - mousePosition.x) ** 2 +
                          (i_dot.y - mousePosition.y) ** 2) **
                      0.5;
                  let distanceRatio = dotDistance / dots.d_radius;

                  // make it so it doesnt fade out completely
                  distanceRatio -= 0.3;
                  if (distanceRatio < 0) {
                    distanceRatio = 0;
                  }

                  ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distanceRatio})`;

                  ctx.stroke();
                  ctx.closePath();
                }
              }
            }
          }
        },
      };

      function createDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < dots.nb; i++) {
          dots.array.push(new Dot());
          var dot = dots.array[i];

          dot.create();
        }

        // first dot to be relativley large
        dots.array[0].radius = 1.5;

        // first dot to be blue
        dots.array[0].colour = 'rgb(9, 241, 241)';

        dot.line();
        dot.animate();
      }

      window.onmousemove = function (parameter) {
        mousePosition.x = parameter.pageX;
        mousePosition.y = parameter.pageY;

        // sometimes if the mouse is off screen on refresh, it bugs out
        try {
          // want the first dot to follow the mouse
          dots.array[0].x = parameter.pageX;
          dots.array[0].y = parameter.pageY;
        } catch {
          //
        }
      };

      mousePosition.x = window.innerWidth / 2;
      mousePosition.y = window.innerHeight / 2;

      this.draw = setInterval(createDots, 1000 / 30);

    },
    myEventHandler(e) {
      clearInterval(this.draw);
      this.canvasDotsBg();

      clearInterval(this.draw);
      this.canvasDots();
    }
  },

  created() {
    window.addEventListener("resize", this.myEventHandler);
  },

  mounted() {
    this.canvasDotsBg()
    this.canvasDots()
  },

  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
}
</script>

<style lang="scss" scoped>
@import '../css/colors.scss';
@import '../css/_base.scss';
@import '../css/animations.scss';

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: $color-background
}
.change-lang {
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
  z-index: 1000;

}
.hero {
  position: relative;
  display: flex;
  height: 100vh;
  width: 100%;
  z-index: 999;
}

.canvas {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 100vh;

  background-color: $color-background;
  overflow: hidden;
}

.connecting-dots {
  height: 100%;
  width: 100%;
}

.heading {
  position: relative;
  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: normal;
  width: fit-content;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  color: $color-text;
  font-weight: 300;

  z-index: 1;

  &__line-1 {
    animation-name: moveInLeft;

    & span {
      color: $color-sea;
      font-weight: 400;
    }
  }

  &__line-2 {
    animation-name: moveInRight;
  }

  &__line-1,
  &__line-2 {
    font-size: 6rem;
    background-color: (rgba($color-background, 0.25));

    animation-duration: 1.4s;
    animation-timing-function: cubic-bezier(0.21, 1.11, 0.81, 0.99);

    @media (max-width: 700px) {
      font-size: 5rem;
      text-align: center;
      margin-left: 4rem;
      margin-right: 4rem;
    }

    @media (max-width: 550px) {
      font-size: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }

  &-cta {
    position: relative;

    display: flex;
    align-items: center;
    margin-top: 2.4rem;


    cursor: pointer;
    animation: moveInBottom 0.7s 1.2s;
    animation-fill-mode: backwards;
    animation-timing-function: cubic-bezier(0.21, 1.11, 0.81, 0.99);

    @media (max-width: 1500px) {
      width: auto;
    }

    @media (max-width: 700px) {
      margin-top: 1.8rem;
    }

    @media (max-width: 550px) {
      padding: 0.8rem 2rem;
    }
  }

  .main-bg {
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;

    background-color: royalblue;

    // z-index: 999;
  }

}

</style>