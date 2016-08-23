<template>
  <div class="container lives-wrap">
    <ul class='lives-list'>
      <li :is='live'></li>
    </ul>
  </div>
</template>

<script>
import live from './Live'

export default {
  components: {
    live
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/css/main.scss';

.lives-wrap {
  float: left;
  /*display: inline;*/
  /*margin-right: $rankwidth;*/
  /*min-width: $livewrap-minwith;*/
  /*width: 800px;*/

  @media (max-width: $screen-sm-min) {
    width: 55%;
  }
  @media (max-width: $screen-xs-min) {
    width: 100%;
  }
  @media (min-width: $screen-sm-min) {
    width: 65%;
  }
}
.lives-list {
  border: 1px solid red;
}
</style>