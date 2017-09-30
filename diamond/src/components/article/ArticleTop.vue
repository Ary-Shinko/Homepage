<template>
  <div ref="articleTop" class="article-top" :style="{ top: computedTop + 'px' }">
    <article-top-logo></article-top-logo>
    <article-top-navigation></article-top-navigation>
  </div>
</template>

<script>
import ArticleTopLogo from './ArticleTopLogo.vue'
import ArticleTopNavigation from './ArticleTopNavigation.vue'

export default {
  components: {
    ArticleTopLogo,
    ArticleTopNavigation
  },
  data () {
    return {
      nowTop: 0,
      lastTop: 0,
      limitTop: 0
    }
  },
  props: ['scrollTop'],
  computed: {
    computedTop () {
      if (this.limitTop === 0) {
        return 0
      }
      let deltaHeight = this.scrollTop - this.lastTop
      if (deltaHeight > 0) {
        if (deltaHeight < this.limitTop - this.nowTop) {
          this.nowTop = this.nowTop + deltaHeight
        } else {
          this.nowTop = this.limitTop
        }
      } else if (deltaHeight < 0) {
        if (this.nowTop + deltaHeight < 0) {
          this.nowTop = 0
        } else {
          this.nowTop = this.nowTop + deltaHeight
        }
      }
      this.lastTop = this.scrollTop
      return -this.nowTop
    }
  },
  mounted () {
    this.limitTop = this.$refs.articleTop.clientHeight * 2 + 10
  }
}
</script>

<style>
.article-top {
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  height: 3rem;
  background: #fff;
  box-shadow: 0 0 20px -7px #000;
}
</style>
