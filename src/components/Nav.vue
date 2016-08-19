<template>
  <nav class='container'>
  <div class='nav-bar'>
    <ul class='nav'>
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

$itemwidth: 5rem;
$bgcol: rgb(52, 73, 94);
$height: 3rem;
$fontsize: 1.25rem;
$btnactcol: rgb(26, 188, 156);
$btnhovercol: rgb(47, 226, 191);


</style>