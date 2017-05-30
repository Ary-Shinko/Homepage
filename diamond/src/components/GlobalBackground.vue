<template>
  <div id="background"></div>
</template>

<script>
export default {
}
</script>

<style>
#background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: url(../assets/bg1.jpg);
  animation: background-hover 2.5s steps(5) infinite;
}

@keyframes background-hover {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 100% 0;
  }
  50% {
    background-position: 0 100%;
  }
  75% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
