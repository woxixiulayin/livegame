<template>
  <div class='live-wrap'>
  <a class="live-item" href="{{liveinfo.link}}">
    <img src="http://i6.pdim.gs/45/9494107ac529c7cc05d8854389f98f40/w338/h190.jpg" alt="正在获取直播页面"/>
    <label class='sitename'>{{ liveinfo.website }}</label> 
    <div class="panel">
      <div class='title'><span>{{ liveinfo.title }}</span>
      </div>
      <div class='desc'>
        <span class='name'>{{ liveinfo.name }}</span>
        <span class='nums'>{{ liveinfo.nums }}</span>
      </div>
    </div>
  </a>
  </div>
</template>

<script>
let fake = {
  'name': '_肖璐',
  'nums': '14071',
  'title': '早上好~',
  'link': 'http: //www.panda.tv/359075',
  'category': 'DOTA2',
  'img': 'http://i6.pdim.gs/45/9494107ac529c7cc05d8854389f98f40/w338/h190.jpg',
  'website': '熊猫'
}

export default {
  data () {
    return {
      liveinfo: fake
    }
  }
  // prob: ['liveinfo']
}
</script>

<style lang='scss' scoped>
@import '../assets/css/main.scss';

$gutter: 6px;
$color-border: rgb(60,60,60);
$color-font: white;
$font-size-base: .9rem;
$color-panel-bg: white;
$span-height: $font-size-base + .5;

.live-wrap {
  padding: $gutter;
  font-size: $font-size-base;
  @media (max-width: $screen-sm-min) {
    width: percentage(1/2);
  }
  @media (min-width: $screen-sm-min) {
    width: percentage(1/3);
  }
  @media (min-width: $screen-md-min) {
    width: percentage(1/4);
  }
}

.live-item {
  display: inline-block;
  position: relative;
  border: .5px solid $color-border;
  color: $color-font;
  font-weight: bold;
  img {
  display: inline-block;
  width: 100%;
  }

  .sitename {
    position: absolute;
    display: block;
    top: 0;
    left: 100%;
    width: 3rem;
    height: 1.2rem;
    line-height: 1.2rem;
    margin-left: -3rem;
    background: rgb(230,133,0);
    text-align: center;
    color: white;

    &:after {
      content: "";
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 1.2rem;
      height: 1.2rem;
      top: 0;
      left: -1.2rem;
      border:.6rem solid rgb(230,133,0);
      border-left-color: transparent;
      border-bottom-color: transparent;
    }

  }
  .panel {
    background: transparent;
    .title {
      padding: 0 .23rem;
      height: $span-height + .16;
      font-size: $font-size-base;
      line-height: $span-height;
      border-bottom: .08rem solid $color-border;
      border-top: .08rem solid $color-border;
    }
    .desc {
      padding: 0 .23rem;
      height: $span-height;
      font-size: $font-size-base - .15;
      line-height: $span-height;
      .name {
        float: left;
        width: 60%;
        padding-left: 1.4rem;
        background: url(../assets/img/avatar.svg) no-repeat left;
        background-size: $span-height*.82;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
      }
      .nums {
        float: right;
        padding-left: 1.4rem;
        background: url(../assets/img/avatars.svg) no-repeat left;
        background-size: $span-height*.8;
      }
    }
  }
}

</style>