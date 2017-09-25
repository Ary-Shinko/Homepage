<template>
  <div class="article-main">
    <article-main-view></article-main-view>
    <article-main-bottom></article-main-bottom>
  </div>
</template>

<script>
import ArticleMainView from './ArticleMainView.vue'
import ArticleMainBottom from './ArticleMainBottom.vue'

export default {
  components: {
    ArticleMainBottom,
    ArticleMainView
  }
}
</script>

<style>
.article-main {
  padding-top: 6rem;
  padding-bottom: 3rem;
}
</style>
