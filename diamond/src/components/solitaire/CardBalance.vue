<template>
  <transition name="move">
    <div v-if="cardBalanceShow" :key="Date.parse(new Date())" class="card-balance" @click="hideCardBalance" @contextmenu.prevent="void 0">
      <h1 :key="Date.parse(new Date()) + 1" :style="{ letterSpacing: 20 / type.length - 2 + 'vw' }">{{ type | uppercase }}</h1>
      <h2 :key="Date.parse(new Date()) + 2">SCORE: {{ cardBalanceScore }}</h2>
      <div v-show="type === 'High Card'" class="card-balance-1"></div>
      <div v-show="type === 'One Pair' || type === 'Two Pair'" class="card-balance-2a"></div>
      <div v-show="type === 'One Pair' || type === 'Two Pair'" class="card-balance-2b"></div>
      <div v-show="type === 'One Pair' || type === 'Two Pair'" class="card-balance-2c"></div>
      <div v-show="type === 'One Pair' || type === 'Two Pair'" class="card-balance-2d"></div>
      <div v-show="type === 'Two Pair' || type === 'Three of a Kind'" class="card-balance-3"></div>
      <div v-show="type === 'Three of a Kind'" class="card-balance-4a"></div>
      <div v-show="type === 'Three of a Kind'" class="card-balance-4b"></div>
      <div v-show="type === 'Three of a Kind'" class="card-balance-4c"></div>
      <div v-show="type === 'Three of a Kind'" class="card-balance-4d"></div>
      <div v-show="type === 'Straight'" class="card-balance-5"></div>
      <div v-show="type === 'Flush'" class="card-balance-6"></div>
      <div v-show="type === 'Full House'" class="card-balance-7"></div>
      <div v-show="type === 'Four of a Kind'" class="card-balance-8a"></div>
      <div v-show="type === 'Four of a Kind'" class="card-balance-8b"></div>
      <div v-show="type === 'Straight Flush'" class="card-balance-9"></div>
    </div>
    <div v-else></div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      timer: 0
    }
  },
  computed: {
    ...mapState({
      cardBalanceShow: 'cardBalanceShow',
      cardBalanceScore: 'cardBalanceScore',
      type: 'cardBalanceString'
    })
  },
  methods: {
    hideCardBalance () {
      if (this.cardBalanceShow) {
        clearTimeout(this.timer)
        this.$store.commit('HIDE_CARD_BALANCE')
      }
    }
  },
  updated () {
    if (this.cardBalanceShow && this.type !== 'Four of a Kind' && this.type !== 'Straight Flush') {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$store.commit('HIDE_CARD_BALANCE')
      }, 3000)
    }
  }
}
</script>

<style lang="less">
.card-balance {
  position: fixed;
  top: 0;
  left: 0;
  width: 70vw;
  height: 100vh;
  h1 {
    position: fixed;
    z-index: 3;
    top: 26vh;
    left: 0;
    margin-left: 4.7vw;
    font-size: 13vh;
    cursor: default;
    user-select: none;
  }
  h2 {
    position: fixed;
    z-index: 3;
    top: 43vh;
    left: 0;
    color: rgba(0, 0, 0, 0.5);
    margin-left: 5vw;
    font-size: 7vh;
    cursor: default;
    user-select: none;
  }
}

.card-balance-1 { // banner of 1
  position: fixed;
  z-index: 1;
  top: 30vh;
  left: 0;
  height: 40vh;
  width: 60vw;
  box-shadow: 0 0 5px -1px #000;
  background: #fff;
}

.card-balance-2a { // banner of 2~3
  position: fixed;
  z-index: 1;
  top: 30vh;
  left: 0;
  height: 40vh;
  width: 60vw;
  box-shadow: 0 0 5px -1px #000;
  background: #6fa;
}

.card-balance-2b {
  position: fixed;
  z-index: 1;
  top: 30vh;
  left: 60vw;
  border-top: 20vh solid #6fa;
  border-bottom: 20vh solid #6fa;
  border-right: 20vh solid transparent;
}

.card-balance-2c {
  position: fixed;
  z-index: 2;
  top: 31vh;
  left: 0;
  margin-left: -1.42vh;
  height: 38vh;
  width: 60vw;
  background: #fff;
}

.card-balance-2d {
  position: fixed;
  z-index: 2;
  top: 31vh;
  left: 60vw;
  margin-left: -1.42vh;
  border-top: 19vh solid #fff;
  border-bottom: 19vh solid #fff;
  border-right: 19vh solid transparent;
}

.card-balance-3 { // background of 3~4
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, transparent 100%);
}

.card-balance-4a { // banner of 4
  position: fixed;
  z-index: 1;
  top: 28vh;
  left: 0;
  height: 44vh;
  width: 60vw;
  background: #6fa;
}

.card-balance-4b {
  position: fixed;
  z-index: 1; 
  top: 28vh;
  left: 60vw;
  border-top: 22vh solid #6fa;
  border-bottom: 22vh solid #6fa;
  border-right: 22vh solid transparent;
}

.card-balance-4c {
  position: fixed;
  z-index: 2;
  top: 31vh;
  left: 0;
  margin-left: -4.26vh;
  height: 38vh;
  width: 60vw;
  background: #fff;
}

.card-balance-4d {
  position: fixed;
  z-index: 2;
  top: 31vh;
  left: 60vw;
  margin-left: -4.26vh;
  border-top: 19vh solid #fff;
  border-bottom: 19vh solid #fff;
  border-right: 19vh solid transparent;
}

.card-balance-5 { // background of 5
  position: fixed;
  top: 0;
  left: 0;
  width: 65vw;
  height: 100vh;
  background: linear-gradient(90deg, #fff 35%, transparent 100%);
}

.card-balance-6 { // background of 6
  position: fixed;
  top: 0;
  left: 0;
  width: 65vw;
  height: 100vh;
  background: linear-gradient(90deg, #6fa 35%, transparent 100%);
}

.card-balance-7 { // background of 7
  position: fixed;
  top: 0;
  left: 0;
  width: 65vw;
  height: 100vh;
  background: linear-gradient(90deg, #f33 35%, transparent 100%);
}

.card-balance-8a { // animation of 8
  position: fixed;
  z-index: 2;
  top: 0;
  left: -300vw;
  height: 100vh;
  width: 800vw;
  animation: level8 1.2s linear forwards;
}

.card-balance-8b { // background of 8
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(102, 255, 170, 0.85);
}

.card-balance-9 { // animation of 9
  position: fixed;
  z-index: 2;
  top: 0;
  left: -300vw;
  height: 100vh;
  width: 800vw;
  animation: level9 2.4s linear forwards;
}

@keyframes level8 {
  0% {
    background: transparent;
  }
  25% {
    background: #6fa;
  }
  50% {
    background: #fff;
  }
  75% {
    background: #afc;
  }
  100% {
    background: transparent;
  }
}

@keyframes level9 {
  0% {
    background: transparent url("../../assets/solitaire/bg.png");
    background-position: 0 50px;
  }
  25% {
    background: #f33 url("../../assets/solitaire/bg.png");
    background-position: 100px 150px;
  }
  50% {
    background: #fff url("../../assets/solitaire/bg.png");
    background-position: 0 50px;
  }
  75% {
    background: #fff url("../../assets/solitaire/bg.png");
    background-position: 100px 150px;
  }
  100% {
    background: #6fa url("../../assets/solitaire/bg.png");
    background-position: 0 50px;
  }
}
</style>
