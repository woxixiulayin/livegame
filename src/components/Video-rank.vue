<template>
  <div class="container fullscreen">
  <!-- 首页播放最火的直播和直播排行 -->
    <div class="content-wrap">
      <videocontent></videocontent>
      <rankcontent></rankcontent>
    </div>
  </div>
</template>

<script>
import videocontent from './Videocontent'
import rankcontent from './Rankcontent'

export default {
  components: {
    videocontent,
    rankcontent
  }
}

</script>

<style lang='scss' scoped>

</style>
