<template>
  <nav class="pure-g navbar">
  <ul class="pure-u-4-5 nav">
    <li class='' v-for='item in categories'>
    <a href='#' :class="['pure-button', 'nav-item', $index==index? 'active':'']">
      {{ item.name }} 
      </a>
    </li>
  </ul>
    <ul class="pure-u-4-5 sub-nav">
      <li class=''>
        <a href="#" 
          :class="['pure-button', 'pure-u-1-6','sub-item',$index==index? 'active':'']"
          v-for='site in categories[index].sites'>
          {{ site }}
        </a>
      </li>
    </ul>
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
$itemwidth: 5rem;
$bgcol: rgb(52, 73, 94);
$height: 3rem;
$fontsize: 1.25rem;
$btnactcol: rgb(26, 188, 156);
$btnhovercol: rgb(47, 226, 191);

.navbar { 
  background: $bgcol;
}

.nav {
  margin: 0 auto;
}
.nav li
{
  display: inline-block;
  width: $itemwidth;
}
.pure-button {
  padding: 0;
  vertical-align: middle;
  text-align: center;
  background: transparent;
  transition: all 0.25s;
}
.pure-button:hover {
  background: $btnhovercol;
}

.nav-item
{
  margin: 0;
  height: $height;
  line-height: $height;
  border-radius: none;
  padding: 0 1rem;
  font-size: $fontsize;
  color: white;
}
.nav .active {
  background: $btnactcol;
}

.sub-nav {
  margin: 0 auto;
  background: $btnactcol;
}

.sub-item {
  font-size: 0.8 * $fontsize;
  height: 0.8 * $height;
  text-align: left;
  padding-left: 1rem;
  color: white;
  line-height: 0.8 * $height;
}
</style>