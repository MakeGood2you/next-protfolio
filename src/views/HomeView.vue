<template>
  <div>
    <ConnectingDots/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ConnectingDots from '@/components/ConnectingDots.vue'

@Component({
  components : {
    ConnectingDots,
  },
})

export default class HomeView extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
