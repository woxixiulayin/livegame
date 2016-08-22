<template>
  <div class="content-warp lives-wrap">
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
  float: right;
  display: inline-block;
  margin-right: $rankwidth;
  min-width: $livewrap-minwith;
}
.lives-list {
  border: 1px solid red;
}
</style>