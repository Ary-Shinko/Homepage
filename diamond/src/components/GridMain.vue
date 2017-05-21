<template>
  <div id="main">
    <login class="login1"></login>
    <core class="core1"></core>
    <login class="login2"></login>
    <core class="core2"></core>
    <login class="login3"></login>
    <core class="core3"></core>
    <login class="login4"></login>
    <core class="core4"></core>
    <login class="login5"></login>
  </div>
</template>

<script>
import Login from './Login.vue'
import Core from './Core.vue'

export default {
  components: {
    Login,
    Core
  }
}
</script>

<style lang="less">
@import url(../assets/measure.less);

#main {
  .login1 {
    position: absolute;
    top: @TRANSLATE_L1_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_L1_X + @TRANSLATE_DEFAULT_X;
  }
  .core1 {
    position: absolute;
    top: @TRANSLATE_C1_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_C1_X + @TRANSLATE_DEFAULT_X;
  }
  .login2 {
    position: absolute;
    top: @TRANSLATE_L2_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_L2_X + @TRANSLATE_DEFAULT_X;
  }
  .core2 {
    position: absolute;
    top: @TRANSLATE_C2_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_C2_X + @TRANSLATE_DEFAULT_X;
  }
  .login3 {
    position: absolute;
    top: @TRANSLATE_L3_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_L3_X + @TRANSLATE_DEFAULT_X;
  }
  .core3 {
    position: absolute;
    top: @TRANSLATE_C3_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_C3_X + @TRANSLATE_DEFAULT_X;
  }
  .login4 {
    position: absolute;
    top: @TRANSLATE_L4_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_L4_X + @TRANSLATE_DEFAULT_X;
  }
  .core4 {
    position: absolute;
    top: @TRANSLATE_C4_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_C4_X + @TRANSLATE_DEFAULT_X;
  }
  .login5 {
    position: absolute;
    top: @TRANSLATE_L5_Y + @TRANSLATE_DEFAULT_Y;
    left: @TRANSLATE_L5_X + @TRANSLATE_DEFAULT_X;
  }
}
</style>
