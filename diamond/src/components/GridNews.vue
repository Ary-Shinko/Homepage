<template>
  <div id="news">
    <div class="grid-unit"></div>
    <news></news>
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
@import url(../assets/measure.less);

#news {
  &>div:first-child {
    z-index: 5;
    position: fixed;
    top: @TRANSLATE_NEWS_Y;
    left: @TRANSLATE_NEWS_X;
  }
}
</style>
