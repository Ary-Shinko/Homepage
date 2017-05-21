<template>
  <div>
    <div class="login grid-unit"></div>
    <div class="login-content">
      <img class="deco" src="../assets/proto3.png" alt="">
      <div class="aaa"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
div.login {
  position: absolute;
  z-index: 5;
}

.login-content {
  position: absolute;
  z-index: 5;
  margin: -25vh 0 0 -25vh;
  width: 172vh;
  height: 172vh;
  // background: yellow;
  opacity: .8;
  img.deco {
    position: absolute;
    z-index: 5;
    margin: 25.5vh 0 0 18.5vh;
    width: 80vh;
  }
}
</style>
