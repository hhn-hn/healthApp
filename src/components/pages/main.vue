<template>
  <div id="child">
    <van-tabs v-model="active"
              swipeable
              sticky
              background='#fff'
              line-height='3px'
              @click="abc"
              animated>
      <van-tab v-for="(item,index) in topTar"
               :title="item"
               :key="index"
               class="size">

        <mainList></mainList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import mainList from './mainList'
export default {
  components: { mainList },
  data () {
    return {
      active: 0,
      topTar: [
        '养生',
        '食补食疗',
        '按摩推拿',
        '减肥',
        '抗癌',
        '补肾',
        '心理健康',
        '糖尿病',
        '亚健康',
        '急救知识'
      ]
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

<style scoped lang='less'>
#child {
  padding-bottom: 100px;
  padding-top: 30px;
}
/deep/ .van-tab {
  font-size: 30px !important;
}
/deep/ .van-tabs--line .van-tabs__wrap {
  height: 50px !important;
}
/deep/ .van-sticky {
  position: fixed !important;
  top: 80px !important;
  width: 100%;
  z-index: 999999;
}
</style>
