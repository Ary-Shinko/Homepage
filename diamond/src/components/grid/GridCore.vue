<template>
  <div class="grid-core" :class="navigation">
    <core-sub class="core-sub-1"></core-sub>
    <core-main class="core-main-1">
      <!-- First screen -->
      <h1>Code Parenthesis<span>_</span></h1>
      <img src="../../assets/grid/proto1.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis a, pariatur atque eaque incidunt deserunt id!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, ad animi corporis suscipit ratione quidem vero temporibus consequatur aspernatur commodi quam tempora eaque necessitatibus dignissimos eveniet fugit ipsum. Inventore nobis, veritatis dolores cumque consectetur! Cum maxime, animi aspernatur ad nesciunt atque perspiciatis maiores nostrum accusantium, adipisci veritatis impedit iste! Recusandae.</p>
    </core-main>
    <core-sub class="core-sub-2"></core-sub>
    <core-main class="core-main-2">
      <!-- Second screen -->
      <h1>Architecture &amp; Design</h1>
    </core-main>
    <core-sub class="core-sub-3"></core-sub>
    <core-main class="core-main-3">
      <!-- Third screen -->
      <h1>Coding &amp; Algorithm</h1>
    </core-main>
    <core-sub class="core-sub-4"></core-sub>
    <core-main class="core-main-4">
      <!-- Fourth screen -->
      <h1>Laboratory</h1>
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

.core-main-1 .core-main-content {
  h1 {
    color: #f33;
    font-size: 6vh;
    span {
      animation: text-flicker 1s ease infinite;
    }
  }
  img:first-of-type {
    float: left;
    margin: 2vh 0 0 0;
    width: 70vh;
  }
  p:first-of-type {
    float: left;
    margin: 2vh 0 0 5vh;
    width: 50vh;
  }
  p:nth-of-type(2) {
    clear: both;
    font-size: 2vh;
    margin: 25vh 0 0 0;
    width: 110vh;
  }
}

.core-main-2 .core-main-content {
  h1 {
    color: #f33;
    font-size: 6vh;
  }
}

.core-main-3 .core-main-content {
  h1 {
    color: #f33;
    font-size: 6vh;
  }
}

.core-main-4 .core-main-content {
  h1 {
    color: #f33;
    font-size: 6vh;
  }
}
</style>
