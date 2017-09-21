<template>
  <div class="grid-core" :class="navigation">
    <core-sub class="core-sub-1"></core-sub>
    <core-main class="core-main-1">
      <!-- First screen -->
      <h1>Code Parenthesis<span>_</span></h1>
      <img src="../../assets/grid/proto1.png" alt="">
      <p>Enlightenment leads to benightedness, science entails nescience.</p>
      <p>Welcome to Code Parenthesis.<br>
      This site is built for technical sharing.<br>
      Use up and down arrow keys or mouse wheel to navigate. <br>
      Enjoy it!</p>
    </core-main>
    <core-sub class="core-sub-2"></core-sub>
    <core-main class="core-main-2">
      <!-- Second screen -->
      <h1>Code Library &amp; Blog</h1>
    </core-main>
    <core-sub class="core-sub-3"></core-sub>
    <core-main class="core-main-3">
      <!-- Third screen -->
      <h1>Mathematics &amp; Algorithm</h1>
    </core-main>
    <core-sub class="core-sub-4"></core-sub>
    <core-main class="core-main-4">
      <!-- Fourth screen -->
      <h1>APP Laboratory</h1>
      <router-link to="werewolves">Werewovles</router-link>
      <router-link to="solitaire">Solitaire</router-link>
    </core-main>
    <core-sub class="core-sub-5"></core-sub>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CoreMain from './CoreMain.vue'
import CoreSub from './CoreSub.vue'

export default {
  components: {
    CoreMain,
    CoreSub
  },
  computed: {
    ...mapState([
      'navigationFrom'
    ]),
    navigation () {
      return {
        'navigation-page1': this.navigationFrom === 1,
        'navigation-page2': this.navigationFrom === 2,
        'navigation-page3': this.navigationFrom === 3,
        'navigation-page4': this.navigationFrom === 4
      }
    }
  }
}
</script>

<style lang="less">
@import url(../../assets/grid/navigationPosition.less);

.core-main-1 .core-main-grid {
  background: url(../../assets/grid/core1.png);
  background-size: cover;
}

.core-main-2 .core-main-grid {
  background: url(../../assets/grid/core2.png);
  background-size: cover;
}

.core-main-3 .core-main-grid {
  background: url(../../assets/grid/core3.png);
  background-size: cover;
}

.core-main-4 .core-main-grid {
  background: url(../../assets/grid/core4.png);
  background-size: cover;
}

.core-main-1 .core-main-content {
  h1 {
    margin-left: 1vh;
    color: #00d09c;
    font-size: 6vh;
    width: 79.8vh;
    span {
      animation: text-flicker 1s ease infinite;
    }
  }
  img:first-of-type {
    margin-left: 1vh;
    width: 80vh;
  }
  p:first-of-type {
    margin: 0 0 0 1.1vh;
    font-size: 2vh;
  }
  p:last-of-type {
    margin: 3.5vh 0 0 1vh;
    width: 100vh;
    font-size: 2.4vh;
  }
}

.core-main-2 .core-main-content {
  h1 {
    color: #00a97f;
    font-size: 6vh;
  }
}

.core-main-3 .core-main-content {
  h1 {
    color: #fff;
    font-size: 6vh;
  }
}

.core-main-4 .core-main-content {
  h1 {
    color: #004735;
    font-size: 6vh;
  }
}
</style>
