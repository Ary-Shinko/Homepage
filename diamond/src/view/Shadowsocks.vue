<template>
  <div class="shadowsocks">
    <user-tag></user-tag>
    <header-title v-fade main-color="#559" sub-color="#77a">SHADOWSOCKS</header-title>
    <div class="shadowsocks-bg">
      <div v-for="(word, index) of words" v-once :key="index" :style="{fontSize: parseInt(Math.random() * 40) / 10 + 'rem', marginTop: parseInt(Math.random() * 30) - 10 + 'rem', marginRight: parseInt(Math.random() * 5) + 'rem'}">{{ word }}</div>
    </div>
    <div class="shadowsocks-start" @click="loaderShow = !loaderShow"></div>
    <div v-if="loaderShow" class="shadowsocks-loader">
      <p>Arylab Shadowsocks</p>
      <p><b>不可以做什么:</b><br>
      浏览包括但不限于反动、暴恐、邪教宣传、色情、政治敏感等违法信息；<br>
      将账号分享、租借、出售给任何人；<br>
      长期进行大型文件的上传、下载；<br>
      在电脑、安卓手机等不安全的设备上使用；<br>
      使用不明来源的 Shadowsocks 登录器。<br>
      <b>可以做什么：</b><br>
      下载并使用各类 App；<br>
      在线听歌、观看高清视频；<br>
      浏览不违法的任何信息；<br>
      在开启”自动代理模式“的情况下永久开启本服务。<br>
      <br>
      技术支持：ary@arylab.me<br>
      <router-link to="/article/blog/Shadowsocks Direction on iOS">iOS Shadowsocks 使用帮助</router-link>
      </p>
      <div>{{ portPassword }}</div>
    </div>
    <div v-if="flashShow" class="shadowsocks-flash"></div>
  </div>
</template>

<script>
import HeaderTitle from '../components/HeaderTitle.vue'
import UserTag from '../components/UserTag.vue'

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loaderShow: false,
      flashShow: false,
      portPassword: 'Loading...',
      words: [
        '春未老 风细柳斜斜',
        '试上超然台上望 半壕春水一城花 烟雨暗千家',
        '寒食后 酒醒却咨嗟',
        '休对故人思故国 且将新火试新茶 诗酒趁年华',
        '风乍起 吹皱一池春水',
        '闲引鸳鸯香径里 手捋红杏蕊',
        '斗鸭阑干独倚 碧玉搔头斜坠',
        '终日望君君不至 举头闻鹊喜',
        '灯火钱塘三五夜 明月如霜 照见人如画',
        '帐底吹笙香吐麝 更无一点尘随马',
        '寂寞山城人老也 击鼓吹箫 却入农桑社',
        '火冷灯稀霜露下 昏昏雪意云垂野',
        '洞庭青草 近中秋 更无一点风色',
        '玉鉴琼田 三万顷 着我扁舟一叶',
        '素月分辉 明河共影 表里俱澄澈',
        '悠然心会 妙处难与君说',
        '应念岭表经年 弧光自照 肝肺皆冰雪',
        '短鬓萧骚襟袖冷 稳泛沧溟空阔',
        '尽挹西江 细斟北斗 万象为宾客',
        '扣舷独啸 不知今夕何夕',
        '晚秋天 一霎微雨洒庭轩',
        '槛菊萧疏 井梧零乱 惹残烟',
        '凄然 望江关 飞云黯淡夕阳闲',
        '当时宋玉悲感 向此临水与登山',
        '远道迢递 行人凄楚 倦听陇水潺湲',
        '正蝉吟败叶 蛩响衰草 相应喧喧',
        '孤馆度日如年 风露渐变 悄悄至更阑',
        '长天净 绛河清浅 皓月婵娟',
        '思绵绵 夜永对景 那堪屈指暗想从前',
        '未名未禄 绮陌红楼 往往经岁迁延',
        '帝里风光好 当年少日 暮宴朝欢',
        '况有狂朋怪侣 遇当歌对酒竞留连',
        '别有迅景如梭 旧游似梦 烟水程何限',
        '念利名 憔悴长萦绊 追往事 空惨愁颜',
        '漏箭移 稍觉轻寒 渐呜咽 画角数声残',
        '对闲窗畔 停灯向晓 抱影无眠'
      ]
    }
  },
  components: {
    HeaderTitle,
    UserTag
  },
  methods: {
    ...mapActions([
      'getSocks'
    ])
  },
  created () {
    let array = this.words
    for (let i = 0; i < 36; i++) {
      let n = parseInt(Math.random() * 36)
      array[i] = [array[n], array[n] = array[i]][0]
    }
    this.words = array
  },
  watch: {
    loaderShow () {
      this.flashShow = true
      setTimeout(() => {
        this.flashShow = false
      }, 300)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getSocks(message => {
        this.portPassword = message
      })
    })
  }
}
</script>

<style lang="less">
.shadowsocks {
  width: 100vw;
  height: 300vh;
  background: radial-gradient(circle, #fff, #333);
}

.shadowsocks-bg {
  writing-mode: vertical-rl;
  color: #202029;
  font-size: 2vh;
  cursor: default;
  font-family: 'WenyueGudianmingchao', serif, sans-serif;
}

.shadowsocks-start {
  position: fixed;
  top: 0;
  left: 0;
  margin-left: ~"calc((100vw - 6vh) / 2)";
  margin-top: 85vh;
  width: 5vh;
  height: 5vh;
  transform: rotate(45deg);
  transform-origin: 50% 50%;
  border: .5vh solid #5d0010;
  box-shadow: 0 0 1rem -.2rem #000;
  background: #cd1020;
  transition: background-color .5s ease;
  cursor: pointer;
  &:hover {
    background: #9a0005;
  }
  animation: wait-before 5s ease forwards;
}

.shadowsocks-loader {
  position: fixed;
  top: 0;
  left: 0;
  margin-left: ~"calc((100vw - 40vh) / 2)";
  margin-top: 12vh;
  padding: 2vh;
  width: 36vh;
  height: 60vh;
  box-shadow: 0 0 1rem -.2rem #000;
  background: rgba(33, 33, 33, 0.9);
  border-radius: 3px;
  font-size: .6rem;
  color: #aaa;
  p:first-child {
    color: #f8f8f8;
    margin-top: 1vh;
    font-weight: 800;
    font-size: 1rem;
    text-align: center;
  }
  div:last-child {
    position: absolute;
    bottom: 4vh;
    width: 36vh;
    text-align: center;
    background: #f8f8f8;
    padding: .5rem 0;
    font-size: 1rem;
    border-radius: 3px;
  }
  a {
    color: #aaa !important;
    text-decoration: underline;
  }
}

.shadowsocks-flash {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  animation: vanish .3s linear forwards;
}

@keyframes vanish {
  0% {
    background: #000;
  }
  20% {
    background: #111;
  }
  100% {
    background: transparent;
  }
}

@keyframes wait-before {
  0% {
    visibility: hidden;
    opacity: 0;
  }
  80% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@font-face {
  font-family: "WenyueGudianmingchao";
  src: url("../assets/shadowsocks/WenyueGudianmingchao.eot"); /* IE9 */
  src: url("../assets/shadowsocks/WenyueGudianmingchao.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
  url("../assets/shadowsocks/WenyueGudianmingchao.woff") format("woff"), /* chrome、firefox */
  url("../assets/shadowsocks/WenyueGudianmingchao.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
  url("../assets/shadowsocks/WenyueGudianmingchao.svg#WenyueGudianmingchao") format("svg"); /* iOS 4.1- */
  font-style: normal;
  font-weight: normal;
}
</style>
