<template>
  <transition name="fold">
    <div class="login-background" @click="$emit('click')"></div>
  </transition>
</template>

<script>
export default {
}
</script>

<style>
.login-background {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
}
</style>
