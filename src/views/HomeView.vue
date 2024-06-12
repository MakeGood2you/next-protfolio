<template>
  <div class="home-container">
    <ConnectingDots/>
    <NavBar></NavBar>
    <Project></Project>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ConnectingDots from '@/components/ConnectingDots.vue'
import NavBar from '@/components/NavBar.vue'
import Project from '@/components/Project.vue'

@Component({
  components : {
    ConnectingDots,
    NavBar,
    Project,
  },
})

export default class HomeView extends Vue {

}
</script>

<style lang="scss" scoped>
@import '../css/colors.scss';
html {
  background-color: $color-background !important;
}
.home-container {
  width: 100vw;
  height: 100vh;
}
</style>
