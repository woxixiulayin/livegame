<template>
  <div class="fullscreen">
  </div>
  <header>
    <app-nav></app-nav>
  </header>
  <!-- main view -->
  <videorank></videorank>
  <router-view
    transition
    transition-mode="out-in">
  </router-view>
  <app-footer></app-footer>
</template>

<script>
import appNav from './components/Nav.vue'
import videorank from './components/Video-rank'
import appFooter from './components/Footer.vue'

export default {
  components: {
    appNav,
    videorank,
    appFooter
  }
}
</script>

<style lang='scss'>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(./assets/img/fullscreen_bg.png);
  z-index: -1;
}
</style>
