<template>
  <div class="container lives-wrap">
    <ul class='lives-list'>
      <li class='lives-item'>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</template>

<script>
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
    width: 60%;
  }
}
.lives-list {
  border: 1px solid red;
}
</style>