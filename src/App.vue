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
/*重置样式*/
body, html, div, blockquote, img, label, p, h1, h2, h3, h4, h5, h6, pre, ul, ol,
li, dl, dt, dd, form, a, fieldset, input, th, td
{margin: 0; padding: 0; border: 0; outline: none;}
h1, h2, h3, h4, h5, h6{font-size: 100%;padding: 0;}
ul, ol{list-style: none;}
a{color: white;text-decoration: none;}
a:hover
{text-decoration: none;}

$fontsize: 16px;

body
{
  font-size: $fontsize;
  font-family: 'Lato', sans-serif;
}

.pure-g > div {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

</style>
