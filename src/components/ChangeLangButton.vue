<template>
  <div class="container">
    <div class="box-1">
      <div class="btn btn-one">
        <span>HE</span>
      </div>
      <div class="btn btn-one">
        <span>EN</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeLangButton"
}
</script>

<style lang="scss" scoped>
@import '../css/colors.scss';
@import 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300';

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Open Sans Condensed', sans-serif;
  background-color: $color-background !important

}

div[class*=box] {
  height: 33.33%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.box-1 {
  background-color: $color-background;
}


.btn {
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 50px;
  cursor: pointer;
}

/*
========================
      BUTTON ONE
========================
*/
.btn-one {
  color: #FFF;
  transition: all 0.3s;
  position: relative;
  background-color: $color-background-light;

}

.btn-one span {
  transition: all 0.3s;
}

.btn-one::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.5);
  transform: scale(0.1, 1);
}

.btn-one:hover span {
  letter-spacing: 2px;
}

.btn-one:hover::before {
  opacity: 1;
  transform: scale(1, 1);
}

.btn-one::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-one:hover::after {
  opacity: 0;
  transform: scale(0.1, 1);
}
</style>