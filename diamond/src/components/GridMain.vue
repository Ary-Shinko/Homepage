<template>
  <div id="main" :class="navigationObject">
    <login class="login1 absolute"></login>
    <core class="core1 absolute">
      <!-- First screen -->
      <h1>Code Parenthesis<span>_</span></h1>
      <img src="../assets/proto1.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis a, pariatur atque eaque incidunt deserunt id!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, ad animi corporis suscipit ratione quidem vero temporibus consequatur aspernatur commodi quam tempora eaque necessitatibus dignissimos eveniet fugit ipsum. Inventore nobis, veritatis dolores cumque consectetur! Cum maxime, animi aspernatur ad nesciunt atque perspiciatis maiores nostrum accusantium, adipisci veritatis impedit iste! Recusandae.</p>
    </core>
    <login class="login2 absolute"></login>
    <core class="core2 absolute">
      <!-- Second screen -->
      <h1>Architecture &amp; Design</h1>
    </core>
    <login class="login3 absolute"></login>
    <core class="core3 absolute">
      <!-- Third screen -->
      <h1>Coding &amp; Algorithm</h1>
    </core>
    <login class="login4 absolute"></login>
    <core class="core4 absolute">
      <!-- Fourth screen -->
      <h1>Laboratory</h1>
    </core>
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
@import url(../assets/position.less);

.absolute {
  position: absolute;
}

.core1 {
  .core-grid {
    position: absolute;
    z-index: 2;
    background: linear-gradient(45deg, #ddd, #fafafa);
  }
  .core-content {
    position: absolute;
    z-index: 4;
    width: 130vh;
    margin: 35vh 0 0 5vh;
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
}

@keyframes text-flicker {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.core2 {
  .core-grid {
    position: absolute;
    z-index: 2;
    background: linear-gradient(45deg, #ddd, #fff);
  }
  .core-content {
    position: absolute;
    z-index: 4;
    width: 130vh;
    margin: 35vh 0 0 5vh;
    h1 {
      color: #f33;
      font-size: 6vh;
    }
  }
}

.core3 {
  .core-grid {
    position: absolute;
    z-index: 2;
    background: linear-gradient(45deg, #ddd, #fff);
  }
  .core-content {
    position: absolute;
    z-index: 4;
    width: 130vh;
    margin: 35vh 0 0 5vh;
    h1 {
      color: #f33;
      font-size: 6vh;
    }
  }
}

.core4 {
  .core-grid {
    position: absolute;
    z-index: 2;
    background: linear-gradient(45deg, #ddd, #fff);
  }
  .core-content {
    position: absolute;
    z-index: 4;
    width: 130vh;
    margin: 35vh 0 0 5vh;
    h1 {
      color: #f33;
      font-size: 6vh;
    }
  }
}
</style>
