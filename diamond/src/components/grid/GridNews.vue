<template>
  <div class="grid-news">
    <news></news>
    <div class="g-grid-unit"></div>
  </div>
</template>

<script>
import News from './News.vue'

export default {
  components: {
    News
  }
}
</script>

<style lang="less">
@import url(../../assets/grid/navigationMeasure.less);

.grid-news {
  &>div:last-child {
    position: fixed;
    z-index: 5;
    top: @TRANSLATE_NEWS_Y;
    left: @TRANSLATE_NEWS_X;
  }
}
</style>
