<template>
  <div class='container rank-wrap'>
    rankcontent
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang='scss' scoped>
@import '../assets/css/main.scss';

.rank-wrap{
  float: right;
  /*margin: 0 auto;*/
  border: 1px solid blue;
  /*max-width: $rankwidth;*/
  /*margin: 0 auto;*/

  @media (max-width: $screen-sm-min) {
    width: 45%;
  }

  @media (max-width: $screen-xs-min) {
    width: 100%;
  }

  @media (min-width: $screen-sm-min) {
    width: 40%;
  }

}
</style>