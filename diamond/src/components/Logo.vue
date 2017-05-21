<template>
  <div class="logo">
    <a href="/">{}</a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.logo {
  a {
    position: fixed;
    top: -2vh;
    left: -0.8vh;
    font-size: 11vh;
    z-index: 10;
    letter-spacing: -1.5vh;
    text-shadow: 0 0 1vh #000;
    text-decoration: none;
    &:link {
      color: #888;
    }
    &:visited {
      color: #888;
    }
    &:hover {
      animation: red-pulse 1s ease infinite;
    }
    &:active {
      color: #888;
    }
  }
}

@keyframes red-pulse {
  0% {
    color: red;
  }
  5% {
    color: lightcoral;
  }
  10% {
    color: red;
  }
}
</style>
