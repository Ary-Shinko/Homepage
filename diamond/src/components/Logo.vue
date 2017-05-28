<template>
  <div class="logo">
    <router-link to="/">{}</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.logo {
  &:hover+div {
    background: url(../assets/bg2.png);
    animation: border-breathing 5s ease infinite, background-hover 5s steps(10) infinite;
  }
  a {
    position: fixed;
    top: -1.5vh;
    left: -0.5vh;
    font-size: 10vh;
    z-index: 10;
    letter-spacing: -1.5vh;
    text-decoration: none;
    &:link {
      color: #000;
    }
    &:visited {
      color: #333;
    }
    &:hover {
      color: #fff;
      text-shadow: 0 0 2vh #fff;
    }
    &:active {
      color: #000;
    }
  }
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
