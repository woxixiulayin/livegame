<template>
  <nav class='container'>
  <div class='content-wrap'>
    <ul class='n'>
      <li v-for='iterm in categories'>
        {{ iterm.name }}
      </li>
    </ul>
  </div>
  </nav>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      categories: store.liveCategories,
      index: 0
    }
  }
}
</script>

<style lang='scss'>
@import '../assets/css/main.scss';

.nav-bar {
  /*width: $content-width;*/
  margin: 0 auto;
}

</style>