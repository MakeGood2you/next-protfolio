<template>
  <div class="temp-container">
<!--    <div v-if="sticky" class="temp-container"></div>-->
    <div
        key="NavBar"
        ref="NavBar"
        :class="{ sticky: isSticky }"
        @scroll="handleScroll('AboutMe')">
      <nav class="navigation-bar">
        <button class="pulse" @click="scrollToElement('AboutMe')">About Me</button>
        <button class="pulse" @click="scrollToElement('MyProjects')">My Projects</button>
        <button class="pulse" @click="scrollToElement('ContactMe')">Contact Me</button>
      </nav>
    </div>
  </div>
</template>

<script>
// import { globalMixin } from '../mixins/global'

export default {
  name: "NavBar",
  props: {},

  data: () => ({
    isSticky: false,
    sticky: 812
  }),
  methods: {
    scrollToElement(el) {
      if (el) {
        this.$emit('scrollTo', el)
      }
    },
    handleScroll() {
      const tempSticky = this.$refs.NavBar.offsetTop

      this.sticky = tempSticky !== 0 ? this.sticky = tempSticky : this.sticky

      window.pageYOffset >= this.sticky
          ? this.isSticky = true
          : this.isSticky = false
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped>
@import '../css/colors.scss';
@import '../css/animations.scss';

.navigation-bar {
  padding: 2rem;
}

.temp-container {
height: 132px;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 4 !important;
  overflow: hidden;


}

.sticky + .content {
  //padding-top: 60px;
}

.pulse:hover,
.pulse:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em transparent;
}

.pulse:hover,
.pulse:focus {
  animation: pulse 1s;
  box-shadow: 0 0 0 2em transparent;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--hover);
  }
}

.pulse {
  --color: #{$color-sea};
  --hover: #{adjust-hue($color-sea, 10deg)};
}

// Now every button will have different colors as set above. We get to use the same structure, only changing the custom properties.
button {
  color: var(--color);
  transition: 0.25s;

  &:hover,
  &:focus {
    border-color: var(--hover);
    color: $color-sea;
  }
}

button {
  cursor: pointer;
  background: none;
  border: 2px solid;
  border-radius: 20px;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  color: white;
}

h1 {
  font-weight: 400;
}

</style>