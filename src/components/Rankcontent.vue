<template>
  <div class='container rank-wrap'>
    <h3>{{ gamename }}直播排行</h3>
    <ul v-if='ranklist.length != 0'>
      <li v-for='item in ranklist'>
        <a :href='item.link'>
          <span class="name">{{ item. name }}</span>
          <span class="nums">{{ item. nums }}</span>
          <span class="sitename">{{ item. website }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
let fake = {
  'name': '_肖璐是到底打十分巨大涉及电路不是',
  'nums': '14071',
  'title': '早上好~',
  'link': 'http: //www.panda.tv/359075',
  'category': 'DOTA2',
  'img': 'http://i6.pdim.gs/45/9494107ac529c7cc05d8854389f98f40/w338/h190.jpg',
  'website': '熊猫'
}

let fakelist = []
for (let i = 0; i < 15; i++) {
  fakelist.push(fake)
}

console.log(fakelist)

export default {
  data () {
    return {
      gamename: 'DOTA',
      ranklist: fakelist
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/css/main.scss';

$color-rank-font: #ccc;

.rank-wrap{
  float: right;
  /*margin: 0 auto;*/
  border: 1px solid blue;
  color: $color-lightblue;
  /*max-width: $rankwidth;*/
  /*margin: 0 auto;*/

  @media (max-width: $screen-sm-min) {
    width: 45%;
  }

  @media (max-width: $screen-xs-min) {
    width: 100%;
  }

  @media (min-width: $screen-sm-min) {
    width: 35%;
  }
  
  h3 {
    text-align: center;
    font-size: 1.3rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }

  ul {
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    color: $color-rank-font;

    li {
        margin: 0 auto;
      a { 
          display: block;
          width: 250px;
          margin: 0 auto;
          color: $color-rank-font;
          border-bottom: 1px solid #444;
          position: relative;
          overflow: hidden;
        &:hover {
          color:$color-lightblue;
        }
        span {
          float: left;
          line-height: 2.5rem;
          height: 2.5rem;
          font-size: 1.1rem;
          overflow: hidden;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
        }
        .name {
          width: 50%;
        }
        .nums {
          width: 25%;
          text-align: right;
        }
        .sitename {
          text-align: right;
          width: 25%;
        }
      }
    }
  }
}
</style>