<template>
  <div class="fullscreen">
  </div>
  <header>
    <app-nav></app-nav>
  </header>
  <!-- main view -->
  <livesandrank></livesandrank>
  <router-view
    transition
    transition-mode="out-in">
  </router-view>
  <app-footer></app-footer>
</template>

<script>
import appNav from './components/Nav.vue'
import livesandrank from './components/Livesandrank'
import appFooter from './components/Footer.vue'

export default {
  components: {
    appNav,
    livesandrank,
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
