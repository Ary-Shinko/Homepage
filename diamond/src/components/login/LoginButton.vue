<template>
  <div class="login-button">
    <a @click="$emit('click')">Sign in</a>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.login-button {
  position: fixed;
  z-index: 15;
  top: 1vh;
  right: 3vh;
}
</style>
