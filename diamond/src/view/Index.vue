<template>
  <div id="index">
    <div class="content">DOCU</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import url(../assets/measure.less);

#index {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12vh 5vh 5vh;
  background: rgba(255, 255, 255, 0.7);
  .content {
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 3px 0 #555;
  }
}
</style>
