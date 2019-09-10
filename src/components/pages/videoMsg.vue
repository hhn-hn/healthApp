<template>
  <div id="child">
    <div class="top">
      <h2 class="title">{{item.title}}</h2>
      <p>{{item.time}} 星期六</p>
    </div>
    <div class="main">
      <video :src="item.src"
             controls="controls"
             autoplay="autoplay"
             class="video-js">
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <div class="bottomNav">
      <p class="like">精彩评论</p>
      <ul>
        <li v-for="(item,index) in list"
            :key="index">
          <h2>{{item.name}} :</h2>
          <p>{{item.msg}}</p>
          <div>
            <span>{{item.time}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import videoList from './videoList'
export default {
  components: { videoList },
  data () {
    return {
      item: this.$store.state.videoMsg,
      list: [
        {
          name: 'fsrookie',
          msg: '写的超级详细，点赞。',
          time: '2018年11月21日'
        },
        {
          name: '小生不才_',
          msg: '写的超级详细，点赞。',
          time: '2018年06月24日'
        },
        {
          name: 'SamPig ',
          msg: '这是从创建到销毁',
          time: '2018年06月25日'
        },
        {
          name: '小生不才_',
          msg: '写的超级详细，点赞。',
          time: '2018年06月24日'
        },
        {
          name: 'SamPig ',
          msg: '这是从创建到销毁',
          time: '2018年06月25日'
        },
        {
          name: '小生不才_',
          msg: '写的超级详细，点赞。',
          time: '2018年06月24日'
        },
        {
          name: 'SamPig ',
          msg: '这是从创建到销毁',
          time: '2018年06月25日'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
#child {
  padding: 40px 20px 100px 20px;
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
.main {
  margin-top: 15px;
}
.video-js {
  width: 100%;
  height: 350px;
  display: block;
  margin: auto;
}
.bottomNav {
  width: 100%;
  height: 50px;
}
.bottomNav .like {
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  height: 100%;
  line-height: 50px;
  border-bottom: 3px solid red;
  box-sizing: border-box;
  padding: 0 10px;
}
.bottomNav li {
  overflow: hidden;
  padding: 10px 35px;
}
.bottomNav li h2 {
  font-size: 30px;
}
.bottomNav li p {
  padding-left: 50px;
  font-size: 15px;
  color: #666;
}
.bottomNav li div {
  float: right;
  font-size: 15px;
}
</style>
