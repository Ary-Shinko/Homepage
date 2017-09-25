<template>
  <div class="logo">
    <router-link to="/">{ }</router-link>
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
    top: -0.5vh;
    left: 0.5vh;
    font-size: 8vh;
    font-weight: 800;
    z-index: 20;
    letter-spacing: -2.3vh;
    user-select: none;
    &:link {
      color: #333;
    }
    &:visited {
      color: #333;
    }
    &:hover {
      color: #fff;
      text-decoration: none;
      text-shadow: 0 0 2vh #aaa;
    }
    &:focus {
      outline: none;
      text-decoration: none;
    }
  }
}
</style>
