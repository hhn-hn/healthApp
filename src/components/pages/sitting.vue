<template>
  <div id="child">
    <!-- <van-row>
      <van-col span="8"
               class="height"
               v-for="(item, index) in gridArr"
               :key="index"
               @click="colClick(item.id)">
        <p class="icon">
          <img :src="item.icon"
               alt="">
        </p>
        <p class="avc">{{item.title}}</p>
      </van-col>
    </van-row> -->
    <ul>
      <li class="list"
          v-for="(item, index) in gridArr"
          :key="index"
          @click="colClick(item.id)">
        <img :src="item.icon"
             alt="">
        <i>{{item.title}}</i>
        <span>{{item.msg}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gridArr: [
        {
          icon: 'static/mp4/sitting0.png',
          title: 'BMI身体指数',
          id: 0,
          msg: 'BMI[Body Mass Index] 即BMI指数，也叫身体质量指数，是衡量是否肥胖和标准体重的重要指标。适用范围：18至65岁的人士。儿童、发育中的青少年、孕妇、乳母、老人及身型健硕的运动员除外。世界卫生组织认为BMI指数保持在22左右是比较理想的。'
        },
        {
          icon: 'static/mp4/sitting1.png',
          title: '体脂率计算器',
          id: 1,
          msg: '下列的计算器是根据你的体重，身高，年龄和简单的卷尺测量数据（比如：人体数据测量）来计算你的体脂率和瘦体重含量。皮肤褶皱测量往往会把肥胖人群和体脂极低人群（尤其是身体水分含量比较低）的体脂率测得偏低。然而下列的方程可适用于肥胖和体脂极低的人群，同时也适用于大量减重后皮肤松弛的人群和那些不使用药物的健美运动员。结果通常是准确的，上下可能浮动2'
        },
        {
          icon: 'static/mp4/sitting2.png',
          title: '肌肉潜力计算',
          id: 2,
          msg: '下列的计算器是根据你的体重，身高，年龄和简单的卷尺测量数据（比如：人体数据测量）来计算你的体脂率和瘦体重含量。皮肤褶皱测量往往会把肥胖人群和体脂极低人群（尤其是身体水分含量比较低）的体脂率测得偏低。然而下列的方程可适用于肥胖和体脂极低的人群，同时也适用于大量减重后皮肤松弛的人群和那些不使用药物的健美运动员。结果通常是准确的，上下可能浮动2'
        },
        {
          icon: 'static/mp4/sitting3.png',
          title: '最大围度计算',
          id: 3,
          msg: '下列计算器可按你的体型计算出不用药优秀运动员的身体最大围度（大概8%-10%的体脂率）。方程是基于我六年对于过去和现在非用药冠军的研究和数据分析所得出的。本质上，这个计算器是将非用药冠军的体型去拟合你的体型。同时也包括了大量真实不用药健美冠军的数据。被这个计算器所使用的方程可在《不用药最大围度》这本书中里找到。'
        },
        {
          icon: 'static/mp4/sitting4.png',
          title: '蛋白质计算',
          id: 4,
          msg: 'BMI[Body Mass Index] 即BMI指数，也叫身体质量指数，是衡量是否肥胖和标准体重的重要指标。适用范围：18至65岁的人士。儿童、发育中的青少年、孕妇、乳母、老人及身型健硕的运动员除外。世界卫生组织认为BMI指数保持在22左右是比较理想的。'
        },
        {
          icon: 'static/mp4/sitting5.png',
          title: '补水计算器',
          id: 5,
          msg: '每公斤最少需要1克，1.5克是最标准的，青少年，运动员和孕妇等特殊需要的人应该达到2到3克，一般正常人需要大概70到150克之间。含蛋白质最多的食物是黄豆，每100克含36.3克；含蛋白质最多的动物是鸡肉，每100克含23.3克；含蛋白质多的食物包括：牲畜的奶，牛奶、羊奶、马奶等;畜肉，牛、羊、猪、狗肉等;禽肉，鸡、鸭、鹅、鹌鹑、驼鸟等;蛋类，鸡蛋、鸭蛋、鹌鹑 蛋等及鱼、虾、蟹等;还有大豆类，黄豆、大青豆和黑豆等，其中黄豆的营养价值最高，它是婴幼儿食品中优质的蛋白质来源;此外芝麻、瓜子、核桃、 杏仁、松子等干果类蛋白质的含量均较高。'
        },
        {
          icon: 'static/mp4/sitting6.png',
          title: '燃脂运动计算',
          id: 6,
          msg: '燃脂运动就是燃烧脂肪的运动，需要满足下面三个必要条件：1、该运动要达到中低强度的运动心率；2、这种中低强度运动心率的运动要持续20分钟以上；3、这种运动必须是大肌肉群的运动，如慢跑、游泳、健身操等。用下面的计算器，马上得到适合你的中低强度运动心率，低于这个范围或者高于这个范围，都不是以燃烧脂肪供能为主，减脂效果略差'
        },
        {
          icon: 'static/mp4/sitting7.png',
          title: '最终体重计算',
          id: 7,
          msg: '下面的计算器将会计算出通过控制过饮食达到你所期望的体脂率时的体重，其会考虑控制饮食时肌肉流失的速率。此计算器已经假设在你控制饮食期间会进行力量训练（除了“下列的愚蠢情形”）。计算器是基于《你真正需要减少多少体重》这本书设计的。'
        },
        {
          icon: 'static/mp4/sitting8.png',
          title: '健康体重范围',
          id: 8,
          msg: '您的体重符合标准吗？使用标准体重计算器，请在下面选择您的性别，输入身高，最后计算得出标准体重。计算适用范围：女性：19岁到69岁，身高在152cm到176cm。男性：19岁到69岁，身高在152cm到188cm。'
        },
        {
          icon: 'static/mp4/sitting9.png',
          title: '新陈代谢',
          id: 9,
          msg: '基础代谢率（BMR）是指人体在清醒而又极端安静的状态下，不受肌肉活动、环境温度、食物及精神紧张等影响时的能量代谢率。基础代谢率对减肥有非常大的影响，每天适量的运动有助于提高身体的基础代谢率，而节食(极端是绝食)会降低人的基础代谢率。通过性别，年龄，身高和体重能粗略计算基础代谢率。'
        },
        {
          icon: 'static/mp4/sitting10.png',
          title: '了解自己',
          id: 10,
          msg: '1分钟彻底了解自己的标准体重、健康体重范围、BMI指数（即身体质量指数）、基础代谢率和燃脂运动中低强度运动心率，看看自己是否需要减肥了。身体质量指数'
        },
        {
          icon: 'static/mp4/sitting11.png',
          title: '热量计算器',
          id: 11,
          msg: '热量计算，卡路里计算器、热量消耗计算'
        },
        {
          icon: 'static/mp4/sitting12.png',
          title: 'RM计算器',
          id: 12,
          msg: 'RM"是英文"repetition maximum"的缩写，意思是"最大重复次数"。在健美锻炼活动中，"RM"被约定俗成地规定为能够重复试举一定次数的负荷重量，如"6～12RM"所表达的就是"一组最多能重复或连续试举6～12次的重量"。如用100公斤进行卧推练习，当竭尽全力最多只能连续推举5次时，那么这100公斤就是该动作5RM的重量。'
        },
        {
          icon: 'static/mp4/sitting13.png',
          title: '标准体重计算',
          id: 13,
          msg: '您的体重符合标准吗？使用标准体重计算器，请在下面选择您的性别，输入身高，最后计算得出标准体重。计算适用范围：女性：19岁到69岁，身高在152cm到176cm。男性：19岁到69岁，身高在152cm到188cm。'
        },
        {
          icon: 'static/mp4/sitting14.png',
          title: '运动心率计算',
          id: 14,
          msg: '心率、心率正常范围、心率表、心率正常值'
        }
      ]
    }
  },
  methods: {
    colClick (e) {
      this.$store.state.sittingId = e
      this.$router.push({ path: '/sittingMsg' })
    }
  }
}
</script>

<style scoped>
#child {
  padding-bottom: 100px;
  padding-top: 25px;
}
.list {
  position: relative;
  height: 150px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 15px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-right: 30px;
  box-sizing: border-box;
}
.list img {
  position: absolute;
  top: 25px;
  left: 30px;
  height: 100px;
}
.list i {
  position: absolute;
  left: 150px;
  top: 15px;
  font-style: normal;
  font-size: 30px;
}
.list span {
  position: absolute;
  top: 60px;
  left: 150px;
  font-size: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
