<template>
  <transition name="move">
    <div v-show="cardBalanceShow" :key="cardBalanceString" class="card-balance" @click="hideCardBalance" @contextmenu.prevent="void 0">
      <h1 :style="{ letterSpacing: 20 / cardBalanceString.length - 2 + 'vw' }">{{ cardBalanceString | uppercase }}</h1>
      <h2>SCORE: {{ cardBalanceScore }}</h2>
      <div v-if="grade1" class="card-balance-1"></div>
      <div v-if="grade2 || grade3" class="card-balance-2a1"></div>
      <div v-if="grade2 || grade3" class="card-balance-2a2"></div>
      <div v-if="grade2 || grade3" class="card-balance-2a3"></div>
      <div v-if="grade2 || grade3" class="card-balance-2a4"></div>
      <div v-if="grade3 || grade4" class="card-balance-4a"></div>
      <div v-if="grade4" class="card-balance-4b"></div>
      <div v-if="grade5" class="card-balance-5"></div>
    </div>
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
    ...mapState([
      'cardBalanceShow',
      'cardBalanceString',
      'cardBalanceScore'
    ]),
    grade1 () {
      if (this.cardBalanceString === 'One Pair' || this.cardBalanceString === 'High Card') {
        return true
      } else {
        return false
      }
    },
    grade2 () {
      if (this.cardBalanceString === 'Two Pair' || this.cardBalanceString === 'Three of a Kind') {
        return true
      } else {
        return false
      }
    },
    grade3 () {
      if (this.cardBalanceString === 'Straight' || this.cardBalanceString === 'Flush' || this.cardBalanceString === 'Full House') {
        return true
      } else {
        return false
      }
    },
    grade4 () {
      if (this.cardBalanceString === 'Four of a Kind') {
        return true
      } else {
        return false
      }
    },
    grade5 () {
      if (this.cardBalanceString === 'Straight Flush') {
        return true
      } else {
        return false
      }
    }
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
    if (this.cardBalanceShow) {
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
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 35%, transparent 100%);
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

.card-balance-1 {
  position: fixed;
  z-index: 1;
  top: 30vh;
  left: 0;
  height: 40vh;
  width: 65vw;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
}

.card-balance-2a1 {
  position: fixed;
  z-index: 1;
  top: 30vh;
  left: 0;
  height: 40vh;
  width: 60vw;
  background: #fff;
}

.card-balance-2a2 {
  position: fixed;
  z-index: 1;
  top: 30vh;
  left: 60vw;
  border-top: 20vh solid #fff;
  border-bottom: 20vh solid #fff;
  border-right: 20vh solid transparent;
}

.card-balance-2a3 {
  position: fixed;
  z-index: 2;
  top: 31vh;
  left: 0;
  margin-left: -1.42vh;
  height: 38vh;
  width: 60vw;
  background: #6fa;
}

.card-balance-2a4 {
  position: fixed;
  z-index: 2;
  top: 31vh;
  left: 60vw;
  margin-left: -1.42vh;
  border-top: 19vh solid #6fa;
  border-bottom: 19vh solid #6fa;
  border-right: 19vh solid transparent;
}

.card-balance-4a {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  width: 65vw;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.75) 50%, transparent 100%);
}

.card-balance-4b {
  position: fixed;
  z-index: 2;
  top: 0;
  left: -300vw;
  height: 100vh;
  width: 800vw;
  animation: grade4 1.5s linear forwards;
}

.card-balance-5 {
  position: fixed;
  z-index: 2;
  top: 0;
  left: -300vw;
  height: 100vh;
  width: 800vw;
  animation: grade5 2.4s linear forwards;
}

@keyframes grade4 {
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
    background: #fff;
  }
  100% {
    background: transparent;
  }
}

@keyframes grade5 {
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
