<template>
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

</style>
