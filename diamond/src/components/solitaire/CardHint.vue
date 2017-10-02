<template>
  <div class="card-hint" @contextmenu.prevent="void 0">
    <div class="card-hint-title">
      <h1>SOLITAIRE <span>{{ cardVersion }}</span></h1>
      <p>Creation by Code Parenthesis 2017</p>
    </div>
    <div class="card-hint-main">
      <div class="card-hint-wrapper" ref="cardHint">
        <div class="card-hint-text card-hint-webfont" ref="cardHintChild">
          <h2>规则简介</h2>
          <p>使用一副去掉王牌的标准扑克牌，通过你的计算、决策以及一些运气，获得尽可能高的分数。</p>
          <p>游戏过程中，当你的手牌区域中有且仅有五张正面朝上的手牌时，你可以选择开牌以获取分数。</p>
          <p>开牌之后，手牌区域中所有手牌均会作废。</p>
          <p>当牌库被清空的时候，游戏结束。</p>
          <br>
          <h2>得分要点</h2>
          <p>弃牌越少，每次开牌的牌型越好，得分越高。</p>
          <br>
          <h2>基本操作</h2>
          <h3>开始新游戏</h3>
          <p>点击<span>[右键]</span> -> 选择<span>[START NEW GAME]</span>开始新游戏；</p>
          <p>每局结束后会自动开始新游戏。</p>
          <h3>发牌（正面朝上的手牌不足五张时）</h3>
          <p>点击<span>[牌库]</span>获得一张手牌；</p>
          <p>按下<span>[空格键]</span>获得一张手牌；</p>
          <p>点击<span>[右键]</span> -> 选择<span>[FILL HAND]</span>补满手牌。</p>
          <h3>开牌（正面朝上的手牌有且只有五张时）</h3>
          <p>点击<span>[SHOWDOWN]</span>开牌；</p>
          <p>点击<span>[CONTINUE]</span>时若存在五张正面朝上的手牌时自动开牌。</p>
          <h3>洗牌</h3>
          <p>每局新游戏系统会自动洗牌；</p>
          <p>点击<span>[右键]</span> -> 选择<span>[SHUFFLE DECK]</span>打乱牌库；</p>
          <p>点击<span>[右键]</span> -> 选择<span>[SORT BY SUIT]</span>按花色排序手牌；</p>
          <p>点击<span>[右键]</span> -> 选择<span>[SORT BY POINT]</span>按点数排序手牌。</p>
          <h3>翻牌</h3>
          <p>点击<span>[手牌]</span>，再次点击会翻回。</p>
          <h3>跳过结算</h3>
          <p>在结算提示中点击<span>[左键]</span>。</p>
          <br>
          <h2>得分计算</h2>
          <p>根据不同牌型按照下表计算基础分：</p>
          <div class="card-hint-table">
            <table>
              <thead>
                <tr>
                  <th>SUIT × RANK</th>
                  <th>A</th>
                  <th>K</th>
                  <th>Q</th>
                  <th>J</th>
                  <th>10</th>
                  <th>9</th>
                  <th>8</th>
                  <th>7</th>
                  <th>6</th>
                  <th>5</th>
                  <th>4</th>
                  <th>3</th>
                  <th>2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>STRAIGHT FLUSH</th>
                  <td>620631</td>
                  <td>614362</td>
                  <td>608093</td>
                  <td>601824</td>
                  <td>595555</td>
                  <td>589286</td>
                  <td>583017</td>
                  <td>576748</td>
                  <td>570479</td>
                  <td>564210</td>
                  <td>557941</td>
                  <td>551672</td>
                  <td>545403</td>
                </tr>
                <tr>
                  <th>FOUR OF A KIND</th>
                  <td>180477</td>
                  <td>178654</td>
                  <td>176831</td>
                  <td>175008</td>
                  <td>173185</td>
                  <td>171362</td>
                  <td>169539</td>
                  <td>167716</td>
                  <td>165893</td>
                  <td>164070</td>
                  <td>162247</td>
                  <td>160424</td>
                  <td>158601</td>
                </tr>
                <tr>
                  <th>FULL HOUSE</th>
                  <td>58707</td>
                  <td>58114</td>
                  <td>57521</td>
                  <td>56928</td>
                  <td>56335</td>
                  <td>55742</td>
                  <td>55149</td>
                  <td>54556</td>
                  <td>53963</td>
                  <td>53370</td>
                  <td>52777</td>
                  <td>52184</td>
                  <td>51591</td>
                </tr>
                <tr>
                  <th>FLUSH</th>
                  <td>42075</td>
                  <td>41650</td>
                  <td>41225</td>
                  <td>40800</td>
                  <td>40375</td>
                  <td>39950</td>
                  <td>39525</td>
                  <td>39100</td>
                  <td>38675</td>
                  <td>38250</td>
                  <td>37825</td>
                  <td>37400</td>
                  <td>36975</td>
                </tr>
                <tr>
                  <th>STRAIGHT</th>
                  <td>27720</td>
                  <td>27440</td>
                  <td>27160</td>
                  <td>26880</td>
                  <td>26600</td>
                  <td>26320</td>
                  <td>26040</td>
                  <td>25760</td>
                  <td>25480</td>
                  <td>25200</td>
                  <td>24920</td>
                  <td>24640</td>
                  <td>24360</td>
                </tr>
                <tr>
                  <th>THREE OF A KIND</th>
                  <td>7128</td>
                  <td>7056</td>
                  <td>6984</td>
                  <td>6912</td>
                  <td>6840</td>
                  <td>6768</td>
                  <td>6696</td>
                  <td>6624</td>
                  <td>6552</td>
                  <td>6480</td>
                  <td>6408</td>
                  <td>6336</td>
                  <td>6264</td>
                </tr>
                <tr>
                  <th>TWO PAIR</th>
                  <td>3861</td>
                  <td>3822</td>
                  <td>3783</td>
                  <td>3744</td>
                  <td>3705</td>
                  <td>3666</td>
                  <td>3627</td>
                  <td>3588</td>
                  <td>3549</td>
                  <td>3510</td>
                  <td>3471</td>
                  <td>3432</td>
                  <td>3393</td>
                </tr>
                <tr>
                  <th>ONE PAIR</th>
                  <td>891</td>
                  <td>882</td>
                  <td>873</td>
                  <td>864</td>
                  <td>855</td>
                  <td>846</td>
                  <td>837</td>
                  <td>828</td>
                  <td>819</td>
                  <td>810</td>
                  <td>801</td>
                  <td>792</td>
                  <td>783</td>
                </tr>
                <tr>
                  <th>HIGH CARD</th>
                  <td>594</td>
                  <td>588</td>
                  <td>582</td>
                  <td>576</td>
                  <td>570</td>
                  <td>564</td>
                  <td>558</td>
                  <td>552</td>
                  <td>546</td>
                  <td>540</td>
                  <td>534</td>
                  <td>528</td>
                  <td>522</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>每次结算时，手牌区域中每张背面朝上的牌会减少60%结算得分。</p>
          <br>
          <h2>源码、讨论与 BUG 提交</h2>
          <p>欢迎访问本项目 <a target="_blank" class="white" style="text-decoration: underline" href="https://github.com/Winterwrath/Homepage/issues">Github Repository Issues</a> 参与讨论交流。</p>
          <br>
          <h2>隐私声明</h2>
          <p>本游戏会使用 Cookie 与 LocalStorage 存储游戏数据，与游戏无关的数据不会被存储。</p>
        </div>
      </div>
    </div>
    <div class="card-hint-footer card-hint-webfont">
      <div @click="hideCardHint">我知道了</div>
      <div @click="$router.go(-1)">我不同意</div>
    </div>
    <div class="card-hint-shader">
      <div class="card-hint-scrollbar">
        <div class="card-hint-scrollcore" ref="cardScrollbar"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      scrollHeight: 0,
      viewHeight: 0
    }
  },
  computed: {
    ...mapState([
      'cardVersion'
    ])
  },
  methods: {
    ...mapMutations({
      hideCardHint: 'DISABLE_CARD_HINT',
      setHighscore: 'SET_CARD_HIGHSCORE'
    }),
    scorllListener () {
      this.$refs.cardScrollbar.style.top = parseInt((this.$refs.cardHint.scrollTop / this.scrollHeight).toFixed(2) * 32 * this.viewHeight) + 'px'
    },
    resizeListener () {
      this.scrollHeight = this.$refs.cardHintChild.clientHeight - this.$refs.cardHint.clientHeight
      this.viewHeight = document.body.clientHeight / 100
      this.$refs.cardScrollbar.style.top = parseInt((this.$refs.cardHint.scrollTop / this.scrollHeight).toFixed(2) * 32 * this.viewHeight) + 'px'
    }
  },
  mounted () {
    if (window.localStorage.getItem('cardHighscore')) {
      this.setHighscore(window.localStorage.getItem('cardHighscore'))
    } else if (document.cookie.match(/cardHighscore/)) {
      this.setHighscore(document.cookie.match(/cardHighscore=(\d+)/)[1])
    }
    setTimeout(() => {
      this.scrollHeight = this.$refs.cardHintChild.clientHeight - this.$refs.cardHint.clientHeight
    }, 500)
    this.viewHeight = document.body.clientHeight / 100
    this.$refs.cardHint.addEventListener('scroll', this.scorllListener, false)
    window.addEventListener('resize', this.resizeListener, false)
  },
  beforeDestroy () {
    this.$refs.cardHint.removeEventListener('scroll', this.scorllListener, false)
    window.removeEventListener('resize', this.resizeListener, false)
  }
}
</script>

