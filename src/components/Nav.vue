<template>
  <nav>
  
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
$itemwidth: 5rem;
$bgcol: rgb(52, 73, 94);
$height: 3rem;
$fontsize: 1.25rem;
$btnactcol: rgb(26, 188, 156);
$btnhovercol: rgb(47, 226, 191);


</style>