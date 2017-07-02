<template>
  <transition-group tag="div" class="deck-cards" name="fade" ref="deckCards">
    <card v-for="card of cardDeck" :key="'card' + (card.suit + card.point)" :card="card"></card>
  </transition-group>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Card from './Card.vue'

export default {
  components: {
    Card
  },
  computed: {
    ...mapState([
      'cardDeck'
    ])
  },
  methods: {
    ...mapActions([
      'dealCard'
    ])
  },
  mounted () {
    this.$refs.deckCards.$el.addEventListener('click', () => {
      this.dealCard(1)
    }, false)
  }
}
</script>

<style lang="less">
.deck-cards {
  display: flex;
  flex-flow: row wrap;
  float: left;
  padding-right: 11.5vh;
  .card {
    margin-right: -9.24vh;
  }
  .card:not(:first-child) {
    margin-left: 2px;
  }
  .fade-leave-active {
    position: absolute;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .fade-move {
    transition: all .2s;
  }
}
</style>
