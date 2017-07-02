<template>
  <div class="table-deck">
    <deck-cards></deck-cards>
    <deck-counter></deck-counter>
    <deck-score ref="deskScore"></deck-score>
  </div>
</template>

<script>
import DeckCards from './DeckCards.vue'
import DeckCounter from './DeckCounter.vue'
import DeckScore from './DeckScore.vue'

export default {
  components: {
    DeckCards,
    DeckCounter,
    DeckScore
  }
}
</script>

<style>
.table-deck {
  position: relative;
  height: 16.5%;
  width: 90%;
  padding: 0 5%;
}
</style>
