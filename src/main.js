// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/rem'
import Vant from 'vant'
import 'vant/lib/index.css'
import './components/fonts/iconfont.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(Vant)
var Less = require('Less')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Less,
  components: { App },
  template: '<App/>'
})
