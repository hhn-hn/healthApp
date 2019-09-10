<template>
  <div id="child">
    <van-notice-bar mode="link"
                    @click="news">
      通知: 时过立秋，严寒袭来，你，是否能抗住严冬的袭击，防寒小知识，你值得拥有！
    </van-notice-bar>
    <van-swipe :autoplay="10000"
               indicator-color="white"
               class="banner">
      <van-swipe-item>
        <img src="../../assets/en1.jpg"
             alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/en2.png"
             alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/en3.jpg"
             alt>
      </van-swipe-item>
      <!-- <van-swipe-item>
        <img src="../../assets/banner3.jpg"
             alt>
      </van-swipe-item> -->
    </van-swipe>
    <!-- <van-row class="user-links">
      <van-col span="6"
               v-for="(item,index) in navList"
               :key="index"
               @click="tomy(item.id)">
        <img :src="item.img"
             alt
             style="width:37px;height:31px;">
        <p>{{item.title}}</p>
      </van-col>
    </van-row> -->
    <!-- <div class="enclosure_park">
      <span>您附近有6个医务室</span>
      <p>北京市天安门广场</p>
      <div class="navigation">
        <img src="../../assets/tubiao.png"
             alt>
        <p>刷新</p>
      </div>
    </div> -->
    <div class="nearby_parking">
      <div class="np_header">
        <span></span>
        <i>实用工具</i>
      </div>
      <!-- <div class="np_main"
           v-for="(item,index) in nearby_park"
           :key="index"
           @click.stop="daohang(item)">
        <h2>{{item.name}}</h2>
        <span>{{item.add}}</span>
        <div>
          <span class="free">{{item.free}}</span>
          <span class="money">{{item.money}}</span>
          <span class="haveNumber">{{item.haveNumber}}</span>
        </div>
        <div class="daohang">
          <img src="../../assets/daohang.png"
               alt>
        </div>
      </div> -->
      <!-- <ul>
        <li class="list"
            v-for="(item, index) in gridArr"
            :key="index"
            @click="colClick(item)">
          <img :src="item.icon"
               alt="">
          <i>{{item.title}}</i>
          <span>{{item.msg}}</span>
        </li>
      </ul> -->
      <van-row>
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
      </van-row>
    </div>
    <div class="nearby_parking">
      <div class="np_header">
        <span></span>
        <i>新闻列表</i>
      </div>
      <ul class="mainList">
        <li v-for="(item,index) in list"
            :key="index"
            @click="goMsg(item)">
          <h2>{{item.title}}</h2>
          <div class="img">
            <img :src="item.img"
                 alt="">
            <img :src="item.img1"
                 alt="">
            <img :src="item.img2"
                 alt="">
          </div>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <!-- <van-action-sheet v-model="show"
                      :actions="actions"
                      @select="onSelect"
                      cancel-text="取消" /> -->
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      location: '北京',
      dianhua: false,
      title_msg: '',
      nearby_park: [
        {
          name: '北京天安门救助站',
          add: '北京天安门救助站',
          free: '紧急急救',
          money: '爱心便利',
          haveNumber: '床位充足',
          distance: '100M'
        },
        {
          name: '仁和医院',
          add: '仁和医院',
          free: '紧急急救',
          money: '爱心便利',
          haveNumber: '床位充足',
          distance: '18.5KM'
        },
        {
          name: '北京市第一医院',
          add: '北京市第一医院',
          free: '紧急急救',
          money: '爱心便利',
          haveNumber: '床位充足',
          distance: '5KM'
        },
        {
          name: '北京市第二医院',
          add: '北京市第二医院',
          free: '紧急急救',
          money: '爱心便利',
          haveNumber: '床位充足',
          distance: '9.5KM'
        },
        {
          name: '清华大学附属医院',
          add: '清华大学附属医院',
          free: '紧急急救',
          money: '爱心便利',
          haveNumber: '床位充足',
          distance: '8KM'
        },
        {
          name: '北京大学附属医院',
          add: '北京大学附属医院',
          free: '紧急急救',
          money: '爱心便利',
          haveNumber: '床位充足',
          distance: '10KM'
        }
      ],
      show: false,
      actions: [
        { name: '高德地图' },
        { name: '百度地图' },
        { name: '腾讯地图' }],
      daohang_lng: '',
      daohang_lat: '',
      daohang_title: '',
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
      ],
      list: [
        {
          id: 0,
          title: '人在临终前的几个行为，看完感叹：原来死亡真的有预兆',
          img: `static/listImg/list1-1.jpeg`,
          img1: `static/listImg/list1-2.jpeg`,
          img2: `static/listImg/list1-3.jpeg`,
          name: '中医周的世界',
          msg: '每个人都会经历一段漫长的人生，在这段漫长的时光里，人生中我们经历了儿童，少年，青少年，青年，中年老年这几个阶段，慢慢的经历了世上许许多多的沧桑和变化，每个人面对死亡都有不同的态度，但是真正面临死亡的时候我们又会感到惧怕，在我们的身边亲人即将离世的时候，往往会牵动着我们的心，但是有几个行为是临死前的征兆，出现这几个行为的时候大家就一定要注意，他们很快就要离我们而去了。',
          msg1: '看完之后不禁感叹：原来死亡真的有预兆！那么这些预兆分别是什么呢？首先第一个预兆就是全身出现水肿的现象，当全身出现水肿时，说明肾脏器官已经衰竭。它不能正常的处理全身的毒素和水分，引起其他器官开始衰竭，最明显的一点就是，在临终之前，人体的脸部和脚部以及手部都会出现水肿的现象。',
          msg2: '第二个征兆就是手脚冰凉，为什么手脚会冰凉呢？因为他们离心脏的距离比较远，因此血液循环经常达不到肢体末端，所以在临死之前手脚往往会非常冰凉，因为心脏即将停止工作，血液循环也即将停止，所以，当老人的手脚一旦开始变得冰凉，则是说明心脏要停止活动了。',
          msg3: '第三个征兆就是大小便失禁，很多老人们在出现大小便失禁之后各种疾病会找上门来，因为当大小便失禁的时候则说明他们臀部的肌肉已经不听使唤，而且肠胃也出现了问题，牵一发而动全身，也会引起其他器官开始衰竭。所以当老人出现大小便失禁的时候，则说明他们身体的某些器官已经不再配合工作，要提前罢工了。第四个征兆就是他们呼吸的气体是凉的，正常人吐出来的气体是温和的，但是即将去世的老人们，他们呼出的气体却是冰冷的。',
          msg4: '最后一个征兆就是回光返照，很多人也有这样的经验，经常躺在病床上病恹恹的老人突然来了精神，和家人们谈笑风生，但是简短的欢笑过后老人却突然离世了，可是回光返照到底是什么一个原理呢？因为在临死之前，人体的各项器官会发动所有的潜能来缓解疼痛和过敏以及休克的症状，帮助患者度过最后的危险期，在潜能发挥完之后人们的精力也所剩无几，因此就会驾鹤西去了。所以看完了在临终前的几个行为之后，是不是有所感叹：原来死亡真的有预兆，只是我们没有发现而已啊！'
        },
        {
          id: 1,
          title: '肝火旺盛是什么原因引起？如何做能帮肝脏“灭灭火”？',
          img: `static/listImg/list2-1.jpeg`,
          img1: `static/listImg/list2-2.jpeg`,
          img2: `static/listImg/list2-3.jpeg`,
          name: '养生有平安',
          msg: '在生活中，有些脾气火爆的人，或者是经常睡眠不好的人，就会被认为是肝火比较旺盛。而肝火旺盛的情况也会比较常见，给生活带来的困扰也算是比较多的。很多人对于肝火旺盛的情况，都会不知道该怎么办，也不知道是什么原因引起的。就会给生活代带来更多的烦恼，想要解决肝火旺盛的情况，还是得要对准原因去解决。',
          msg1: '如果是夏天或者是秋天的时候出现肝火旺盛，可能就是天气干燥，还有就是气温太高，都会容易让人的体内火气旺盛，特别是肝火最容易旺盛。还有就是平时吃辣比较多，辣的食物吃多了，就会容易让人上火，还会让人出现排便困难的情况，都是肝火旺盛的表现。如果平时的压力比较大，再加上长期的熬夜加班，肝火就会更容易出现旺盛的情况。还是得要及时的释放压力，或许能够帮助缓解情况。',
          msg2: '饮食方面，注意补充维生素C。富含维生素C的食物，是能够帮助保护肝脏健康的，而且维生素C还能够帮助去肝火，还能帮助人体补充所需的营养物质。含维生素C比较多的食物就有草莓和苹果，日常生活中适当多吃，很快肝火就会慢慢地降下来。除了多吃点富含维生素C的食物，还要适当的多吃点能够帮助去火的食物，这样火气才能有所缓解。适合去火气的食物就有绿豆汤，还有苦瓜和西瓜，绿豆汤在夏天应该是比较常喝的，能够帮助消暑，还能去火气。西瓜和苦瓜也是，都是比较常见的食物，经常吃一点，不怕火气会旺盛。',
          msg3: '水分要补充充足，要多喝水。肝火会越来越旺盛，与体内的水分是否平衡也是有关系的，不管是在夏天还是在秋天，都会比较容易干燥。如果不及时补充水分，就会容易让身体流失水分，水分流失得越多，肝火也就会越旺。想要肝火降下去，就要适当的多喝水，只要有充足的水分，肝脏就会得到滋润，火气自然也就会慢慢的消下去。',
          msg4: '睡眠方面，要少熬夜，每天作息有规律。现在的人都比较忙碌，晚上都会有做不完的事情，就会熬夜去加班。还有的人则是为了玩游戏，看电视剧去熬夜，不管是哪一种原因，经常熬夜，就会增加肝脏的负担，没有时间去进行修复，肝火旺盛的情况就会得不到缓解。如果想要肝火下降，每天的睡眠就要保证充足，该睡觉的时候就要睡觉，每天最好能够在十一点以前睡觉，还能按时的早期，睡眠质量就会高，肝脏也能得到休息和修复，肝火也不会容易出现旺盛的情况。'
        },
        {
          id: 2,
          title: '血压到了150/95，就一定要吃药吗？一次性说个明',
          img: `static/listImg/list3-1.jpeg`,
          img1: `static/listImg/list3-2.jpeg`,
          img2: `static/listImg/list3-3.jpeg`,
          name: 'seven健康',
          msg: '现在最令人头疼的一个问题就是血压，在以前都是一些上了年纪的人会出现血压升高的情况，而现在不是了，很多的中年人都会有血压升高的情况，血压一旦升高，给身体带来的影响也是比较大的，会引起各种健康问题。',
          msg1: '我们正常的血压是90mmHg<收缩压<140mmHg，60mmHg<舒张压<90mmHg，当血压升高到150/95时，需要重视的，虽然有一定高，但是不要慌张。我们很多人，每次血压升高的时候，都是比较焦虑和不安的，会想到是不是要吃药，其实不是的，要根据身体的状况来决定的。',
          msg2: '如果是一次测量升高没有关系的，可以多次几次，并且在未来的三天内，都需要测量一下，记录好数据，以便比对，很多人是因为紧张而出现测量不准确，或是身体上其他的一些问题导致，需要确认以后，再决定要不要吃。',
          msg3: '如果只是血压升高到这个点，身体上没有其他任何的不适，或着身体上其他的部位也没有损害，先不用吃，可以考虑改善生活的一些习惯，来调整血压，减轻身体的负担。因为血压升高主要是生活中的一些不良的习惯所致，那及时的改善，相信血压也是可以得到控制。',
          msg4: '对于一些重口味的食物，还有腌制的食物，如腊肠、咸鱼、咸肉等，这些食物都不能吃。平时多吃点含碘的食物，吃点海带、莴笋、茄子等，这些食物是有助于血压的控制，对身体有利。'
        },
        {
          id: 3,
          title: '晚上睡觉时，手机离身体多远比较好？尽量在这个范围外！',
          img: `static/listImg/list4-1.jpeg`,
          img1: `static/listImg/list4-2.png`,
          img2: `static/listImg/list4-3.png`,
          name: '每日聊健康',
          msg: '电子产品现在在我们的生活当中非常的普及，对于很多年轻人来说，手机更是一天天不离手，白天上班工作可能没有时间看手机，但是到了晚上的时候，就会刷手机一直到深夜。在熬夜玩手机之后，如果想要睡觉的话，也会随手将手机放在自己的枕头边。',
          msg1: '我们正常的血压是90mmHg<收缩压<140mmHg，60mmHg<舒张压<90mmHg，当血压升高到150/但我们都知道三是电子产品多多少少都有一定的辐射性，在睡觉的时候经常把手机放在我们的大脑旁边，难免就会对我们的身体造成一定的影响。那么在睡觉的时候，手机到底离我们的身体多远才好呢？今天就和小编一起来看看！',
          msg2: '虽然说电子产品都有一定的辐射，但实际上手机的辐射是比较小的，而且是属于辐射当中的非电离辐射，相对于很多的电离辐射来说，手机的辐射对于我们的身体伤害是比较小的。',
          msg3: '不过就算是辐射小，如果长年累月都一直放置在我们的大脑周围，难免还是会给健康带来不利的影响，甚至会导致我们的身体出现一些疾病。所以在晚上睡觉的时候，还是尽量要将手机放置到离自己的身体远一些，起码要将手机放在两米之外。',
          msg4: '除了晚上睡觉以外，平时将手机携带在身上的时候，也尽量不要放在贴近身体的部位，像是很多人喜欢将手机放在自己胸口的口袋里，这样贴近心脏的部位，其实对于身体健康也是非常不利的，还有一些男性朋友也比较习惯将手机放在自己的裤子兜里，尤其是还距离生殖器官特别近，这些习惯也需要尽量改掉。'
        }
      ]
    }
  },
  methods: {
    daohang (item) {
      this.show = true
      this.daohang_lng = item.lng
      this.daohang_lat = item.lat
      this.daohang_title = item.name
    },
    onCancel (item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false
    },
    onSelect (item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false
      Toast('暂未实现，尽情期待')
      // console.log(item)
      // window.location.href = '//uri.amap.com/search?keyword=天安门广场&center=&city=&view=list&src=&coordinate=&callnative=1'
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
    },
    colClick (e) {
      this.$store.state.sittingId = e
      this.$router.push({ path: '/sittingMsg' })
    },
    news () {
      console.log(1)
    },
    goMsg () {
      this.$router.push({ path: '/video' })
    }
  }
}
</script>

