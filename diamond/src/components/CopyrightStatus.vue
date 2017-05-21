<template>
  <div id="copyright">
    <span>Ethan Zhang © 2017</span>
    <span>Last Modified: 2017/5/21</span>
    <span>Completion: ------------------</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
#copyright {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding: 0.2vh 0.3vh 0.5vh;
  opacity: 0.95;
  background: #f33;
  span {
    margin-left: 7.9vh;
    color: #eee;
    font-size: 1.5vh;
  }
}
</style>
