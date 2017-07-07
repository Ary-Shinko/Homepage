<template>
  <div class="core-sub" :class="navigation">
    <div class="core-sub-grid g-grid-unit"></div>
    <div class="core-sub-content">
      <img src="../../assets/grid/proto3.png" alt="Code Parenthesis">
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
        'navigation-sub-up1': this.navigationStep === 1,
        'navigation-sub-up2': this.navigationStep === 2,
        'navigation-sub-up3': this.navigationStep === 3,
        'navigation-sub-down1': this.navigationStep === -1,
        'navigation-sub-down2': this.navigationStep === -2,
        'navigation-sub-down3': this.navigationStep === -3
      }
    }
  }
}
</script>

<style lang="less">
.core-sub {
  position: absolute;
}

.core-sub-grid {
  position: absolute;
  z-index: 2;
}

.core-sub-content {
  img {
    margin: 23vh 0 0 18vh;
    width: 80vh;
    opacity: .8;
  }
}
</style>