<style lang="less">
.card-hint {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.66);
  h1, h2, h3, p, th, td {
    margin: 0;
  }
}

.card-hint-title {
  width: 66vw;
  height: 14vh;
  padding-top: 6vh;
  color: #fff;
  background: #111;
  user-select: none;
  cursor: default;
  h1 {
    margin: 4vh 0 0 3vw;
    font-size: 6vh;
    span {
      font-size: 3vh;
    }
  }
  p {
    margin: -1vh 0 5vh 3vw;
    font-size: 2vh;
  }
}

.card-hint-main {
  height: 50vh;
  width: 60vw;
  padding: 5vh 3vw; 
  color: #fff;
  background: #111;
  .card-hint-wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    height: 50vh;
    .card-hint-text {
      h2 {
        margin-bottom: 1vh;
        font-size: 2.4vh;
      }
      h3 {
        margin-top: 1vh;
        font-size: 2vh;
        color: #aaa;
      }
      p {
        margin-left: 2vh;
        font-size: 2vh;
        color: #aaa;
        &::before {
          content: "- ";
          position: relative;
          margin-left: -1.8vh;
        }
      }
      span {
        color: #3a9;
      }
    }
  }
}

.card-hint-shader {
  position: fixed;
  top: 24vh;
  left: 63vw;
  margin-left: -20px;
  width: 20px;
  height: 52vh;
  background: #111;
  .card-hint-scrollbar {
    margin-left: 1vw;
    width: 3px;
    height: 52vh;
    background: #333;
    transition: all .5s ease;
  }
  .card-hint-scrollcore {
    position: relative;
    top: 0;
    width: 3px;
    height: 20vh;
    background: #888;
    transition: background-color .5s ease, top .2s ease;
  }
  &:hover .card-hint-scrollbar {
    background: #6fa;
  }
  &:hover .card-hint-scrollcore {
    background: #aaa;
  }
}

