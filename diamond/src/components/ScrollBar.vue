<template>
  <div class="scroll-bar">
    <div class="scroll-bar-measure" :style="{ left: scrollValue + '%' }"></div>
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
  background: #81ffe0;
  background: linear-gradient(90deg, #81ffe0, #57ffe0); 
}

.scroll-bar-measure {
  position: fixed;
  z-index: 99;
  right: 0;
  left: 100%;
  height: 3px;
  background: #fff;
}
</style>
