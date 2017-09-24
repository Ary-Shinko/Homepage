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
      <h1><router-link to="blog">Code Library &amp; Blog<span>[ More... ]</span></router-link></h1>
      <core-article-list>
        <core-article to="/solitaire" back-ground="1">Build an authentication system<br>Ary 2017/08/20 Authentication / JWT / Vue-router / Backend</core-article>
        <core-article to="/solitaire" back-ground="2">Guide for using SMS(Short Message Service) API<br>Ary 2017/08/30 Mobile / SMS / Node.js / Backend</core-article>
        <core-article to="/solitaire" back-ground="3">CSS3 topic: background<br>Ary 2017/09/06 CSS3 / Background / Frontend</core-article>
        <core-article to="/solitaire" back-ground="4">ES6 topic: Promise<br>Ary 2017/09/19 Javascript / ES6 / Promise / Frontend</core-article>
        <core-article to="/solitaire" back-ground="5">Colorize.js: colorful console log<br>Ary 2017/09/24 Lib / Node.js / Console / Backend</core-article>
      </core-article-list>
    </core-main>
    <core-sub class="core-sub-3"></core-sub>
    <core-main class="core-main-3">
      <!-- Third screen -->
      <h1><router-link to="algorithm">Mathematics &amp; Algorithm<span>[ More... ]</span></router-link></h1>
      <core-article-list theme="grey">
        <core-article to="/solitaire" back-ground="6"><del>Consectetur adipisicing elit. Nihil, repellendus?</del><br>Ary 2017/09/05 Solitaire / Game / Poker</core-article>
        <core-article to="/solitaire" back-ground="7"><del>A harum amet doloremque vel reprehenderit itaque modi, officia.</del><br>Ary 2017/09/05 Solitaire / Game / Poker</core-article>
        <core-article to="/solitaire" back-ground="8"><del>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, repellendus?</del><br>Ary 2017/09/05 Solitaire / Poker</core-article>
        <core-article to="/solitaire" back-ground="9"><del>Deleniti, magni ratione rerum paqui iure nesciunt.</del><br>Ary 2017/09/05 Solitaire / Game / Com</core-article>
        <core-article to="/solitaire" back-ground="10"><del>Sapiente accusamus aperiam error.</del><br>Ary 2017/09/05 Solitaire / Game / Poker</core-article>
      </core-article-list>
    </core-main>
    <core-sub class="core-sub-4"></core-sub>
    <core-main class="core-main-4">
      <!-- Fourth screen -->
      <h1><router-link to="app">APP Laboratory<span>[ More... ]</span></router-link></h1>
      <core-article-list theme="white">
        <core-article to="/werewolves" back-ground="11">Werewolves<br>Ary 2017/08/13 Werewolves / Multiplayer Game / Social</core-article>
        <core-article to="/solitaire" back-ground="12">Solitaire "Texas Hold'em Poker"<br>Ary 2017/09/05 Solitaire / Game / Poker</core-article>
        <core-article to="/shadowsocks" back-ground="13">Shadowsocks proxy<br>Ary 2017/09/27 Shadowsocks / Network / Proxy</core-article>
        <core-article to="/tarot" back-ground="14"><del>Tarot, divination and fortune telling</del><br>Ary 20XX/XX/XX Tarot / Game / Divination</core-article>
        <core-article to="/tapcity" back-ground="15"><del>Tapcity, to be a mayor as city manager</del><br>Ary 20XX/XX/XX Tapcity / Game / Low-poly</core-article>
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
      'navigationFrom'
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
