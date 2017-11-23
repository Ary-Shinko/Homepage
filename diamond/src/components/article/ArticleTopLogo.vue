<template>
  <div class="article-top-logo">
    <div class="article-top-logo-shelter">
      <span class="article-top-logo-img" @click="$router.push('/')"></span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.article-top-logo {
  overflow: hidden;
  float: left;
  margin-left: 6rem;
  width: 6rem;
  height: 6rem;
  background: #fff;
  box-shadow: 0 0 20px -7px #000;
  .article-top-logo-shelter {
    width: 6rem;
    height: 6rem;
    &::before {
      content: ' ';
      position: absolute;
      margin-left: -1rem;
      width: 8rem;
      height: 3rem;
      background: #fff;
    }
  }
  .article-top-logo-img {
    display: inline-block;
    position: relative;
    z-index: 20;
    margin-left: 0.25rem;
    margin-top: 0.25rem;
    width: 5.5 * 32rem;
    height: 5.5rem;
    cursor: pointer;
    background: url(../../assets/article/logo.png);
    background-size: contain;
    user-select: none;
    &:hover {
      background: url(../../assets/article/logoAnimation.png);
      background-size: contain;
      animation: fake-animation 1s steps(32) infinite;
    }
  }
}

@keyframes fake-animation {
  0% {
    left: 0;
  }
  100% {
    left: -5.5 * 32rem;
  }
}

@media all and (orientation: portrait) {
  .article-top-logo {
    display: none;
  }
}
</style>
