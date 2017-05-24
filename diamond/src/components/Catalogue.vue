<template>
  <div class="catalogue">
    <div class="navbar">
      <div class="nav nav1" @click='modifyNavigation(1)'></div>
      <div class="nav nav2" @click='modifyNavigation(2)'></div>
      <div class="nav nav3" @click='modifyNavigation(3)'></div>
      <div class="nav nav4" @click='modifyNavigation(4)'></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'modifyNavigation'
    ])
  }
}
</script>

<style lang="less">
.catalogue {
  .navbar {
    z-index: 122;
    position: absolute;
    bottom: 0vh;
    left: 0vh;
    width: 50vh;
    height: 50vh;
    transform: rotate(-90deg);
    .nav {
      width: 2.4vh;
      height: 2.4vh;
      margin: 6vh 4vh;
      border-radius: 1.2vh;
      cursor: pointer;
      &:hover {
        animation: red-pulse-bg 1s ease infinite;
      }
    }
    .nav1 {
      background: #000;
    }
    .nav2 {
      background: #111;
    }
    .nav3 {
      background: #222;
    }
    .nav4 {
      background: #333;
    }
  }
}

@keyframes red-pulse-bg {
  0% {
    background: #f33;
  }
  5% {
    background: #833;
  }
  10% {
    background: #f33;
  }
}
</style>
