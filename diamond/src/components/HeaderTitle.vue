<template>
  <div class="header-title" :style="{background: backgroundColor}">
    <h2 :style="{color: mainColor}"><slot></slot></h2>
    <h3 :style="{color: subColor}">Code Parenthesis<span>_</span></h3>
    <logo></logo>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  },
  props: ['mainColor', 'subColor', 'bgColor'],
  data () {
    return {
      backgroundColor: this.bgColor === 'black' ? 'linear-gradient(90deg, rgba(0,0,0,0.3) 25%, transparent 50%)' : 'linear-gradient(90deg, rgba(255,255,255,0.6) 25%, transparent 50%)'
    }
  }
}
</script>

<style lang="less">
.header-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10vh;
  z-index: 10;
  padding-left: 11.4vh;
  padding-top: 0.8vh;
  font-size: 3vh;
  transition: opacity .3s ease;
  cursor: default;
  h3 {
    font-size: 3vh;
    font-weight: lighter;
    margin: 0;
    color: #fbb;
    span {
      animation: text-flicker 1s ease infinite;
    }
  }
  h2 {
    font-size: 4vh;
    margin: 0;
    color: #f33;
  }
}
</style>
