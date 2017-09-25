<template>
  <div class="article-top-logo">
    <div class="article-top-logo-shelter"><img class="article-top-logo-img" src="../../assets/article/logo.png" alt="Back to homepage" @click="$router.push('/')"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.article-top-logo {
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
    position: relative;
    z-index: 20;
    left: 0.25rem;
    top: 0.25rem;
    width: 5.5rem;
    height: 5.5rem;
    cursor: pointer;
    user-select: none;
  }
}
</style>
