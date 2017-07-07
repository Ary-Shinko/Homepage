<template>
  <div class="grid-background"></div>
</template>

<script>
export default {
}
</script>

<style>
.grid-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: url("../../assets/grid/bg1.jpg");
  animation: random-blink 2.5s steps(5) infinite;
}
</style>
