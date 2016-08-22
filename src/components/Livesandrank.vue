<template>
  <div class="container">
  <!-- 排行榜和直播信息 -->
    <div class="content-wrap livesandrank-wrap">
      <lives></lives>
      <rankcontent></rankcontent>
    </div>
  </div>
</template>

<script>
import rankcontent from './Rankcontent'
import lives from './Lives'

export default {
  components: {
    lives,
    rankcontent
  }
}

</script>

<style lang='scss' scoped>
$color-border: #888;

.livesandrank-wrap {
  color: #ccc;
  border: 1px solid $color-border;
  border-top: none;
}
</style>
