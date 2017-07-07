<template>
  <div class="grid-logo">
    <logo></logo>
    <div class="g-grid-unit"></div>
  </div>
</template>

<script>
import Logo from '../Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="less">
@import url(../../assets/grid/navigationMeasure.less);

.grid-logo {
  &>div:last-child {
    z-index: 5;
    position: fixed;
    top: @TRANSLATE_LOGO_Y;
    left: @TRANSLATE_LOGO_X;
  }
}
</style>
