<template>
  <div class="login-button">
    <a @click="$emit('click')" :class="renderClass">{{ renderText }}</a>
  </div>
</template>

<script>
export default {
  computed: {
    renderText () {
      return this.loginActivated ? 'Close' : 'Sign in'
    },
    renderClass () {
      return this.loginActivated ? 'invert-activated' : ''
    }
  },
  props: [
    'loginActivated'
  ]
}
</script>

<style lang="less">
.login-button {
  position: fixed;
  z-index: 15;
  top: 1vh;
  right: 3vh;
}

.invert-activated {
  color: #fff;
  &:hover {
    color: #fff;
  }
  &:active {
    color: #aaa;
  }
}
</style>
