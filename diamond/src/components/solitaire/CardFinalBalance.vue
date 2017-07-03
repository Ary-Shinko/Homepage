<template>
  <div v-show="cardFinalBalanceShow" class="card-final-balance" @contextmenu.prevent="void 0">
    <div class="card-final-balance-animation"></div>
    <div class="card-final-balance-text" @click="startNewGame">
      <h1>Final Score</h1>
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
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'cardFinalBalanceShow',
      'cardFinalBalanceString'
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
.card-final-balance-animation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background: #3a6; // .................................
}

.card-final-balance-text {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("../../assets/solitaire/bg.png"); // rgba(255, 255, 255, 0.5)
  animation: bg-move 1s linear infinite;
  span {
    // margin: 30vh 0;
    // padding: 0 5vw;
    // height: 40vh;
    // background: #6fa;
    // font-size: 12vh;
    font-weight: bolder;
    text-shadow: 0 0 2px #111;
    color: #fff;
  }
}

@keyframes bg-move {
  0% {
    background-position: 0 50px;
  }
  100% {
    background-position: 100px 150px;
  }
}
</style>
