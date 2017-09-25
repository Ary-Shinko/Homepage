<template>
  <div class="scroll-bar">
    <div class="scroll-bar-measure" :style="{ right: scrollValue + '%' }"></div>
  </div>
</template>

<script>
  export default {
    props: ['scrollValue']
  }
</script>

<style>
.scroll-bar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #fff;
}

.scroll-bar-measure {
  position: fixed;
  z-index: 99;
  left: 0;
  right: 100%;
  height: 3px;
  background: #e74c3c; 
}
</style>