.card-hint-table {
  margin: 1vh 0 1vh 2vh;
  color: #aaa;
  table {
    text-align: center;
    border-collapse: collapse;
    font-size: 1.8vh;
    th, td {
      border-top: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
    }
  }
}

.card-hint-footer {
 width: 66vw;
 height: 20vh;
 background: #111;
 div {
   padding: 0.5vh 0 0.5vh 3vw;
   color: #fff;
   font-weight: bolder;
   background: none;
   user-select: none;
   cursor: pointer;
   transition: all .5s ease;
   &:hover {
     color: #111;
     background: #6fa;
   }
 }
}

.card-hint-webfont {
    font-family: "SourceHanSansCNLight" !important;
    font-size: 1rem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

@font-face {
    font-family: "SourceHanSansCNLight";
    src: url("../../assets/solitaire/SourceHanSansCNLight.eot"); /* IE9 */
    src: url("../../assets/solitaire/SourceHanSansCNLight.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("../../assets/solitaire/SourceHanSansCNLight.woff") format("woff"), /* chrome、firefox */
    url("../../assets/solitaire/SourceHanSansCNLight.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
    url("../../assets/solitaire/SourceHanSansCNLight.svg#SourceHanSansCNLight") format("svg"); /* iOS 4.1- */
}
</style>
