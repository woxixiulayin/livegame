<template>
  <header>
    <app-nav></app-nav>
  </header>
  <!-- main view -->
  <router-view
    transition
    transition-mode="out-in">
  </router-view>
  <app-footer></app-footer>
</template>

<script>
import appNav from './components/Nav.vue'
import appFooter from './components/Footer.vue'

export default {
  components: {
    appNav,
    appFooter
  }
}
</script>

<style lang='scss'>

</style>
