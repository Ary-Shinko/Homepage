<template>
  <div class="grid-catalogue" :class="navigation">
    <div class="g-grid-unit g-grid-unit-fat" :class="navigationBlack">
      <catalogue></catalogue>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import Catalogue from './Catalogue.vue'

export default {
  components: {
    Catalogue
  },
  computed: {
    ...mapState([
      'navigationBackground'
    ]),
    ...mapGetters([
      'navigationStep'
    ]),
    navigationBlack () {
      return this.navigationBackground ? 'g-grid-black' : ''
    },
    navigation () {
      return {
        'navigation-catalogue': this.navigationStep !== 0
      }
    }
  }
}
</script>

<style lang="less">
@import url(../../assets/grid/navigationMeasure.less);

.grid-catalogue {
  position: absolute;
  z-index: 2;
  &>div:first-child {
    z-index: 2;
    position: absolute;
    top: @TRANSLATE_CATALOGUE_Y;
    left: @TRANSLATE_CATALOGUE_X;
  }
}
</style>
