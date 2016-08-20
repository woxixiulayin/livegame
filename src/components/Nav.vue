<template>
  <nav @click="click">
  <div class="container nav-main">
  <div class='content-wrap'>
    <ul>
      <li v-for='iterm in categories' track-by="name">
        <a
        type = 'category'
        :index = $index
        :class="['nav-item',$index==index? 'active': '']"
        href="#">
        {{ iterm.name }}
        </a>
      </li>
    </ul>
    </div>
  </div>
  <div class="container nav-sub">
    <div class='content-wrap'>
    <ul>
      <li v-for='site in categories[index].sites'>
        <a
        type = 'site' 
        class='nav-item' href="#">
        {{ site }}
        </a>
      </li>
    </ul>
  </div>
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
  },

  methods: {
    click: function (e) {
      let ele = e.target
      if (ele.tagName !== 'A') return false
      switch (ele.getAttribute('type')) {
        case 'category': this.changTocategory(ele.getAttribute('index'))
      }
    },

    changTocategory: function (index) {
      this.index = index
    }
  }
}
</script>

<style lang='scss'>
@import '../assets/css/main.scss';

$height: 2.8rem;
$nav-fontsize-base: 1.3rem;

$sub-size-fix: 0.8;

$color-bg-main: #111;
$color-bg-sub: #333;
$color-br: #888;
$color-font-base: #fff;
$color-bg-active: rgb(26,188,156);
$color-font-hover: $color-bg-active;

.nav-item {
  display: inline-block;
  color: $color-font-base;
  @include font-padding;
  &:hover {
      color: $color-bg-active;
  }
  transition: all .5s;
}

.nav-main {
  background: $color-bg-main;
  border-bottom: 1px solid $color-br;
}

.nav-sub {
  background: transparent;
}
.nav-sub .content-wrap {
  background: transparent;
}

.nav-sub ul {
  /*display: inline-block;*/
  background: $color-bg-sub;
  border: 1px solid $color-br;
  border-top: none;
}

.nav-main  li,
.nav-sub li {
  display: inline-block;
}

.nav-main .nav-item {
  font-size: $nav-fontsize-base;
  line-height: $height;
  font-weight: bold;
  
  //边框效果
  border: 1px solid $color-bg-main;
  border-bottom: none;
}

.nav-sub .nav-item {
  font-size: $nav-fontsize-base * $sub-size-fix;
  line-height: $height * $sub-size-fix;
  font-weight: bold;
}

.nav-main .active {
  position: relative;
  color: $color-bg-active;
  background: $color-bg-sub;
  border-color: $color-br;
  /*border-bottom: 1px solid $color-bg-sub;*/
  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    height: 1px;
    width: 100%;
    background: $color-bg-sub;
  };
}

.nav-sub .active {
}
</style>