<template>
  <div id="child">
    <ul class="videoList">
      <li v-for="(item,index) in list"
          :key="index"
          @click="goMsg(item)">
        <div class="box">
          <h2>{{item.title}}</h2>
          <img :src="item.img"
               alt=""
               class="videoimg">
          <img src="static/listImg/Group.png"
               alt=""
               class="play">
        </div>
        <p>{{item.time}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 0,
          title: "Allen's Continuous Sloshing Progressive Inner Line…",
          img: `static/listImg/video1.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-ijir8a85kz1f4ag4.mp4`
        },
        {
          id: 0,
          title: 'Buchanan is an excellent horse-riding archer in…',
          img: `static/listImg/video3.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-jbpc9w6nxts4248h.mp4`
        },
        {
          id: 0,
          title: "McCoy, flying cap, under Brima's ambush basket…",
          img: `static/listImg/video2.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-jgkvirafpnkxitg9.mp4`
        },
        {
          id: 0,
          title: "Allen's Continuous Sloshing Progressive Inner Line…",
          img: `static/listImg/video1.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-ijir8a85kz1f4ag4.mp4`
        },
        {
          id: 0,
          title: 'Buchanan is an excellent horse-riding archer in…',
          img: `static/listImg/video3.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-jbpc9w6nxts4248h.mp4`
        },
        {
          id: 0,
          title: "McCoy, flying cap, under Brima's ambush basket…",
          img: `static/listImg/video2.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-jgkvirafpnkxitg9.mp4`
        },
        {
          id: 0,
          title: "Allen's Continuous Sloshing Progressive Inner Line…",
          img: `static/listImg/video1.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-ijir8a85kz1f4ag4.mp4`
        },
        {
          id: 0,
          title: 'Buchanan is an excellent horse-riding archer in…',
          img: `static/listImg/video3.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-jbpc9w6nxts4248h.mp4`
        },
        {
          id: 0,
          title: "McCoy, flying cap, under Brima's ambush basket…",
          img: `static/listImg/video2.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-jgkvirafpnkxitg9.mp4`
        },
        {
          id: 0,
          title: "Allen's Continuous Sloshing Progressive Inner Line…",
          img: `static/listImg/video1.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-ijir8a85kz1f4ag4.mp4`
        },
        {
          id: 0,
          title: 'Buchanan is an excellent horse-riding archer in…',
          img: `static/listImg/video3.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-jbpc9w6nxts4248h.mp4`
        },
        {
          id: 0,
          title: "McCoy, flying cap, under Brima's ambush basket…",
          img: `static/listImg/video2.png`,
          time: '2019-08-12 19:47',
          src: `static/mp4/mda-jgkvirafpnkxitg9.mp4`
        }
      ]
    }
  },
  methods: {
    goMsg (item) {
      if (this.$store.state.path === '/videoMsg') {
        this.$store.state.videoMsg = {}
        this.$router.push('/video')
      } else {
        this.$store.state.videoMsg = item
        this.$router.push('/videoMsg')
      }
    }
  }
}
</script>

<style scoped>
.videoList li {
  width: 95%;
  border-bottom: 1px solid #ccc;
  margin: auto;
  padding: 0 0 10px 0;
  /* background-color: red; */
}
.box {
  position: relative;
  width: 100%;
  height: 300px;
}
.box .videoimg {
  width: 100%;
  height: 100%;
}
.play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.box h2 {
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 12px;
  color: #ffffff;
  font-weight: normal;
}
.videoList li p {
  font-size: 14px;
  padding: 10px 0;
  color: #666666;
}
</style>
