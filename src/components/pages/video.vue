<template>
  <div id="child">
    <van-tabs swipeable
              sticky
              background='#fff'
              line-height='3px'
              @click="abc">
      <van-tab title="资讯">
        <mainList></mainList>
      </van-tab>
      <van-tab title="视频">
        <videoList></videoList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import videoList from './videoList'
import mainList from './mainList'
export default {
  components: { videoList, mainList },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    abc (e) {
      // console.log(e)
    }
  },
  props: ['products']
}
</script>

<style scoped>
#child {
  padding-bottom: 100px;
  padding-top: 50px;
  /* margin-top: 50px; */
}
/deep/ .van-tab {
  font-size: 30px !important;
}
/deep/ .van-tabs--line .van-tabs__wrap {
  height: 50px !important;
}
/deep/ .van-sticky {
  position: fixed !important;
  top: 130px !important;
  width: 100%;
  z-index: 999999;
}
</style>
