<template>
  <div>
    <div class="logo">
      <img src="../../assets/imgs/logo.png"
           alt="">
    </div>
    <div class="zhuce">
      <div class="username">
        <img src="../../assets/imgs/username.png"
             alt="">
        <input type="text"
               placeholder="请输入用户名"
               v-model="username">
      </div>
      <div class="username">
        <img src="../../assets/imgs/password.png"
             alt="">
        <input type="password"
               placeholder="请输入密码"
               v-model="password">
      </div>
      <div class="username">
        <img src="../../assets/imgs/username.png"
             alt="">
        <input type="number"
               placeholder="请输入手机号"
               v-model="usertel" />
        <span @click="yanzheng"
              v-show="yanzhengShow">发送验证码</span>
        <span v-show="!yanzhengShow">{{msg}}S</span>
      </div>
      <div class="username">
        <img src="../../assets/imgs/password.png"
             alt="">
        <input type="text"
               placeholder="请输入验证码"
               v-model="userMsg">
      </div>
    </div>
    <div class="signIn"
         @click="signIn">注册</div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data () {
    return {
      msg: 0,
      yanzhengShow: true,
      username: '',
      usertel: '',
      userMsg: '',
      password: ''
    }
  },
  methods: {
    yanzheng () {
      this.yanzhengShow = false
      this.msg = 60
      var timer = setInterval(() => {
        this.msg--
        if (this.msg <= 0) {
          clearInterval(timer)
          this.yanzhengShow = true
        }
      }, 1000)
    },
    signIn () {
      if (this.usertel === '') {
        Toast('电话号码不能为空')
      } else if (this.userMsg === '') {
        Toast('验证码不能为空')
      } else if (this.password === '') {
        Toast('密码不能为空')
      } else if (this.username === '') {
        Toast('用户名不能为空')
      } else {
        this.$router.push({ path: '/my' })
      }
    }
  }
}
</script>

<style scoped>
.logo {
  width: 100%;
  height: 500px;
  text-align: center;
}
.logo img {
  height: 100%;
}
.username {
  position: relative;
  height: 80px;
  border-bottom: 1px solid #2f80ed;
  border-radius: 1px;
  line-height: 80px;
}
.username img {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
}
.username input {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
  height: 100%;
  line-height: 80px;
}
.username span {
  position: absolute;
  right: 5%;
  top: 50%;
  width: 200px;
  height: 50px;
  transform: translateY(-50%);
  line-height: 50px;
  text-align: center;
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
  border-radius: 15px;
  color: #fff;
}
.signIn {
  width: 80%;
  height: 80px;
  line-height: 80px;
  color: #fff;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(47, 128, 237, 1) 0%,
    rgba(86, 204, 242, 1) 100%
  );
  margin: 50px auto;
  border-radius: 40px;
}
</style>
