<template>
  <transition name="ease">
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
  background: rgba(0, 0, 0, 0.85);
}

.ease-enter-active,
.ease-leave-active {
  transition: all .3s linear;
}

.ease-enter,
.ease-leave-to {  
  opacity: 0;
}
</style>
