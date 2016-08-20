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
