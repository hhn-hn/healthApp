<template>
  <div>
    <van-tabbar v-model="active"
                active-color='#2f80ed'
                @change="tabBar"
                v-show="!(path ==='/')">
      <van-tabbar-item icon="wap-home"
                       to="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="other-pay"
                       to="/video">新闻</van-tabbar-item>
      <van-tabbar-item icon="chat-o"
                       to="/news">消息</van-tabbar-item>
      <van-tabbar-item icon="contact"
                       to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      path: ''
    }
  },
  methods: {
    tabBar (e) {
      // console.log(e)
      switch (e) {
        case 1:
          this.$store.state.navBarTitle = '新闻'
          break
        case 2:
          this.$store.state.navBarTitle = '消息'
          break
        case 3:
          this.$store.state.navBarTitle = '我的'
          break
        default:
          this.$store.state.navBarTitle = '首页'
          break
      }
    }
  },
  watch: {
    $route (to, from) {
      switch (this.$store.state.path) {
        case '/video':
          this.active = 1
          break
        case '/news':
          this.active = 2
          break
        case '/index':
          this.active = 0
          break
        case '/my':
          this.active = 3
          break
      }
    }
  }
}
</script>

<style scoped>
.van-nav-bar__title {
  color: #fff;
  font-size: 26px;
  font-weight: 700;
}
.van-tabbar {
  height: 100px;
}
.van-tabbar-item {
  font-size: 25px;
}
/deep/ .van-tabbar-item__icon {
  font-size: 1.5625rem !important;
}
</style>
