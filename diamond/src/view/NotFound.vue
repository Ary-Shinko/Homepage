<template>
  <router-link id="not-found" tag="div" to="" @click.native="$router.go(-1)">
    <h1>PAGE NOT FOUND 404, CLICK ANYWHERE TO RETURN TO THE PREVIOUS PAGE</h1>
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
  cursor: pointer;
  h1 {
    padding-left: 2vh;
    background: #f33;
  }
}
</style>
