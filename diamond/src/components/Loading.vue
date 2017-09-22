<template>
  <div class="loading">
    <transition name="fade">
      <div v-if="loadingShow" class="loading-background">
        <div class="loading-center"></div>
        <p class="loading-text">Loading</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'loadingShow'
    ])
  }
}
</script>

<style lang="less">
.loading {
  position: fixed;
  z-index: 1000;
  .loading-background {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
  }
  .loading-center {
    position: fixed;
    z-index: 2;
    top: 30vh;
    left: ~'calc((100vw - 40vh) / 2)';
    width: 40vh;
    height: 40vh;
    box-shadow: 0 0 3vh 0vh #000;
    animation: spin-square 4s ease infinite;
    background-image: url(../assets/grid/loading.png);
    background-size: contain;
  }
  .loading-text {
    position: fixed;
    z-index: 2;
    color: #999;
    top: 45vh;
    left: ~'calc((100vw - 12vh) / 2)';
    font-size: 3vh;
    user-select: none;
    cursor: default;
  }
}
</style>
