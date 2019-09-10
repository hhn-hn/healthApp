<template>
  <div id="child">
    <div v-show="id === 0">
      <div class="top">
        <p class="like">BMI身体质量指数</p>
      </div>
      <div class="showbox">
        <div class="msg">
          BMI[Body Mass Index] 即BMI指数，也叫身体质量指数，是衡量是否肥胖和标准体重的重要指标。适用范围：18至65岁的人士。儿童、发育中的青少年、孕妇、乳母、老人及身型健硕的运动员除外。世界卫生组织认为BMI指数保持在22左右是比较理想的。
        </div>
        <h2 class="title">请输入您的身高、体重 :</h2>
        <div class="input">
          身高: <input type="text"> CM
        </div>
        <div class="input">
          体重: <input type="text"> KG
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 1">
      <div class="top">
        <p class="like">体脂计算器</p>
      </div>
      <div class="showbox">
        <div class="msg">下列的计算器是根据你的体重，身高，年龄和简单的卷尺测量数据（比如：人体数据测量）来计算你的体脂率和瘦体重含量。皮肤褶皱测量往往会把肥胖人群和体脂极低人群（尤其是身体水分含量比较低）的体脂率测得偏低。然而下列的方程可适用于肥胖和体脂极低的人群，同时也适用于大量减重后皮肤松弛的人群和那些不使用药物的健美运动员。结果通常是准确的，上下可能浮动2-3个百分点</div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          年龄: <input type="text"> 岁
        </div>
        <div class="input">
          身高: <input type="text"> CM
        </div>
        <div class="input">
          体重: <input type="text"> KG
        </div>
        <div class="input">
          腰围: <input type="text"> CM
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 2">
      <div class="top">
        <p class="like">肌肉潜力计算器</p>
      </div>
      <div class="showbox">
        <div class="msg">下列的计算器是根据你的体重，身高，年龄和简单的卷尺测量数据（比如：人体数据测量）来计算你的体脂率和瘦体重含量。皮肤褶皱测量往往会把肥胖人群和体脂极低人群（尤其是身体水分含量比较低）的体脂率测得偏低。然而下列的方程可适用于肥胖和体脂极低的人群，同时也适用于大量减重后皮肤松弛的人群和那些不使用药物的健美运动员。结果通常是准确的，上下可能浮动2-3个百分点</div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          年龄: <input type="text"> 岁
        </div>
        <div class="input">
          身高: <input type="text"> CM
        </div>
        <div class="input">
          体重: <input type="text"> KG
        </div>
        <div class="input">
          腰围: <input type="text"> CM
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 3">
      <div class="top">
        <p class="like">最大围度计算</p>
      </div>
      <div class="showbox">
        <div class="msg">下列计算器可按你的体型计算出不用药优秀运动员的身体最大围度（大概8%-10%的体脂率）。方程是基于我六年对于过去和现在非用药冠军的研究和数据分析所得出的。本质上，这个计算器是将非用药冠军的体型去拟合你的体型。同时也包括了大量真实不用药健美冠军的数据。被这个计算器所使用的方程可在《不用药最大围度》这本书中里找到。</div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          身高: <input type="text"> CM
        </div>
        <div class="input">
          手腕： <input type="text"> CM
        </div>
        <div class="input">
          脚踝：<input type="text"> CM
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 4">
      <div class="top">
        <p class="like">蛋白质计算器</p>
      </div>
      <div class="showbox">
        <div class="msg">每公斤最少需要1克，1.5克是最标准的，青少年，运动员和孕妇等特殊需要的人应该达到2到3克，一般正常人需要大概70到150克之间。<br><br>

          含蛋白质最多的食物是黄豆，每100克含36.3克；<br><br>

          含蛋白质最多的动物是鸡肉，每100克含23.3克；<br><br>

          含蛋白质多的食物包括：牲畜的奶，牛奶、羊奶、马奶等;畜肉，牛、羊、猪、狗肉等;禽肉，鸡、鸭、鹅、鹌鹑、驼鸟等;蛋类，鸡蛋、鸭蛋、鹌鹑 蛋等及鱼、虾、蟹等;还有大豆类，黄豆、大青豆和黑豆等，其中黄豆的营养价值最高，它是婴幼儿食品中优质的蛋白质来源;此外芝麻、瓜子、核桃、 杏仁、松子等干果类蛋白质的含量均较高。

          <br><br>一个水煮蛋的蛋白质（不含蛋黄）4克
        </div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          体重: <input type="text"> KG
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 5">
      <div class="top">
        <p class="like">补水计算器</p>
      </div>
      <div class="showbox">
        <div class="msg"> 喝多少水和体重也有关，和是否活动有关。此计算器可以根据你的体重，计算出每天你的最佳喝水量</div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          体重: <input type="text"> KG
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 6">
      <div class="top">
        <p class="like">燃脂运动计算</p>
      </div>
      <div class="showbox">
        <div class="msg">
          燃脂运动就是燃烧脂肪的运动，需要满足下面三个必要条件：<br><br>

          1、该运动要达到中低强度的运动心率；<br><br>

          2、这种中低强度运动心率的运动要持续20分钟以上；<br><br>

          3、这种运动必须是大肌肉群的运动，如慢跑、游泳、健身操等。<br><br>

          用下面的计算器，马上得到适合你的中低强度运动心率，低于这个范围或者高于这个范围，都不是以燃烧脂肪供能为主，减脂效果略差
        </div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          年龄: <input type="text"> 岁
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 7">
      <div class="top">
        <p class="like">最终体重计算</p>
      </div>
      <div class="showbox">
        <div class="msg">下面的计算器将会计算出通过控制过饮食达到你所期望的体脂率时的体重，其会考虑控制饮食时肌肉流失的速率。此计算器已经假设在你控制饮食期间会进行力量训练（除了“下列的愚蠢情形”）。计算器是基于《你真正需要减少多少体重》这本书设计的。</div>
        <h2 class="title">请输入下面信息 :</h2>

        <div class="input">
          当前体脂： <input type="text"> %
        </div>
        <div class="input">
          当前体重：<input type="text"> KG
        </div>
        <div class="input">
          目标体脂： <input type="text"> %
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 8">
      <div class="top">
        <p class="like">健康体重范围</p>
      </div>
      <div class="showbox">
        <div class="msg">您的体重符合标准吗？使用标准体重计算器，请在下面选择您的性别，输入身高，最后计算得出标准体重。计算适用范围：<br><br>

          女性：19岁到69岁，身高在152cm到176cm。<br><br>

          男性：19岁到69岁，身高在152cm到188cm。
        </div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          性别：<input type="text">
        </div>
        <div class="input">
          身高: <input type="text"> CM
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 9">
      <div class="top">
        <p class="like">新陈代谢计算</p>
      </div>
      <div class="showbox">
        <div class="msg">
          基础代谢率（BMR）是指人体在清醒而又极端安静的状态下，不受肌肉活动、环境温度、食物及精神紧张等影响时的能量代谢率。<br><br>

          基础代谢率对减肥有非常大的影响，每天适量的运动有助于提高身体的基础代谢率，而节食(极端是绝食)会降低人的基础代谢率。通过性别，年龄，身高和体重能粗略计算基础代谢率。
        </div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          年龄: <input type="text"> 岁
        </div>
        <div class="input">
          性别：<input type="text">
        </div>
        <div class="input">
          身高: <input type="text"> CM
        </div>
        <div class="input">
          体重: <input type="text"> KG
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 10">
      <div class="top">
        <p class="like">一分钟了解自己</p>
      </div>
      <div class="showbox">
        <div class="msg">1分钟彻底了解自己的标准体重、健康体重范围、BMI指数（即身体质量指数）、基础代谢率和燃脂运动中低强度运动心率，看看自己是否需要减肥了。身体质量指数(BMI)：评估体重与身高比例的常用工具，适用范围：18至65岁的人士。儿童、发育中的青少年、孕妇、乳母、老人及身型健硕的运动员除外。</div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          年龄: <input type="text"> 岁
        </div>
        <div class="input">
          性别：<input type="text">
        </div>
        <div class="input">
          身高: <input type="text"> CM
        </div>
        <div class="input">
          体重: <input type="text"> KG
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 11">
      <div class="top">
        <p class="like">热量计算器</p>
      </div>
      <div class="showbox">
        <div class="msg">热量计算，卡路里计算器、热量消耗计算</div>
        <h2 class="title">请请输入您的重量和运动持续时间</h2>
        <div class="input">
          体重: <input type="text"> KG
        </div>
        <div class="input">
          运动持续时间：<input type="text"> 分钟
        </div>
        <div class="input">
          运动类型<input type="text">
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 12">
      <div class="top">
        <p class="like">RM计算器</p>
      </div>
      <div class="showbox">
        <div class="msg">
          RM"是英文"repetition maximum"的缩写，意思是"最大重复次数"。在健美锻炼活动中，"RM"被约定俗成地规定为能够重复试举一定次数的负荷重量，如"6～12RM"所表达的就是"一组最多能重复或连续试举6～12次的重量"。如用100公斤进行卧推练习，当竭尽全力最多只能连续推举5次时，那么这100公斤就是该动作5RM的重量。
          <br><br>
          在健美运动中负荷强度是一个十分重要的训练因素，1～4次主要增长绝对肌力和体力、6～12次主要壮大肌肉、15～20次主要发达小肌肉群和增进肌肉线条弹性、30次以上主要用于缩减体脂和增强心肺机能等说法，实际上就是强度决定效果的表达。 而1～4次或6～12次等的完全写法就是1～4RM或6～12RM等，"1～4次"的背后其实依附着强度或负荷量的含义。若要训练计划中完整表达，则应是"1～4RM/1～4"的操作模式，即用最多可以重复试举1～4次的重量连续试举1～4次。多数情况下就以次数或RM次数来表示负荷强度。当然也可用某动作极限重量的百分比来说明负荷强度，如85%负荷强度、80%负荷强度等等。在实践中，负荷强度的百分比与重复次数的关系是非常密切的。一般讲，50%的负荷强度应该是可以重复试举10次左右的重量，通常强度每增加5%重复次数就减少1次。比较这种负荷百分比法，次数或RM次数法的表达则更为直接而科学。
        </div>
        <h2 class="title">请选择您的RM数和填写其对应的重量:</h2>
        <div class="input">
          <input type="text">RM：
        </div>
        <div class="input">
          <input type="text"> KG
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 13">
      <div class="top">
        <p class="like">标准体重计算</p>
      </div>
      <div class="showbox">
        <div class="msg">
          您的体重符合标准吗？使用标准体重计算器，请在下面选择您的性别，输入身高，最后计算得出标准体重。计算适用范围：<br><br>
          女性：19岁到69岁，身高在152cm到176cm。
          <br><br>
          男性：19岁到69岁，身高在152cm到188cm。
        </div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          性别：<input type="text">
        </div>
        <div class="input">
          身高: <input type="text"> CM
        </div>
        <button>计算</button>
      </div>
    </div>
    <div v-show="id === 14">
      <div class="top">
        <p class="like">运动心率计算</p>
      </div>
      <div class="showbox">
        <div class="msg">心率、心率正常范围、心率表、心率正常值</div>
        <h2 class="title">请输入下面信息 :</h2>
        <div class="input">
          年龄: <input type="text"> 岁
        </div>
        <button>计算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$store.state.sittingId
    }
  }

}
</script>

<style scoped lang='less'>
#child {
  padding-top: 35px;
}
.top {
  width: 100%;
  height: 50px;
  .like {
    display: inline-block;
    font-size: 22px;
    font-weight: 700;
    height: 100%;
    line-height: 50px;
    border-bottom: 3px solid red;
    box-sizing: border-box;
    padding: 0 10px;
  }
}
.showbox {
  padding: 10px 30px;
  .msg {
    padding: 10px 30px;
    width: 96%;
    margin: 10px auto;
    background-color: #ccc;
    box-sizing: border-box;
    border-radius: 15px;
    font-size: 24px;
  }
  .title {
    font-size: 30px;
  }
  .input {
    margin-top: 25px;
    height: 50px;
    line-height: 50px;
    input {
      border: 1px solid #333;
      padding-left: 25px;
      box-sizing: border-box;
    }
  }
  button {
    border: 1px solid #f03232;
    padding: 15px 30px;
    margin: 25px auto;
    color: #f03232;
    background-color: #d48888;
  }
}
</style>
