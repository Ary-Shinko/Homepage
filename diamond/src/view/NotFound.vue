<template>
  <router-link id="not-found" tag="div" to="" @click.native="$router.push('/index')">
    <h1>Page not found 404 <span>(click to redirect to home page)</span></h1>
  </router-link>
</template>

<script>
export default {
}
</script>

<style lang="less">
#not-found {
  padding-top: 43vh;
  height: 100vh;
  text-align: center;
  cursor: pointer;
  h1 {
    padding-left: 2vh;
    background: #f33;
  }
  span {
    font-size: 3vh;
  }
}
</style>
