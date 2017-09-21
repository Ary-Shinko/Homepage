<template>
  <div class="catalogue">
    <div class="catalogue-navbar" :class="navigation">
      <div class="catalogue-dot catalogue-dot1" @click="modifyNavigation(1)"></div>
      <div class="catalogue-dot catalogue-dot2" @click="modifyNavigation(2)"></div>
      <div class="catalogue-dot catalogue-dot3" @click="modifyNavigation(3)"></div>
      <div class="catalogue-dot catalogue-dot4" @click="modifyNavigation(4)"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'navigationTo'
    ]),
    navigation () {
      return {
        'navigation-dot1': this.navigationTo === 1,
        'navigation-dot2': this.navigationTo === 2,
        'navigation-dot3': this.navigationTo === 3,
        'navigation-dot4': this.navigationTo === 4
      }
    }
  },
  methods: {
    ...mapActions([
      'modifyNavigation'
    ])
  }
}
</script>

<style lang="less">
.catalogue-navbar {
  z-index: 12;
  position: absolute;
  bottom: 0vh;
  left: 0vh;
  width: 50vh;
  height: 50vh;
  transform: rotate(-90deg);
  .catalogue-dot {
    width: 2.4vh;
    height: 2.4vh;
    margin: 6vh 4vh;
    border-radius: 1.2vh;
    cursor: pointer;
  }
  .catalogue-dot1 {
    background: #000;
    &:hover::after {
      content: '{ Home }';
      display: block;
      padding-left: 6vh;
      width: 60vh;
      transform: rotate(45deg);
      transform-origin: 4% 0;
    }
  }
  .catalogue-dot2 {
    background: #111;
    &:hover::after {
      content: '{ Code Library & Blog }';
      display: block;
      padding-left: 6vh;
      width: 60vh;
      transform: rotate(45deg);
      transform-origin: 3.9% 0;
    }
  }
  .catalogue-dot3 {
    background: #222;
    &:hover::after {
      content: '{ Mathematics & Algorithm }';
      display: block;
      padding-left: 6vh;
      width: 60vh;
      transform: rotate(45deg);
      transform-origin: 3.8% 0;
    }
  }
  .catalogue-dot4 {
    background: #333;
    &:hover::after {
      content: '{ APP Laboratory }';
      display: block;
      padding-left: 6vh;
      width: 60vh;
      transform: rotate(45deg);
      transform-origin: 3.7% 0;
    }
  }
}

.navigation-dot1 {
  div:nth-child(1) {
    animation: red-pulse 2s ease forwards;
  }
}

.navigation-dot2 {
  div:nth-child(2) {
    animation: red-pulse 2s ease forwards;
  }
}

.navigation-dot3 {
  div:nth-child(3) {
    animation: red-pulse 2s ease forwards;
  }
}

.navigation-dot4 {
  div:nth-child(4) {
    animation: red-pulse 2s ease forwards;
  }
}
</style>
