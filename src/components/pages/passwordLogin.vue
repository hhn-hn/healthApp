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
    </div>
    <div class="signIn"
         @click="signIn">登录</div>
    <div class="signIn"
         @click="toMsg">验证码登录</div>
    <div class="signIn"
         @click="tozhuce">前往注册</div>

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
      password: ''
    }
  },
  methods: {
    signIn () {
      if (this.password === '') {
        Toast('密码不能为空')
      } else if (this.username === '') {
        Toast('用户名不能为空')
      } else {
        this.$router.push({ path: '/index' })
        this.$store.state.myMsg = true
      }
    },
    toMsg () {
      this.$router.push({ path: '/msgLogin' })
    },
    tozhuce () {
      this.$router.push({ path: '/zhuce' })
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
.signIn {
  width: 80%;
  height: 80px;
  line-height: 80px;
  color: #fff;
  text-align: center;
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
  margin: 50px auto;
  border-radius: 40px;
}
</style>
