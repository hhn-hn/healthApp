<template>
  <div>
    <h2 class="title">对本软件评价</h2>
    <van-radio-group v-model="radio">
      <van-radio name="1"
                 checked-color="#07c160">非常满意</van-radio>
      <van-radio name="2"
                 checked-color="#07c160">比较满意</van-radio>
      <van-radio name="3"
                 checked-color="#07c160">感觉一般</van-radio>
      <van-radio name="4"
                 checked-color="#07c160">深痛恶觉</van-radio>
    </van-radio-group>
    <van-rate v-model="value"
              size='30' />
    <h2 class="msg">请输入您对我们的期望</h2>
    <textarea cols="30"
              rows="10"
              placeholder="请输入您对我们的期望"></textarea>
    <input type="submit"
           value="提交"
           class="submit">
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      value: 0
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.title {
  text-align: center;
}
.van-radio {
  height: 50px;
  padding-left: 50px;
}
.msg {
  padding-left: 15px;
}
textarea {
  width: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 5px 10px;
}
.submit {
  display: block;
  width: 80%;
  padding: 10px 35px;
  border: 1px solid #f08484;
  background-color: #72f072;
  border-radius: 15px;
  margin: 15px auto;
}
</style>
