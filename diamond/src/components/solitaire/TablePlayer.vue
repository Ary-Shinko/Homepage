<template>
  <div class="table-player">
    <player-cards></player-cards>
    <player-showdown></player-showdown>
  </div>
</template>

<script>
import PlayerCards from './PlayerCards.vue'
import PlayerShowdown from './PlayerShowdown.vue'

export default {
  components: {
    PlayerCards,
    PlayerShowdown
  }

}
</script>

<style>
.table-player {
  position: relative;
  clear: both;
  height: 83.5%;
  width: 90%;
  padding: 0 5%;
}
</style>
