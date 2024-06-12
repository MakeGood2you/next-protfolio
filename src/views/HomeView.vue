<template>
  <div class="home-container">
    <ConnectingDots id="top" @scrollTo="scrollToElement"/>
    <NavBar @scrollTo="scrollToElement"></NavBar>
    <About id="AboutMe" ref="AboutMe"></About>
    <Projects id="MyProjects" ref="MyProjects"></Projects>
    <ContactMe id="ContactMe" ref="ContactMe"></ContactMe>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Ref, Vue } from 'vue-property-decorator'
import ConnectingDots from '@/components/ConnectingDots.vue'
import NavBar from '@/components/NavBar.vue'
import About from '@/components/About.vue'
import Projects from '@/components/Project.vue'
import ContactMe from '@/components/ContactMe.vue'
import { ComponentInstance } from 'vue'

@Component({
  components : {
    ConnectingDots,
    NavBar,
    Projects,
    About,
    ContactMe,
  },
})

export default class HomeView extends Vue {
  $refs!: {
    AboutMe: HTMLElement
    Projects: HTMLElement
    ContactMe: HTMLElement
  }

  @Emit('scrollTo')
  scrollToElement(elName: string) {
    elName = elName ? elName : 'AboutMe'
    const el: any = document.getElementById(elName)
    if (el) el.scrollIntoView({ behavior : 'smooth' })
    else return undefined
  }
}
</script>

<style lang="scss" scoped>
@import '../css/colors.scss';

html {
  background-color: $color-background !important;
}

.home-container {
  width: 100%;
  height: 100vh;
}
</style>
