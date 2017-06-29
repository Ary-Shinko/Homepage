<template>
  <div id="catalogue" :class="navigationObject">
    <div class="grid-unit grid-unit-fat">
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
    navigationObject () {
      return {
        'navigation-catalogue': this.navigationStep !== 0
      }
    }
  }
}
</script>

<style lang="less">
@import url(../assets/measure.less);

#catalogue {
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
