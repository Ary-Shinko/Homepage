<template>
  <div class="spliter" :class="navigationObject">
    <div class="spliter-grid grid-unit"></div>
    <div class="spliter-content">
      <img class="decoration" src="../assets/proto3.png" alt="DECORATION">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'navigationStep'
    ]),
    navigationObject () {
      return {
        'navigation-spliter-up1': this.navigationStep === 1,
        'navigation-spliter-up2': this.navigationStep === 2,
        'navigation-spliter-up3': this.navigationStep === 3,
        'navigation-spliter-down1': this.navigationStep === -1,
        'navigation-spliter-down2': this.navigationStep === -2,
        'navigation-spliter-down3': this.navigationStep === -3
      }
    }
  }
}
</script>

<style lang="less">
.spliter {
  .spliter-grid {
    position: absolute;
    z-index: 2;
  }
  .spliter-content {
    position: absolute;
    z-index: 2;
    img.decoration {
      position: absolute;
      z-index: 2;
      margin: 23vh 0 0 18vh;
      width: 80vh;
      opacity: .8;
    }
  }
}
</style>
