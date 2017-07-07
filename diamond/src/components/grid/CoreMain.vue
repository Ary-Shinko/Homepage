<template>
  <div class="core-main" :class="navigation">
    <div class="core-main-grid g-grid-unit"></div>
    <div class="core-main-content">
      <slot></slot>
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
    navigation () {
      return {
        'navigation-main-up1': this.navigationStep === 1,
        'navigation-main-up2': this.navigationStep === 2,
        'navigation-main-up3': this.navigationStep === 3,
        'navigation-main-down1': this.navigationStep === -1,
        'navigation-main-down2': this.navigationStep === -2,
        'navigation-main-down3': this.navigationStep === -3
      }
    }
  }
}
</script>

<style lang="less">
.core-main {
  position: absolute;
}

.core-main-grid {
  position: absolute;
  z-index: 4;
}

.core-main-content {
  position: absolute;
  z-index: 5;
  margin: 35vh 0 0 5vh;
  width: 130vh;
}
</style>
