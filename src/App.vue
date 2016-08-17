<template>
  <header>
    <app-nav></app-nav>
  </header>
  <jumbotron></jumbotron>
  <!-- main view -->
  <router-view
    transition
    transition-mode="out-in">
  </router-view>
  <app-footer></app-footer>
</template>

<script>
import appNav from './components/Nav.vue'
import jumbotron from './components/Jumbotron.vue'
import appBody from './components/Body.vue'
import appFooter from './components/Footer.vue'

export default {
  components: {
    appNav,
    jumbotron,
    appBody,
    appFooter
  }
}
</script>

<style lang='scss'>
$fontsize: 16px;

body
{
  font-size: $fontsize;
  padding-top: 50/14*$fontsize;
}

</style>
