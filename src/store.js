import { EventEmitter } from 'events'

const store = new EventEmitter()
const defaultSites = ['熊猫', '战旗', '斗鱼', '虎牙', '全民']

export default store

store.liveCategories = [
  {
    name: 'DOTA',
    sites: defaultSites
  },
  {
    name: 'LOL',
    sites: defaultSites
  }
]

store.liveCategories.map(item => {
  //  注册获取全网排行事件
  store.on(`update-${item.name}-rank`, () => {
    console.log(`update-${item.name}-rank`)
  })
  //  注册获取当前游戏具体网站直播信息
  item.sites.map(site => {
    store.on(`update-${item.name}-${site}`, () => {
      console.log(`update-${item.name}-${site}`)
    })
  })
})
