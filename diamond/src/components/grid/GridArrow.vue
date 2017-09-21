<template>
  <div class="grid-arrow">
    <img class="grid-arrow-1" v-if="navigationDirection < 0" src="../../assets/grid/arrow1.png">
    <img class="grid-arrow-2" v-if="navigationDirection < 0" src="../../assets/grid/arrow2.png">
    <img class="grid-arrow-3" v-if="navigationDirection < 0" src="../../assets/grid/arrow3.png">
    <img class="grid-arrow-4" v-if="navigationDirection > 0" src="../../assets/grid/arrow1.png">
    <img class="grid-arrow-5" v-if="navigationDirection > 0" src="../../assets/grid/arrow2.png">
    <img class="grid-arrow-6" v-if="navigationDirection > 0" src="../../assets/grid/arrow3.png">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'navigationFrom',
      'navigationTo'
    ]),
    navigationDirection () {
      return this.navigationFrom - this.navigationTo
    }
  }
}
</script>

<style lang="less">
.grid-arrow {
  position: fixed;
  z-index: 10;
  img {
    position: fixed;
  }
}

.grid-arrow-1 {
  height: 80vh;
  top: 100vh;
  left: -80vh;
  animation: flight-1 2s linear forwards;
}

.grid-arrow-2 {
  height: 120vh;
  top: 100vh;
  left: -20vh;
  animation: flight-2 2s linear forwards;
}

.grid-arrow-3 {
  height: 160vh;
  top: 100vh;
  left: -85vh;
  animation: flight-3 2s linear forwards;
}

.grid-arrow-4 {
  height: 80vh;
  top: 100vh;
  left: -80vh;
  animation: flight-1 2s linear reverse forwards;
}

.grid-arrow-5 {
  height: 120vh;
  top: 100vh;
  left: -20vh;
  animation: flight-2 2s linear reverse forwards;
}

.grid-arrow-6 {
  height: 160vh;
  top: 100vh;
  left: -80vh;
  animation: flight-3 2s linear reverse forwards;
}

@keyframes flight-1 {
  0%, 10% {
    transform: translate(10vh, -10vh) rotate(45deg);
  }
  60%, 100% {
    transform: translate(170vh, -170vh) rotate(45deg);
  }
}

@keyframes flight-2 {
  0%, 30% {
    transform: translate(10vh, -10vh) rotate(45deg);
  }
  70%, 100% {
    transform: translate(210vh, -210vh) rotate(45deg);
  }
}

@keyframes flight-3 {
  0%, 50% {
    transform: translate(20vh, -20vh) rotate(45deg);
  }
  80%, 100% {
    transform: translate(240vh, -240vh) rotate(45deg);
  }
}
</style>
