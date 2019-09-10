import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store({
  state: {
    navBarTitle: '首页',
    mainMsg: {},
    mainMsgBack: '',
    videoMsg: {},
    myMsg: true,
    path: '',
    myMsgId: '',
    sittingId: '',
    navId: ''
  }
})

export default store
