<template>
  <div id="child">
    <div class="top">
      <h2 class="title">{{item.title}}</h2>
      <p>2019年8月24日 星期六 来源: {{item.name}}</p>
    </div>
    <div class="main">
      <img :src="item.img"
           alt="">
      <p>{{item.msg ? item.msg : ''}}</p>
      <p>{{item.msg1 ? item.msg1 : ''}}</p>
      <img :src="item.img1"
           alt="">
      <p>{{item.msg2 ? item.msg2 : ''}}</p>
      <p>{{item.msg3 ? item.msg3 : ''}}</p>
      <img :src="item.img2"
           alt="">
      <p>{{item.msg4 ? item.msg4 : ''}}</p>
      <p>{{item.msg5 ? item.msg5 : ''}}</p>
      <p>{{item.msg6 ? item.msg6 : ''}}</p>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: this.$store.state.mainMsg
    }
  },
  methods: {

  }
}
</script>

<style scoped>
#child {
  padding: 40px 20px 0 20px;
}
.top {
  padding-bottom: 25px;
  border-bottom: 1px solid #ccc;
}
.title {
  font-weight: 700;
  font-size: 30px;
}
.top p {
  margin-top: 15px;
  font-size: 10px;
}
.main p {
  text-indent: 2em;
  margin-bottom: 15px;
  font-size: 25px;
}
.main img {
  width: 100%;
}
</style>
