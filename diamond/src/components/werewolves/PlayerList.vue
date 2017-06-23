<template>
  <div class="player-list">
    <player-info></player-info>
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
  overflow: auto;
  position: absolute;
  height: 100%;
  width: 165vh;
  right: 0;
}
</style>
