<template>
  <div id="logo">
    <div class="grid-unit"></div>
    <logo></logo>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="less">
@import url(../assets/measure.less);

#logo {
  &>div:first-child {
    z-index: 10;
    position: fixed;
    top: @TRANSLATE_LOGO_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_LOGO_X + @TRANSLATE_DEFAULT_X;
  }
}
</style>
