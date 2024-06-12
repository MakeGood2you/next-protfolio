<template>
  <div
      key="AboutMe"
      ref="AboutMe"
      class="about-container"
  >
    <div class="left-container">
      left-container
    </div>
    <div class="right-container">
      right-container
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  z-index: 1 !important;
  margin-top: 4rem
}
.left-container, .right-container {
  width: 100%;
  height: 100vh;
  padding: 1rem;
  //border: 1rem solid #ffffff;
}
.left-container {

}
</style>