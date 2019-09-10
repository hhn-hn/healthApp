<template>
  <div id="child">
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
    <van-row class="user-links">
      <van-col span="6"
               v-for="(item,index) in navList"
               :key="index"
               @click="tomy(item.id)">
        <img :src="item.img"
             alt
             style="width:37px;height:31px;">
        <p>{{item.title}}</p>
      </van-col>
    </van-row>
    <div class="list">
      <ul>
        <li v-for="(item, index) in list"
            :key="index"
            @click="listClick(item.id)">
          <van-icon :name="item.icon"
                    style="margin-top: 3px;" />
          <span class="title">{{item.title}}</span>
          <van-icon name="arrow"
                    style="float:right;margin-top: 3px;" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast, Dialog } from 'vant'

export default {
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  data () {
    return {
      list: [
        {
          icon: 'star-o',
          title: '我的收藏',
          id: 0
        },
        {
          icon: 'underway-o',
          title: '浏览历史',
          id: 1
        },
        {
          icon: 'envelop-o',
          title: '消息推送',
          id: 2
        },
        {
          icon: 'good-job-o',
          title: '好评一下',
          id: 3
        },
        {
          icon: 'brush-o',
          title: '清除缓存',
          id: 5
        },
        {
          icon: 'debit-pay',
          title: '头条推送',
          id: 6
        },
        {
          icon: 'share',
          title: '注销',
          id: 4
        }
      ],
      navList: [
        {
          id: 1,
          img: 'static/mp4/month.png',
          title: '包月充值'
        },
        {
          id: 3,
          img: 'static/mp4/bill.png',
          title: '我的钱包'
        },
        {
          id: 4,
          img: 'static/mp4/Coupon.png',
          title: '优惠券'
        },
        {
          id: 6,
          img: 'static/mp4/integral.png',
          title: '我的积分'
        }
      ]
    }
  },
  methods: {
    listClick (id) {
      switch (id) {
        case 0:
          if (!this.$store.state.myMsg) {
            Toast('您暂未登录')
          } else {
            this.$router.push({ path: '/myMsg' })
            this.$store.state.navBarTitle = '我的收藏'
            this.$store.state.myMsgId = 0
          }
          break
        case 1:
          if (!this.$store.state.myMsg) {
            Toast('您暂未登录')
          } else {
            this.$router.push({ path: '/myMsg' })
            this.$store.state.navBarTitle = '浏览历史'
            this.$store.state.myMsgId = 1
          }
          break
        case 2:
          if (!this.$store.state.myMsg) {
            Toast('您暂未登录')
          } else {
            this.$router.push({ path: '/myMsg' })
            this.$store.state.navBarTitle = '消息推送'
            this.$store.state.myMsgId = 2
          }
          break
        case 3:
          if (!this.$store.state.myMsg) {
            Toast('您暂未登录')
          } else {
            this.$router.push({ path: '/myMsg' })
            this.$store.state.navBarTitle = '好评一下'
            this.$store.state.myMsgId = 3
          }
          break
        case 4:
          if (this.$store.state.myMsg) {
            Dialog.confirm({
              message: '您确定要注销吗'
            }).then(() => {
              Toast('您已注销')
              this.$store.state.myMsg = false
            }).catch(() => {
              // on cancel
            })
          } else {
            Toast('您暂未登录')
          }
          break
        case 5:
          Toast('已清除33.33MB')
          break
        case 6:
          if (!this.$store.state.myMsg) {
            Toast('您暂未登录')
          } else {
            this.$router.push({ path: '/myMsg' })
            this.$store.state.navBarTitle = '头条推送'
            this.$store.state.myMsgId = 6
          }
          break
      }
    },
    log () {
      this.$router.push({ path: '/passwordLogin' })
    },
    sign () {
      this.$router.push({ path: '/zhuce' })
    },
    tomy (e) {
      switch (e) {
        case 0:
          Toast('暂未实现，尽情期待')
          // window.location.href = '//uri.amap.com/search?keyword=医院&center=&city=&view=list&src=&coordinate=&callnative=1'
          break

        case 1:
          this.$store.state.navId = 1
          this.$router.push({ path: '/navMsg' })
          break
        case 2:
          Toast('暂未实现，尽情期待')
          // window.location.href = '//uri.amap.com/search?keyword=献血站&center=&city=&view=list&src=&coordinate=&callnative=1'
          break
        case 3:
          this.$store.state.navId = 3
          this.$router.push({ path: '/navMsg' })
          break
        case 4:
          this.$store.state.navId = 4
          this.$router.push({ path: '/navMsg' })
          break
        case 5:
          Toast('暂未实现，尽情期待')
          // window.location.href = '//uri.amap.com/search?keyword=停车场&center=&city=&view=list&src=&coordinate=&callnative=1'
          break
        case 6:
          this.$store.state.navId = 6
          this.$router.push({ path: '/navMsg' })
          break
        case 7:
          Toast('暂未实现，尽情期待')
          // window.location.href = '//uri.amap.com/search?keyword=北京市天安门广场&center=&city=&view=list&src=&coordinate=&callnative=1'
          break
      }
    }
  }
}
</script>

<style scoped lang='less'>
#child {
  padding-bottom: 100px;
}
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
  font-size: 25px;
}
.user-links {
  padding: 15px 0;
  font-size: 28px;
  text-align: center;
  background-color: #fff;
  .van-col {
    height: 100px;
    margin-bottom: 10px;
  }
  .van-icon {
    display: block;
    font-size: 28px;
  }
}
</style>
