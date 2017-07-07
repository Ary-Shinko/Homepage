<template>
  <div class="grid-catalogue" :class="navigation">
    <div class="g-grid-unit g-grid-unit-fat">
      <catalogue></catalogue>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Catalogue from './Catalogue.vue'

export default {
  components: {
    Catalogue
  },
  computed: {
    ...mapGetters([
      'navigationStep'
    ]),
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
  z-index: 1;
  &>div:first-child {
    z-index: 1;
    position: absolute;
    top: @TRANSLATE_CATALOGUE_Y;
    left: @TRANSLATE_CATALOGUE_X;
    background: #fff;
  }
}
</style>
