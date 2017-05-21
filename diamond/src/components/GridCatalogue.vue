<template>
  <div id="catalogue">
    <div class="grid-unit grid-unit-fat"></div>
    <catalogue></catalogue>
  </div>
</template>

<script>
import Catalogue from './Catalogue.vue'

export default {
  components: {
    Catalogue
  }
}
</script>

<style lang="less">
@import url(../assets/measure.less);

#catalogue {
  &>div:first-child {
    z-index: 1;
    position: fixed;
    top: @TRANSLATE_CATALOGUE_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_CATALOGUE_X + @TRANSLATE_DEFAULT_X;
  }
}
</style>
