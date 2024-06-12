<template>
  <div>
  <div class="btn-container">
    <button class="">
      <span class="text">Learn More</span>
      <div class="icon-container">
        <div class="icon icon--left">
          <svg>
            <use xlink:href="#arrow-right"></use>
          </svg>
        </div>
        <div class="icon icon--right">
          <svg>
            <use xlink:href="#arrow-right"></use>
          </svg>
        </div>
      </div>
    </button>
  </div>


  <svg style="display: none;">
    <symbol id="arrow-right" viewBox="0 0 20 10">
      <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
    </symbol>
  </svg>

  <div class="support">
    <a href="https://twitter.com/DevLoop01" target="_blank"><i class="fab fa-twitter-square"></i></a>
    <a href="https://dribbble.com/devloop01" target="_blank"><i class="fab fa-dribbble"></i></a>
  </div>
  </div>
</template>

<script>
export default {
  name: "LearnMoreButton",
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../css/colors.scss';
@import '../css/animations.scss';

.btn-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg);
  opacity:0.8;

  &:nth-child(1) {
    --btn-bg: #09F1F1FF;
  }
}

button {
  --width: 240px;
  --height: 60px;
  border: 0;
  position: relative;
  min-width: var(--width);
  min-height: var(--height);
  border-radius: var(--height);
  color: #fff;
  font-family: "Montserrat";
  font-weight: bold;
  background: $color-background-light;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;

  .text,
  .icon-container {
    color: black;
    position: relative;
    z-index: 2;
  }

  .icon-container {
    --icon-size: 25px;
    position: relative;
    width: var(--icon-size);
    height: var(--icon-size);
    margin-left: 15px;
    transition: transform 500ms ease;

    .icon {
      position: absolute;
      left: 0;
      top: 0;
      width: var(--icon-size);
      height: var(--icon-size);
      transition: transform 500ms ease, opacity 250ms ease;

      &--left {
        transform: translateX(-200%);
        opacity: 0;
      }

      svg {
        width: 100%;
        height: 100%;
        fill: #fff;
      }
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--btn-bg);
    border-radius: var(--height);
    z-index: 1;
    transition: transform 500ms ease;
  }

  &:hover {
    &::after {
      transform: translateX(65%);
    }
    .text {
      color: #09F1F1FF;
    }
    .icon-container {
      transform: translateX(125%);
      .icon {
        &--left {
          transform: translateX(0);
          opacity: 1;
        }
        &--right {
          transform: translateX(200%);
          opacity: 0;
        }
      }
    }
  }
}

</style>