<template>
  <div class="article-main-view">
    <h1>{{ articleTitle }}</h1>
    <div v-if="!Array.isArray(articleCurrent.content)" v-html="articleCurrent.content"></div>
    <div v-if="Array.isArray(articleCurrent.content) && (articleCurrent.type === 'Blog' || articleCurrent.type === 'Algorithm')">
      <router-link tag="div" v-for="(detail, index) of articleCurrent.content" :key="index + 1" class="article-main-list" :to="'/article/' + detail.type.toLowerCase() + '/' + detail.title">
        <router-link class="article-main-list-title" :to="'/article/' + detail.type.toLowerCase() + '/' + detail.title">{{ detail.title }}</router-link>
        <p class="article-main-list-detail">{{ detail.author }} {{ detail.date }} {{ articleKeywords(detail.keywords) }}</p>
        <router-link class="article-main-list-url" :to="'/article/' + detail.type.toLowerCase() + '/' + detail.title">{{ 'https://arylab.me/article/' + detail.type.toLowerCase() + '/' + detail.title }}</router-link>
      </router-link>
    </div>
    <div v-if="Array.isArray(articleCurrent.content) && articleCurrent.type === 'App'">
      <router-link tag="div" v-for="(detail, index) of articleCurrent.content" :key="index + 1" class="article-main-list" :to="detail.license">
        <router-link class="article-main-list-title" :to="detail.license">{{ detail.title }}</router-link>
        <p class="article-main-list-detail">{{ detail.author }} {{ detail.date }} {{ articleKeywords(detail.keywords) }}</p>
        <router-link class="article-main-list-url" :to="detail.license">{{ 'https://arylab.me' + detail.license }}</router-link>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'articleCurrent'
    ]),
    articleTitle () {
      switch (this.$route.fullPath) {
        case '/article/blog':
          return 'Code Library & Blog'
        case '/article/algorithm':
          return 'Mathematics & Algorithm'
        case '/article/app':
          return 'App Laboratory'
        default:
          let pathMatch = decodeURIComponent(this.$route.fullPath).match(/^\/article\/(?:(?:algorithm)|(?:blog)|(?:app))\/(.*$)/)
          if (pathMatch) {
            return pathMatch[1]
          } else {
            return 'Illegal request'
          }
      }
    }
  },
  methods: {
    articleKeywords (keywordArray) {
      let joined = ''
      if (keywordArray[0] === '') {
        joined = '(No keyword)'
      } else {
        for (let keyword of keywordArray) {
          if (keyword) {
            joined = joined + keyword + ' / '
          } else {
            break
          }
        }
        joined = joined.replace(/ \/ $/, '')
      }
      return joined
    }
  }
}
</script>

<style lang="less">
.article-main-view {
  padding: 3rem;
  background: #fff;
  width: ~'calc(100vw - 12rem)';
  color: #213040;
  box-shadow: 0 4px 4px -5px #666;
  p {
    color: #383d43;
  }
  pre, xmp {
    padding: 1rem;
    font-size: 0.8rem;
    overflow: auto;
    background: #ddd;
  }
  code {
    padding: .1rem .5rem;
    font-size: 0.8rem;
    overflow: auto;
    background: #ddd;
  }
  img {
    max-width: 100%;
  }
  video {
    max-width: 100%;
  }
}

.article-main-list {
  margin-top: 1.5rem;
  padding: .5rem .5rem .5rem 0;
  transition: all .3s ease;
  cursor: pointer;
  &:hover {
    padding-left: 1rem;
    background: #eee;
  }
  .article-main-list-title {
    display: block;
    font-size: 1.2rem;
    font-weight: 800;
    color: #383d43;
  }
  .article-main-list-detail {
    margin: 0;
    font-weight: 800;
    font-size: .8rem;
    color: #383d43;
  }
  .article-main-list-url {
    margin: 0;
    font-size: .8rem;
    color: #383d43;
  }
}

.article-placeholder1 {
  .article-placeholder;
  width: ~'calc(100vw - 12rem)';
  animation: background-move1 2s linear infinite;
}

.article-placeholder2 {
  .article-placeholder;
  margin-bottom: 2.4rem;
  width: ~'calc((100vw - 12rem) * 0.382)';
  animation: background-move2 2s linear infinite;
}

.article-placeholder3 {
  .article-placeholder;
  margin-bottom: 2.4rem;
  width: ~'calc((100vw - 12rem) * 0.618)';
  animation: background-move3 2s linear infinite;
}

.article-placeholder {
  position: relative;
  top: .2rem;
  height: 1rem;
  background: linear-gradient(90deg, #f8f8f8, #eee, #f8f8f8);
}

@keyframes background-move1 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: ~'calc(100vw - 12rem) 0';
  }
}

@keyframes background-move2 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: ~'calc((100vw - 12rem) * 0.382) 0';
  }
}

@keyframes background-move3 {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: ~'calc((100vw - 12rem) * 0.618) 0';
  }
}
</style>
