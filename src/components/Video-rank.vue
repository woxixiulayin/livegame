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

.fullscreen {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(../assets/img/fullscreen_bg.png);
  z-index: -1;
}

.fullscreen .content-wrap {
  margin: 100px auto 0;
  background: yellow;
  height: auto;
}

</style>
