<template>
  <nav class='container'>
  <div class='content-wrap'>
    <ul class='nav-main'>
      <li v-for='iterm in categories'
          :class="['nav-item', $index==index? 'active': '']">
        <a>{{ iterm.name }}</a>
      </li>
    </ul>
    <ul class='nav-sub'>
      <li v-for='site in categories[index].sites'
        :class="['nav-item']">
        <a>{{ site }}</a>
      </li>
    </ul>
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

nav.container {
  background-color: $bar-bg-color;
}

.nav-main {
  font-size: 1.1rem;
  font-weight: bold;
  height: $height;
  line-height: $height;
  color: white;
}

.nav-sub {
  font-size: .9rem;
  height: $height * 0.8;
  line-height: $height * 0.8;
}

.nav-item {
  display: inline-block;
  float: left;
  padding: 0 1rem;

}

</style>