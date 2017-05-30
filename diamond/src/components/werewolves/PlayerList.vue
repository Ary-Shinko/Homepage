<template>
  <div class="player-list">
    <player-info v-for="n in 20"></player-info>
  </div>
</template>

<script>
import PlayerInfo from './PlayerInfo.vue'

export default {
  components: {
    PlayerInfo
  }
}
</script>

<style>

.player-list {
  /*overflow: auto;*/
  position: absolute;
  height: 100%;
  width: 55vh;
  right: 0;
  background: red;
}
</style>
