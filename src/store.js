import { EventEmitter } from 'events'

const store = new EventEmitter()
const defaultSites = ['所有', '熊猫', '战旗', '斗鱼', '虎牙', '全民']

export default store

store.liveCategories = [
  {
    name: 'DOTA',
    sites: defaultSites
  },
  {
    name: 'LOA',
    sites: defaultSites
  }
]
