<template>
  <div>
    <div class="top">
      <div class="myMsg"
           v-show="this.$store.state.myMsg">
        <div class="touxiang">
          <img src="../../assets/imgs/touxiang.png"
               alt=""
               class="big">
          <img src="../../assets/imgs/Group.png"
               alt=""
               class="small">
        </div>
        <div class="userMsg">
          <p class="username">Smile</p>
          <p class="userId">ID:113987491</p>
        </div>
      </div>
      <div class="login"
           v-show="!this.$store.state.myMsg">
        <div class="totst">更多功能,登录后查看</div>
        <div class="log"
             @click="log">登录</div>
        <div class="sign"
             @click="sign">注册</div>
      </div>

    </div>
    <div class="navMsg"
         v-show="this.$store.state.myMsg">
      <div class="month"
           v-if="id === 1">
        包月功能暂未开发，敬请期待！
      </div>
      <div class="list"
           v-else>
        <ul>
          <li @click="money">
            <van-icon name="balance-o"
                      style="margin-top: 3px;" />
            <span class="title">我的零钱</span>
            <span style="float:right;margin-top: 0px;">0</span>
          </li>
          <li @click="bill">
            <van-icon name="bill-o"
                      style="margin-top: 3px;" />
            <span class="title">我的积分</span>
            <span style="float:right;margin-top: 0px;">0</span>
          </li>
          <li @click="coupon">
            <van-icon name="coupon-o"
                      style="margin-top: 3px;" />
            <span class="title">优惠券</span>
            <span style="float:right;margin-top: 0px;">0</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      id: this.$store.state.navId
    }
  },
  methods: {
    log () {
      this.$router.push({ path: '/passwordLogin' })
    },
    sign () {
      this.$router.push({ path: '/zhuce' })
    },
    bill () {
      Toast('您积分为零,请加油积攒哟')
    },
    money () { Toast('您余额为零,请加油积攒哟') },
    coupon () { Toast('您优惠券为零,请加油积攒哟') }
  }
}
</script>

<style scoped>
.top {
  position: relative;
  width: 100%;
  height: 403px;
  background: linear-gradient(135deg, #2f80ed 0%, #56ccf2 100%);
}
.myMsg,
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 278px;
  transform: translateX(-50%) translateY(-40%);
}
.big {
  position: absolute;
  width: 178px;
  height: 178px;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
}
.small {
  position: absolute;
  width: 78px;
  height: 78px;
  top: 60%;
  left: 20%;
  /* transform: translateY(-50%); */
}
.userMsg {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translateY(-50%);
}
.userMsg p {
  color: #fff;
  font-weight: 700;
}
.month {
  text-align: center;
  margin-top: 50px;
}
.list li {
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
  margin-top: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.list li i:first-child {
  color: green;
}
/deep/ .title {
  /* line-height: 100px; */
  /* margin-top: -20px; */
  position: relative;
  top: 50%;
  transform: translateY(-12%);
}
.log,
.sign {
  position: absolute;
  top: 60%;
  width: 100px;
  height: 80px;
  text-align: center;
  line-height: 70px;
  transform: translateY(-50%);
  color: #fff;
  border: 5px solid #fff;
  border-radius: 35px;
  box-sizing: border-box;
}
.log {
  left: 30%;
}
.sign {
  right: 30%;
}
.totst {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 32px;
}
</style>
