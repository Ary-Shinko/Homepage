<template>
  <div class="player-showdown" :style="{ 'margin-right': cardScoreMargin - 5 + 'px' }">
    <p v-if="cardDeck.length > 0 && cardCountableCount === 5" @click="showdownBalance">[SHOWDOWN]</p>
    <p v-else-if="cardDeck.length === 0" @click.once="finalBalance">[CONTINUE]</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'cardScoreMargin',
      'cardCountableCount',
      'cardDeck'
    ])
  },
  methods: {
    ...mapActions([
      'showdownBalance',
      'finalBalance'
    ])
  }
}
</script>

<style lang="less">
.player-showdown {
  position: absolute;
  right: 5%;
  bottom: 10.4%;
  color: #6fa;
  font-size: 6vh;
  font-weight: bolder;
  transition: margin .2s ease, color .5s ease;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  p {
    margin: 0;
  }
}
</style>
