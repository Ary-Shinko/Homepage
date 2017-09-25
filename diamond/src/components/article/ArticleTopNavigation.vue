<template>
  <div class="article-top-navigation">
    <a v-if="!searchShow" @click="searchShow = true"><del>Search</del></a>
    <input v-if="searchShow" @keyup.enter="searchShow = false" type="text" placeholder="Input keywords that you will search">
    <a class="article-top-navigation-close" v-if="searchShow" @click="searchShow = false">X</a>
    <router-link to="/article/blog">Blog</router-link>
    <router-link to="/article/algorithm">Algorithm</router-link>
    <router-link to="/article/app">APP</router-link>
    <user-tag name-only="true" class="article-user-tag"></user-tag>
  </div>
</template>

<script>
import UserTag from '../UserTag.vue'

export default {
  components: {
    UserTag
  },
  data () {
    return {
      searchShow: false
    }
  }
}
</script>

<style lang="less">
.article-top-navigation {
  position: relative;
  float: left;
  z-index: 30;
  padding-left: 1rem;
  padding-top: 1.2rem;
  height: 1.8rem;
  width: ~'calc(100% - 13rem)';
  a {
    float: left;
    margin-top: -3px;
    padding-right: 4rem;
    height: 1.5rem;
    font-size: .8rem;
    font-weight: 800;
    text-shadow: none;
    color: #213040 !important;
    transition: all .3s ease;
    text-decoration: none !important;
    user-select: none;
    &:hover {
      margin-top: ~'calc(-3px - .1.5rem)';
      font-size: 1rem;
      color: #213040 !important;
    }
  }
  input {
    position: absolute;
    left: 1rem;
    top: ~'calc(3px + .66rem)';
    padding-bottom: .2rem;
    padding-right: 1.3rem;
    height: 1.2rem;
    width: ~'calc(100vw - 33.3rem)';
    font-size: .8rem;
    color: #666;
    font-weight: 800;
    border: none;
    outline: none !important;
    border-bottom: 3px solid #213040;
    animation: border-bottom .5s ease forwards;
    font-family: 'Roboto Mono', 'SourceHanSansCN', sans-serif;
    &::placeholder {
      color: #ccc;
    }
  }
  .article-top-navigation-close {
    position: absolute;
    z-index: 10;
    margin-left: ~'calc(100vw - 33rem)';
    margin-top: -.4rem;
    font-size: 1rem;
    color: #213040 !important;
  }
  .article-user-tag {
    .user-tag-name {
      position: absolute;
      top: 1.2rem;
      right: 3rem;
      font-size: .8rem;
      font-weight: 800;
      color: #213040 !important;
      transition: all .3s ease;
      text-decoration: none !important;
      text-align: center;
      &:hover {
        top: 1.14rem;
        font-size: 1rem;
      }
    }
  }
}

@keyframes border-bottom {
  0% {
    border-bottom: 3px solid #fff;
  }
  100% {
    border-bottom: 3px solid #213040;
  }
}
</style>
