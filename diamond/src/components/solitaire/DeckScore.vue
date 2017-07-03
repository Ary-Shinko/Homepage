<template>
  <div class="deck-score" :style="{ 'margin-right': cardScoreMargin + 'px' }">
    <p>SCORE:<span>{{ cardScore }}</span></p>
    <p>MAXSCORE:<span>{{ cardMaxscore }}</span></p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      totalWidth: 0.9 * document.documentElement.clientWidth.toFixed(1),
      cardWidth: 0.0924 * document.documentElement.clientHeight.toFixed(1) + 12
    }
  },
  computed: {
    ...mapState([
      'cardScoreMargin',
      'cardScore',
      'cardMaxscore'
    ])
  },
  methods: {
    ...mapMutations({
      modifyScoreMargin: 'MODIFY_CARD_SCORE_MARGIN'
    })
  },
  mounted () {
    let total = 0.9 * document.documentElement.clientWidth.toFixed(1)
    let single = 0.0924 * document.documentElement.clientHeight.toFixed(1) + 12
    let margin = (total % single + 10).toFixed(1)
    this.modifyScoreMargin(margin)
    window.addEventListener('resize', () => {
      let total = 0.9 * document.documentElement.clientWidth.toFixed(1)
      let single = 0.0924 * document.documentElement.clientHeight.toFixed(1) + 12
      let margin = (total % single + 10).toFixed(1)
      this.modifyScoreMargin(margin)
    }, false)
  }
}
</script>

<style lang="less">
.deck-score {
  float: right;
  height: 100%;
  font-size: 3.5vh;
  text-align: right;
  line-height: 3.4vh;
  font-weight: lighter;
  color: #6fa;
  transition: margin .2s ease;
  cursor: default;
  p {
    position: relative;
    top: 7.6vh;
    margin: 0;
    span {
      margin-left: 1.4vh;
    }
  }
}
</style>
