<template>
  <nav @click="click">
  <div class="container nav-main">
  <div class='content-wrap'>
    <ul>
      <li v-for='item in allGameSites' track-by="$index">
        <a
        :game = 'item.game'
        :index = $index
        :class="['nav-item',allGameSites[$index].game==game? 'active': '']"
        href="#">
        {{ item.game }}
        </a>
      </li>
    </ul>
    </div>
  </div>
  <div class="container nav-sub">
    <div class='content-wrap'>
    <ul>
      <li v-for='site in sites'>
        <a
        :site = 'site' 
        :class="['nav-item', gameSiteChected[game]==site? 'active': '']" href="#">
        {{ site }}
        </a>
      </li>
    </ul>
  </div>
  </div>
  </nav>
</template>

<script>
import info from '../infocenter'
import update from '../update'

export default {
  data () {
    return {
      allGameSites: info.allGameSites,
      game: info.allGameSites[0].game,
      siteChecked: String,
      gameSiteChected: {}
    }
  },
  computed: {
    cached: false,
    sites: function () {
      return this.allGameSites.filter(item => item.game === this.game)[0].sites || []
    }
  },

  created () {
    this.initGameSiteChected()
  },

  methods: {
    click: function (e) {
      let ele = e.target
      if (ele.tagName !== 'A') return false

      //  点击游戏种类触发
      if (ele.hasAttribute('game')) {
        this.changeGame(ele.getAttribute('game'))
      } else if (ele.hasAttribute('site')) {  //  点击网址触发
        this.changeSite(ele.getAttribute('site'))
      }
    },
    changeGame (game) {
      this.game = game
      this.refreshGame()
    },
    changeSite (site) {
      this.gameSiteChected = this.changeGameSiteChected(this.game, site)
      this.refreshGameSite(this.game, this.site)
    },
    refreshGame () {
      this.refreshGameRank(this.game)
      this.refreshGameSite(this.game, this.gameSiteChected[this.game])
    },
    // 排行榜更新事件
    refreshGameRank (game) {
      //  触发获取当前游戏全网直播排行事件
      update.emit(`${game}-rank`)
    },
    // 直播内容更新事件
    refreshGameSite (game, site) {
      // 触发获得当前游戏下具体网站的直播信息事件
      update.emit(`${game}-${site}`)
    },
    initGameSiteChected () {
      info.allGameSites.map(item => {
        this.changeGameSiteChected(item.game, item.sites[0])
      })
    },
    changeGameSiteChected (game, site) {
      this.gameSiteChected[game] = site
      return Object.assign({}, this.gameSiteChected)
    }
  }
}
</script>

<style lang='scss'>
@import '../assets/css/main.scss';

$height: 2.8rem;
$nav-fontsize-base: 1.3rem;

$sub-size-fix: 0.8;

$color-bg-main: #000;
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
  color: $color-bg-active;
}
</style>