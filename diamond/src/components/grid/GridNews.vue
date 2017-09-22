<template>
  <div class="grid-news">
    <news></news>
    <div class="g-grid-unit grid-news-logo-border">
      <div class="grid-news-logo">
        <span>{ }</span>
      </div>
    </div>
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

.grid-news-logo-border {
  overflow: hidden;
}

.grid-news-logo {
  position: absolute;
  z-index: 10000;
  top: -14vh;
  left: -1vh;
  font-size: 32vh;
  font-weight: 800;
  letter-spacing: -9.3vh;
  text-align: center;
  color: #fff;
  transform: rotate(-45deg);
  cursor: default;
  user-select: none;
}
</style>
