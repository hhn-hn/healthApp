<template>
  <div id="header">
    <van-nav-bar :title="this.$store.state.mainMsgBack ? '' : this.$store.state.navBarTitle"
                 animated
                 fixed
                 :z-index=999
                 class="topBar" />
    <span class="back"
          @click="onClickLeft"
          style="z-index: 999999999999;">{{this.$store.state.mainMsgBack ? '返回' : this.$store.state.path === '/myMsg' ? '返回' : ''}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onClickLeft () {
      switch (this.$store.state.path) {
        case '/myMsg':
          this.$store.state.navBarTitle = '我的'
          this.$router.push({ path: '/my' })
          break
        case '/mainMsg':
          this.$store.state.navBarTitle = '新闻'
          this.$router.push({ path: '/video' })
          break
        case '/videoMsg':
          this.$store.state.navBarTitle = '新闻'
          this.$router.push({ path: '/video' })
          break
        case '/sittingMsg':
          this.$store.state.navBarTitle = '首页'
          this.$router.push({ path: '/index' })
          break
        case '/navMsg':
          this.$router.push({ path: '/my' })
          break
      }
      // 返回上一层
    }
  }
}
</script>

<style scoped>
#header {
  margin-top: 1rem;
}
.topBar {
  height: 130px;
  line-height: 190px;
  color: #fff;
  font-size: 25px;
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
}
.van-nav-bar__title {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
}
.van-nav-bar__text {
  font-size: 30px;
  color: #fff;
}
.back {
  position: fixed;
  top: 80px;
  left: 30px;
  z-index: 999999999999999999999999999999999999;
  color: #fff;
  font-size: 24px;
}
</style>
