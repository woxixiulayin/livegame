import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import appBody from './components/Body.vue'
import postslist from './components/Postslist.vue'
import post from './components/Post.vue'

//  use vuerouter
Vue.use(VueRouter)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

let router = new VueRouter()

router.map({
  '/': {
    component: appBody,
    subRoutes: {
      '/': {
        component: postslist
      },
      '/posts': {
        component: postslist
      },
      '/posts/:posttitle': {
        component: post
      }
    }
  }
})

// 路由挂载到app-body上
router.start(App, '#app')
