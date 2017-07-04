<template>
  <div v-if="cardFinalBalanceShow" class="card-final-balance" @contextmenu.prevent="void 0">
    <div class="card-final-balance-animation"></div>
    <div class="card-final-balance-background" @click="startNewGame">
      <div class="card-final-balance-text">
        <h1>SOLITAIRE <span>v1.0.0</span></h1>
        <p>Creation by Code Parenthesis 2017</p>
        <ul>
          <li>Straight Flush: <span>{{ cardFinalBalanceString['Straight Flush'] }}</span></li>
          <li>Four of a Kind: <span>{{ cardFinalBalanceString['Four of a Kind'] }}</span></li>
          <li>Full House: <span>{{ cardFinalBalanceString['Full House'] }}</span></li>
          <li>Flush: <span>{{ cardFinalBalanceString['Flush'] }}</span></li>
          <li>Straight: <span>{{ cardFinalBalanceString['Straight'] }}</span></li>
          <li>Three of a Kind: <span>{{ cardFinalBalanceString['Three of a Kind'] }}</span></li>
          <li>Two Pair: <span>{{ cardFinalBalanceString['Two Pair'] }}</span></li>
          <li>One Pair: <span>{{ cardFinalBalanceString['One Pair'] }}</span></li>
          <li>High Card: <span>{{ cardFinalBalanceString['High Card'] }}</span></li>
          <li>Final Score: <span>{{ cardScore }}</span><span v-show="cardScore === cardHighscore" class="card-final-balance-highsocre">HIGHSCORE!</span></li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'cardFinalBalanceShow',
      'cardFinalBalanceString',
      'cardScore',
      'cardHighscore'
    ])
  },
  methods: {
    ...mapMutations({
      hideCardFinalBalance: 'HIDE_CARD_FINAL_BALANCE'
    }),
    ...mapActions([
      'initSolitaire'
    ]),
    startNewGame () {
      this.hideCardFinalBalance()
      this.initSolitaire()
    }
  }
}
</script>

<style lang="less">
.card-final-balance {
  animation: final-balance-all 1s ease forwards;
}

.card-final-balance-animation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  animation: final-balance 3s ease forwards;
}

.card-final-balance-background {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("../../assets/solitaire/bg.png");
  animation: bg-move 1s linear infinite;
}

.card-final-balance-text {
  position: fixed;
  top: 15vh;
  left: 0;
  height: 63vh;
  width: 60vh;
  background: #fff;
  animation: final-balance-all 3s ease forwards;
  h1 {
    margin: 4vh 0 0 2.8vh;
    font-size: 6vh;
    span {
      font-size: 3vh;
    }
  }
  p {
    margin: -1vh 0 5vh 3.1vh;
    font-size: 2vh;
  }
  ul {
    margin-left: 3vh;
    padding: 0;
    list-style: none;
    color: #333;
  }
  li {
    font-size: 3vh;
    &:last-child {
      color: #000;
      font-weight: bolder;
    }
  }
}

.card-final-balance-highsocre {
  font-weight: lighter;
  margin-left: 2vh;
  padding-left: 0.5vh;
  font-size: 3vh;
  background: #f33;
  color: #fff;
  animation: final-balance-highscore 1s steps(1) infinite;
}

@keyframes bg-move {
  0% {
    background-position: 0 50px;
  }
  100% {
    background-position: 100px 150px;
  }
}

@keyframes final-balance {
  0% {
    background: transparent;
  }
  20% {
    background: #3a6;
  }
  60% {
    background: #fff;
  }
  100% {
    background: #6fa;
  }
}

@keyframes final-balance-all {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes final-balance-highscore {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