<style scoped lang='less'>
.height {
  // width: 33%;
  height: 180px;
  text-align: center;
  box-shadow: 0px 0px 1px 2px #ccc;
  padding-top: 20px;
  box-sizing: border-box;
  .icon {
    // width: 120px;
    img {
      width: 90px;
    }
    // margin: auto;
    text-align: center;
  }
  .avc {
    font-size: 25px;
    text-shadow: 0.5px 0.5px 0.5px black, -0.5px -0.5px 0.5px white;
  }
}
#child {
  padding-bottom: 100px;
  padding-top: 45px;
}
.index {
  width: 100%;
  padding: 0 12px;
}
.header {
  width: 100%;
  height: 108px;
  margin-top: 15px;
}
.head_left {
  float: left;
  width: 85%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 6px 0px rgba(50, 57, 125, 0.18);
  opacity: 0.9;
  border-radius: 4px;
  // background-color: red;
  .location {
    position: relative;
    display: inline-block;
    width: 25%;
    height: 100%;
    color: #212121;
    font-size: 28px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    line-height: 38px;
    text-align: center;
    vertical-align: top;
    span {
      display: inline-block;
      width: 5px;
      height: 5px;
      vertical-align: middle;
      background: url(../../assets/location.png) no-repeat;
      background-size: 100% 100%;
    }
    i {
      float: right;
      color: #b0b0b0;
    }
  }
  .search {
    position: relative;
    float: left;
    width: 75%;
    height: 100%;
    em {
      display: inline-block;
      width: 11px;
      height: 11px;
      line-height: 40px;
      background: url(../../assets/search.png) no-repeat;
      background-size: 11px 11px;
      margin-left: 13px;
    }
    input {
      height: 100%;
      width: 80%;
      margin-left: 8px;
      border: none;
    }
  }
}
.news {
  position: relative;
  float: left;
  width: 15%;
  height: 100%;
  text-align: center;
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -12px;
    margin-left: -12px;
    width: 24px;
    height: 24px;
    // margin-top: 7px;
    img {
      width: 24px;
      height: 24px;
    }
    span {
      position: absolute;
      right: 0px;
      top: 0px;
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: red;
      border-radius: 50%;
    }
  }
}
.banner {
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 5px;
  margin-top: 16px;
  img {
    width: 100%;
    height: 100%;
  }
}
// .user-links {
//   padding: 15px 0;
//   font-size: 28px;
//   text-align: center;
//   background-color: #fff;
//   .van-col {
//     height: 100px;
//     margin-bottom: 10px;
//   }
//   .van-icon {
//     display: block;
//     font-size: 28px;
//   }
// }
.enclosure_park {
  position: relative;
  padding: 50px 50px;
  margin-top: 25px;
  background-color: #f4fffb;
  span {
    font-size: 28px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(64, 64, 64, 1);
  }
  p {
    font-size: 24px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    margin-top: 16px;
  }
  .navigation {
    position: absolute;
    top: 50%;
    right: 50px;
    margin-top: -50px;
    // transform: translateY(-50%);
    height: 40px;
    width: 100px;
    text-align: center;
    img {
      width: 50%;
    }
    p {
      font-size: 32px;
      color: #1b1b1b;
    }
  }
}
.nearby_parking {
  .np_header {
    position: relative;
    height: 58px;
    border-bottom: 1px solid #d9d9d9;
    span {
      position: absolute;
      top: 50%;
      left: 15px;
      margin-top: -15px;
      display: inline-block;
      width: 30px;
      height: 30px;
      background: url(../../assets/dingwe.png) no-repeat;
      background-size: 100% 100%;
    }
    i {
      line-height: 58px;
      margin-left: 60px;
      font-size: 32px;
      font-family: PingFang-SC-Medium;
      font-style: normal;
      font-weight: 500;
      color: #666666;
    }
  }
  .np_main {
    // height: 103px;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 18px 0 18px 50px;
    box-sizing: border-box;
    h2 {
      font-size: 30px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: #1b1b1b;
      margin-bottom: 14px;
    }
    span {
      font-size: 28px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
    div {
      margin-top: 14px;
      span {
        margin-right: 15px;
      }
      .free {
        font-size: 25px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #2878ff;
      }
      .money {
        font-size: 25px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #29b3c1;
      }
      .haveNumber {
        font-size: 25px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: #1f98c9;
      }
      .insufficient {
        color: #ff6e00;
      }
    }
    .daohang {
      position: absolute;
      top: 50%;
      right: 50px;
      margin-top: -25px;
      width: 50px;
      height: 50px;
      img {
        width: 100%;
      }
      p {
        font-weight: 500;
        color: #999999;
        text-align: center;
      }
    }
  }
}
.title {
  height: 45px;
  line-height: 45px;
  text-align: center;
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
  width: 70%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.mainList li {
  width: 95%;
  border-bottom: 1px solid #ccc;
  margin: auto;
  padding: 10px 0 10px 0;
  /* background-color: red; */
}
.mainList li h2 {
  font-size: 30px;
}
.img {
  text-align: center;
  height: 150px;
  margin: 10px;
}
.mainList li img {
  width: 30%;
  height: 100%;
  margin: 0 3px;
}
.mainList li p {
  font-size: 10px;
  padding: 10px 0;
}
</style>
