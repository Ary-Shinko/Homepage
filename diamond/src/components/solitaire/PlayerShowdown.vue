<template>
  <div v-show="cardAvailableCount === 5" class="player-showdown" @click="showdown" :style="{ 'margin-right': cardScoreMargin - 5 + 'px' }">
    <p>[SHOWDOWN]</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'cardScoreMargin',
      'cardAvailableCount'
    ])
  },
  methods: {
    showdown () {
      console.log(1)
    }
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
