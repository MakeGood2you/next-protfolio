<template>
<section>
  <nav class="navigation-bar">
    <ul class="navigation">
      <li class="navigation__item navigation__item--active" id="nav-hero"><a href="#hero">Home</a></li>
      <li class="navigation__item" id="nav-about"><a href="#about">About</a></li>
      <li class="navigation__item" id="nav-projects"><a href="#projects">Projects</a></li>
      <li class="navigation__item" id="nav-contact"><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</section>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>
@import '../css/colors.scss';

.navigation {
  display: flex;
  margin-right: 10rem;

  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;

  @media (max-width: 1200px) {
    margin-right: 3rem;
  }

  @media (max-width: 700px) {
    margin-right: 0;
  }

  &-bar {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 6rem;
    border-bottom: 1px solid $color-background;
    background-color: rgba($color-background-light, 0.95);
    backdrop-filter: blur(8px);

    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

    z-index: 99999999999;

    @media (max-width: 700px) {
      justify-content: center;
    }
  }

  &__item {
    transition: all 0.2s;
    &:not(:last-child) {
      margin-right: 3rem;
    }

    &--active {
      color: $color-sea;
      // font-weight: 600;
    }
    &:hover {
      color: $color-sea;
      // font-weight: 600;
    }
  }
}

</style>