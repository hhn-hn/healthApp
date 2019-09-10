<template>
  <div id="app">
    <v-header v-show="headerIsShow"
              style="margin-top: 1rem;"></v-header>
    <router-view></router-view>
    <v-footer v-show="footerIsShow"></v-footer>
  </div>
</template>

<script>
import 'vant/lib/icon/local.css'
import header from './components/header'
import footer from './components/footer'
export default {
  components: {
    'v-header': header,
    'v-footer': footer
  },
  name: 'App',
  data () {
    return {
      path: '',
      headerIsShow: true,
      footerIsShow: true
    }
  },
  mounted () {
    this.path = this.$route.path
  },
  watch: {
    $route (to, from) {
      this.path = to.path
      this.$store.state.path = to.path
      if (this.$route.path === '/index' || this.$route.path === '/my' || this.$route.path === '/video' || this.$route.path === '/news' || this.$route.path === '/myMsg') {
        this.$store.state.mainMsgBack = false
      } else {
        this.$store.state.mainMsgBack = true
      }
      if (this.$route.path === '/passwordLogin') {
        this.headerIsShow = false
        this.footerIsShow = false
      } else if (this.$route.path === '/zhuce') {
        this.footerIsShow = false
        this.headerIsShow = false
      } else if (this.$route.path === '/msgLogin') {
        this.headerIsShow = false
        this.footerIsShow = false
      } else if (this.$route.path === '/mainMsg' || this.$route.path === '/videoMsg' || this.$route.path === '/myMsg' || this.$route.path === '/sittingMsg' || this.$route.path === '/navMsg') {
        this.headerIsShow = true
        this.footerIsShow = false
      } else if (this.$route.path === '/news') {
        this.footerIsShow = true
        this.headerIsShow = true
      } else {
        this.footerIsShow = true
        this.headerIsShow = true
      }
    }
  }
}
</script>

<style>
@import "components/fonts/iconfont.css";
#app {
  padding-top: 56px;
  /* margin-top: 1rem; */
}
.van-toast {
  font-size: 1rem;
}
</style>
