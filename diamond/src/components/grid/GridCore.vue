<template>
  <div class="grid-core" :class="navigation">
    <core-sub class="core-sub-1"></core-sub>
    <core-main class="core-main-1">
      <!-- First screen -->
      <h1>Code Parenthesis<span>_</span></h1>
      <img src="../../assets/grid/proto1.png" alt="">
      <p>Enlightenment leads to benightedness, science entails nescience.</p>
      <p>Welcome to Code Parenthesis.<br>
      This site is built for technical sharing.<br>
      Use up and down arrow keys or mouse wheel to navigate. <br>
      Enjoy it!</p>
    </core-main>
    <core-sub class="core-sub-2"></core-sub>
    <core-main class="core-main-2">
      <!-- Second screen -->
      <h1><router-link to="article/blog">Code Library &amp; Blog<span>[ More... ]</span></router-link></h1>
      <core-article-list>
        <core-article :to="'/article/blog/' + articleData.blog1.title" back-ground="1">{{ articleData.blog1.title }}<br>{{ articleData.blog1.misc }}</core-article>
        <core-article :to="'/article/blog/' + articleData.blog2.title" back-ground="2">{{ articleData.blog2.title }}<br>{{ articleData.blog2.misc }}</core-article>
        <core-article :to="'/article/blog/' + articleData.blog3.title" back-ground="3">{{ articleData.blog3.title }}<br>{{ articleData.blog3.misc }}</core-article>
        <core-article :to="'/article/blog/' + articleData.blog4.title" back-ground="4">{{ articleData.blog4.title }}<br>{{ articleData.blog4.misc }}</core-article>
        <core-article :to="'/article/blog/' + articleData.blog5.title" back-ground="5">{{ articleData.blog5.title }}<br>{{ articleData.blog5.misc }}</core-article>
      </core-article-list>
    </core-main>
    <core-sub class="core-sub-3"></core-sub>
    <core-main class="core-main-3">
      <!-- Third screen -->
      <h1><router-link to="article/algorithm">Mathematics &amp; Algorithm<span>[ More... ]</span></router-link></h1>
      <core-article-list theme="grey">
        <core-article :to="'/article/algorithm/' + articleData.algorithm1.title" back-ground="6">{{ articleData.algorithm1.title }}<br>{{ articleData.algorithm1.misc }}</core-article>
        <core-article :to="'/article/algorithm/' + articleData.algorithm2.title" back-ground="7">{{ articleData.algorithm2.title }}<br>{{ articleData.algorithm2.misc }}</core-article>
        <core-article :to="'/article/algorithm/' + articleData.algorithm3.title" back-ground="8">{{ articleData.algorithm3.title }}<br>{{ articleData.algorithm3.misc }}</core-article>
        <core-article :to="'/article/algorithm/' + articleData.algorithm4.title" back-ground="9">{{ articleData.algorithm4.title }}<br>{{ articleData.algorithm4.misc }}</core-article>
        <core-article :to="'/article/algorithm/' + articleData.algorithm5.title" back-ground="10">{{ articleData.algorithm5.title }}<br>{{ articleData.algorithm5.misc }}</core-article>
      </core-article-list>
    </core-main>
    <core-sub class="core-sub-4"></core-sub>
    <core-main class="core-main-4">
      <!-- Fourth screen -->
      <h1><router-link to="article/app">App Laboratory<span>[ More... ]</span></router-link></h1>
      <core-article-list theme="white">
        <core-article :to="articleData.app1.url" back-ground="11"><del>{{ articleData.app1.title }}</del><br>{{ articleData.app1.misc }}</core-article>
        <core-article :to="articleData.app2.url" back-ground="12">{{ articleData.app2.title }}<br>{{ articleData.app2.misc }}</core-article>
        <core-article :to="articleData.app3.url" back-ground="13">{{ articleData.app3.title }}<br>{{ articleData.app3.misc }}</core-article>
        <core-article :to="articleData.app4.url" back-ground="14">{{ articleData.app4.title }}<br>{{ articleData.app4.misc }}</core-article>
        <core-article :to="articleData.app5.url" back-ground="15">{{ articleData.app5.title }}<br>{{ articleData.app5.misc }}</core-article>
      </core-article-list>
    </core-main>
    <core-sub class="core-sub-5"></core-sub>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import CoreMain from './CoreMain.vue'
import CoreSub from './CoreSub.vue'
import CoreArticleList from './CoreArticleList.vue'
import CoreArticle from './CoreArticle.vue'

export default {
  components: {
    CoreMain,
    CoreSub,
    CoreArticleList,
    CoreArticle
  },
  computed: {
    ...mapState([
      'navigationFrom',
      'articleData'
    ]),
    navigation () {
      return {
        'navigation-page1': this.navigationFrom === 1,
        'navigation-page2': this.navigationFrom === 2,
        'navigation-page3': this.navigationFrom === 3,
        'navigation-page4': this.navigationFrom === 4
      }
    }
  }
}
</script>

<style lang="less">
@import url(../../assets/grid/navigationPosition.less);

.core-main-1 .core-main-grid {
  background: url(../../assets/grid/core1.png);
  background-size: cover;
}

.core-main-2 .core-main-grid {
  background: url(../../assets/grid/core2.png);
  background-size: cover;
}

.core-main-3 .core-main-grid {
  background: url(../../assets/grid/core3.png);
  background-size: cover;
}

.core-main-4 .core-main-grid {
  background: url(../../assets/grid/core4.png);
  background-size: cover;
}

.core-main-1 .core-main-content {
  h1 {
    margin-left: 1vh;
    color: #00d09c;
    font-size: 6vh;
    width: 79.8vh;
    cursor: default;
    user-select: none;
    span {
      animation: text-flicker 1s ease infinite;
    }
  }
  img:first-of-type {
    margin-left: 1vh;
    width: 80vh;
  }
  p:first-of-type {
    margin: 0 0 0 1.1vh;
    font-size: 2vh;
  }
  p:last-of-type {
    margin: 3.5vh 0 0 1vh;
    width: 100vh;
    font-size: 2.4vh;
  }
}

.core-main-2 .core-main-content {
  h1 {
    font-size: 6vh;
    user-select: none;
    a {
      color: #00a97f;
      text-decoration: none !important;
      span {
        margin-left: 5vh;
        font-size: 2.4vh;
      }
    }
  }
  .core-main-more {
    margin-left: 45vh;
    padding: 0 4vh;
    font-weight: 800;
    color: #00a97f;
  }
}

.core-main-3 .core-main-content {
  h1 {
    font-size: 6vh;
    user-select: none;
    text-shadow: 0 0 3px #666;
    a {
      color: #f8f8f8;
      text-decoration: none !important;
      span {
        margin-left: 5vh;
        font-size: 2.4vh;
      }
    }
  }
  .core-main-more {
    margin-left: 45vh;
    padding: 0 4vh;
    font-weight: 800;
    color: #f8f8f8;
  }
}

.core-main-4 .core-main-content {
  h1 {
    font-size: 6vh;
    user-select: none;
    a {
      color: #004735;
      text-decoration: none !important;
      span {
        margin-left: 5vh;
        font-size: 2.4vh;
      }
    }
  }
  .core-main-more {
    margin-left: 45vh;
    padding: 0 4vh;
    font-weight: 800;
    color: #004735;
  }
}
</style>
