<template>
  <div id="main" :class="navigationObject">
    <login class="login1 absolute"></login>
    <core class="core1 absolute"></core>
    <login class="login2 absolute"></login>
    <core class="core2 absolute"></core>
    <login class="login3 absolute"></login>
    <core class="core3 absolute"></core>
    <login class="login4 absolute"></login>
    <core class="core4 absolute"></core>
    <login class="login5 absolute"></login>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Login from './Login.vue'
import Core from './Core.vue'

export default {
  components: {
    Login,
    Core
  },
  computed: {
    ...mapState([
      'navigationFrom'
    ]),
    navigationObject () {
      return {
        'navigation-static1': this.navigationFrom === 1,
        'navigation-static2': this.navigationFrom === 2,
        'navigation-static3': this.navigationFrom === 3,
        'navigation-static4': this.navigationFrom === 4
      }
    }
  }
}
</script>

<style lang="less">
@import url(../assets/measure.less);

.absolute {
  position: absolute;
}

.navigation-static1 {
  .core1 {
    top: @TRANSLATE_CORE1_Y;
    left: @TRANSLATE_CORE1_X;
  }
  .core2 {
    top: @TRANSLATE_CORE2_Y;
    left: @TRANSLATE_CORE2_X;
  }
  .core3 {
    top: @TRANSLATE_CORE3_Y;
    left: @TRANSLATE_CORE3_X;
  }
  .core4 {
    top: @TRANSLATE_CORE4_Y;
    left: @TRANSLATE_CORE4_X;
  }
  .login1 {
    top: @TRANSLATE_LOGIN1_Y;
    left: @TRANSLATE_LOGIN1_X;
  }
  .login2 {
    top: @TRANSLATE_LOGIN2_Y;
    left: @TRANSLATE_LOGIN2_X;
  }
  .login3 {
    top: @TRANSLATE_LOGIN3_Y;
    left: @TRANSLATE_LOGIN3_X;
  }
  .login4 {
    top: @TRANSLATE_LOGIN4_Y;
    left: @TRANSLATE_LOGIN4_X;
  }
  .login5 {
    top: @TRANSLATE_LOGIN5_Y;
    left: @TRANSLATE_LOGIN5_X;
  }
}

.navigation-static2 {
  .core1 {
    top: @TRANSLATE_CORE0_Y;
    left: @TRANSLATE_CORE0_X;
  }
  .core2 {
    top: @TRANSLATE_CORE1_Y;
    left: @TRANSLATE_CORE1_X;
  }
  .core3 {
    top: @TRANSLATE_CORE2_Y;
    left: @TRANSLATE_CORE2_X;
  }
  .core4 {
    top: @TRANSLATE_CORE3_Y;
    left: @TRANSLATE_CORE3_X;
  }
  .login1 {
    top: @TRANSLATE_LOGIN0_Y;
    left: @TRANSLATE_LOGIN0_X;
  }
  .login2 {
    top: @TRANSLATE_LOGIN1_Y;
    left: @TRANSLATE_LOGIN1_X;
  }
  .login3 {
    top: @TRANSLATE_LOGIN2_Y;
    left: @TRANSLATE_LOGIN2_X;
  }
  .login4 {
    top: @TRANSLATE_LOGIN3_Y;
    left: @TRANSLATE_LOGIN3_X;
  }
  .login5 {
    top: @TRANSLATE_LOGIN4_Y;
    left: @TRANSLATE_LOGIN4_X;
  }
}

.navigation-static3 {
  .core1 {
    top: @TRANSLATE_COREM1_Y;
    left: @TRANSLATE_COREM1_X;
  }
  .core2 {
    top: @TRANSLATE_CORE0_Y;
    left: @TRANSLATE_CORE0_X;
  }
  .core3 {
    top: @TRANSLATE_CORE1_Y;
    left: @TRANSLATE_CORE1_X;
  }
  .core4 {
    top: @TRANSLATE_CORE2_Y;
    left: @TRANSLATE_CORE2_X;
  }
  .login1 {
    top: @TRANSLATE_LOGINM1_Y;
    left: @TRANSLATE_LOGINM1_X;
  }
  .login2 {
    top: @TRANSLATE_LOGIN0_Y;
    left: @TRANSLATE_LOGIN0_X;
  }
  .login3 {
    top: @TRANSLATE_LOGIN1_Y;
    left: @TRANSLATE_LOGIN1_X;
  }
  .login4 {
    top: @TRANSLATE_LOGIN2_Y;
    left: @TRANSLATE_LOGIN2_X;
  }
  .login5 {
    top: @TRANSLATE_LOGIN3_Y;
    left: @TRANSLATE_LOGIN3_X;
  }
}

.navigation-static4 {
  .core1 {
    top: @TRANSLATE_COREM2_Y;
    left: @TRANSLATE_COREM2_X;
  }
  .core2 {
    top: @TRANSLATE_COREM1_Y;
    left: @TRANSLATE_COREM1_X;
  }
  .core3 {
    top: @TRANSLATE_CORE0_Y;
    left: @TRANSLATE_CORE0_X;
  }
  .core4 {
    top: @TRANSLATE_CORE1_Y;
    left: @TRANSLATE_CORE1_X;
  }
  .login1 {
    top: @TRANSLATE_LOGINM2_Y;
    left: @TRANSLATE_LOGINM2_X;
  }
  .login2 {
    top: @TRANSLATE_LOGINM1_Y;
    left: @TRANSLATE_LOGINM1_X;
  }
  .login3 {
    top: @TRANSLATE_LOGIN0_Y;
    left: @TRANSLATE_LOGIN0_X;
  }
  .login4 {
    top: @TRANSLATE_LOGIN1_Y;
    left: @TRANSLATE_LOGIN1_X;
  }
  .login5 {
    top: @TRANSLATE_LOGIN2_Y;
    left: @TRANSLATE_LOGIN2_X;
  }
}
</style>
