import { EventEmitter } from 'events'

const update = new EventEmitter()

export default update

// update.liveCategories.map(item => {
//   //  注册获取全网排行事件
//   update.on(`update-${item.name}-rank`, () => {
//     console.log(`update-${item.name}-rank`)
//   })
//   //  注册获取当前游戏具体网站直播信息
//   item.sites.map(site => {
//     update.on(`update-${item.name}-${site}`, () => {
//       console.log(`update-${item.name}-${site}`)
//     })
//   })
// })
