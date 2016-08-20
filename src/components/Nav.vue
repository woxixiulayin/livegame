<template>
  <nav>
  <div class="container nav-main">
  <div class='content-wrap'>
    <ul>
      <li v-for='iterm in categories'
          :class="$index==index? 'active': ''">
        <a class='nav-item' href="#">{{ iterm.name }}</a>
      </li>
    </ul>
    </div>
  </div>
  <div class="container nav-sub">
    <div class='content-wrap'>
    <ul>
      <li v-for='site in categories[index].sites'>
        <a class='nav-item' href="#">{{ site }}</a>
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
  }
}
</script>

<style lang='scss'>
@import '../assets/css/main.scss';

$height: 2.8rem;
$nav-fontsize-base: 1.3rem;
$font-color-base: rgb(220,220,220);
$bg-color-base: rgb(35,38,42);
$main-li-hover: rgb(55,61,65);
$bg-br-color: #ccc;
$sub-size-fix: 0.8;

nav {
  background: $bg-color-base;
}

.nav-item {
  float: left;
}

.nav-main {
  border-bottom: 1px solid lighten($bg-color-base, 20%);
}

.nav-main .nav-item {
  font-size: $nav-fontsize-base;
  line-height: $height;
  font-weight: bold;
  color: $font-color-base;
  @include font-padding;

  &:hover {
    background: $main-li-hover;
  }
}

.nav-sub .nav-item {
  font-size: $nav-fontsize-base * $sub-size-fix;
  line-height: $height * $sub-size-fix;
  font-weight: bold;
  color: $font-color-base;
  @include font-padding;

  &:hover {
    background: $main-li-hover;
  }
}

</style>