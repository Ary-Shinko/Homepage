<template>
  <div class="article">
    <div class="article-wrapper" @scroll="updateScroll">
      <scroll-bar :scrollValue="scrollValue"></scroll-bar>
      <article-top :scroll-top="scrollTop"></article-top>
      <article-main></article-main>
    </div>
  </div>
</template>

<script>
import ArticleTop from '../components/article/ArticleTop.vue'
import ArticleMain from '../components/article/ArticleMain.vue'
import ScrollBar from '../components/ScrollBar.vue'

export default {
  components: {
    ArticleTop,
    ArticleMain,
    ScrollBar
  },
  data () {
    return {
      scrollTop: 0,
      scrollHeight: 1
    }
  },
  computed: {
    scrollValue () {
      return 100 - this.scrollTop / this.scrollHeight * 100
    }
  },
  methods: {
    updateScroll (e) {
      this.scrollTop = e.target.scrollTop
      this.scrollHeight = e.target.scrollHeight - e.target.clientHeight
    }
  }
}
</script>

<style lang="less">  
.article {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: 'Roboto Mono', 'SourceHanSansCN', sans-serif;
  background: linear-gradient(180deg, #fff, #ddd);
}

.article-wrapper { 
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-left: 3rem; 
  padding-right: 3rem; 
  right: -18px;
  height: 100%;
}

@font-face {
  font-family: 'SourceHanSansCN';
  src: url(../../static/SourceHanSansCN-Normal.otf);
}
</style>
