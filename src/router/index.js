import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
import main from '@/components/pages/main'
import sitting from '@/components/pages/sitting'
import my from '@/components/pages/my'
import video from '@/components/pages/video'
import zhuce from '@/components/pages/zhuce'
import passwordLogin from '@/components/pages/passwordLogin'
import msgLogin from '@/components/pages/msgLogin'
import mainList from '@/components/pages/mainList'
import mainMsg from '@/components/pages/mainMsg'
import videoList from '@/components/pages/videoList'
import videoMsg from '@/components/pages/videoMsg'
import myMsg from '@/components/pages/myMsg'
import index from '@/components/pages/index'
import sittingMsg from '@/components/pages/sittingMsg'
import navMsg from '@/components/pages/navMsg'
import news from '@/components/pages/news'

Vue.use(Router)

Vue.use(Router)

// 添加这下面一段代码，就可以解决报错

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/sitting',
      name: 'sitting',
      component: sitting
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/passwordLogin',
      name: 'passwordLogin',
      component: passwordLogin
    },
    {
      path: '/msgLogin',
      name: 'msgLogin',
      component: msgLogin
    },
    {
      path: '/mainList',
      name: 'mainList',
      component: mainList
    },
    {
      path: '/mainMsg',
      name: 'mainMsg',
      component: mainMsg
    },
    {
      path: '/videoList',
      name: 'videoList',
      component: videoList
    },
    {
      path: '/videoMsg',
      name: 'videoMsg',
      component: videoMsg
    },
    {
      path: '/myMsg',
      name: 'myMsg',
      component: myMsg
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/sittingMsg',
      name: 'sittingMsg',
      component: sittingMsg
    },
    {
      path: '/navMsg',
      name: 'navMsg',
      component: navMsg
    },
    {
      path: '/news',
      name: 'news',
      component: news
    }
  ]
})
