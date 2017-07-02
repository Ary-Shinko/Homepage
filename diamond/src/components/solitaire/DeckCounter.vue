<template>
  <div class="deck-counter">
    <p v-if="cardDeck.length">x<span>{{ cardDeck.length }}</span></p>
    <p v-if="!cardDeck.length">DECK EMPTY</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'cardDeck'
    ])
  }
}
</script>

<style lang="less">
.deck-counter {
  float: left;
  height: 100%;
  cursor: default;
  p {
    margin: 5.6vh 0 0;
    font-size: 8vh;
    color: #fff;
    span {
      margin-left: 1.4vh;
    }
  }
}
</style>
