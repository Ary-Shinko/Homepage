<template>
  <div id="logo"><a href="/">{}</a></div>
</template>
<script>
export default {
}
</script>
<style lang="less">
#logo{
  position:fixed;
  z-index: 1;
  top: -2vh;
  left: 0;
  font-size: 12vh;
  letter-spacing: -1.5vh;
  text-shadow: 0 0 8px #000;
  a {
    text-decoration: none;
    &:link{
      color: #888;
    }
    &:visited{
      color: #888;
    }
    &:hover {
      animation: redPulse 1s ease infinite;
    }
    &:active {
      color: #888;
    }
  }
}

@keyframes redPulse {
  0% {
    color: red;
  }
  5% {
    color: lightcoral;
  }
  10%{
    color: red;
  }
}
</style>
