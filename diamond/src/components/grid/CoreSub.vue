<template>
  <div class="core-sub" :class="navigation">
    <div class="core-sub-grid g-grid-unit"></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'navigationStep'
    ]),
    ...mapState([
      'navigationLocked'
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
  background: url(../../assets/grid/sub1.png);
  background-size: cover;
}
</style>
