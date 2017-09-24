<template>
  <p class="core-article" @click="$router.push(to)" @mouseenter="setBackground(backgroundClass)" @mouseleave="clearBackground">
    <slot></slot>
  </p>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    to: {
      default: '/notfound'
    },
    backGround: {
      default: 'default'
    }
  },
  computed: {
    backgroundClass () {
      return 'core-article-background-' + this.backGround
    }
  },
  methods: {
    ...mapMutations({
      setBackground: 'MODIFY_NAVIGATION_BACKGROUND'
    }),
    clearBackground () {
      this.setBackground('')
    }
  }
}
</script>

<style lang="less">
.core-article {
  margin-top: 0;
  line-height: 2.5vh;
  font-size: 2vh;
  cursor: pointer;
  user-select: none;
  &::first-line {
    font-size: 2.4vh;
  }
  &:hover::first-line {
    text-decoration: underline;
  }
  &:first-child {
    width: 125vh;
  }
  &:nth-child(2) {
    width: 130vh;
  }
  &:nth-child(3) {
    width: 125vh;
  }
  &:nth-child(4) {
    width: 118vh;
  }
  &:nth-child(5) {
    width: 110vh;
  }
}

.core-article-background-1 {
  background-image: url(../../assets/image/1.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-2 {
  background-image: url(../../assets/image/2.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-3 {
  background-image: url(../../assets/image/3.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-4 {
  background-image: url(../../assets/image/4.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-5 {
  background-image: url(../../assets/image/5.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-6 {
  background-image: url(../../assets/image/6.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-7 {
  background-image: url(../../assets/image/7.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-8 {
  background-image: url(../../assets/image/8.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-9 {
  background-image: url(../../assets/image/9.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-10 {
  background-image: url(../../assets/image/10.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-11 {
  background-image: url(../../assets/image/11.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-12 {
  background-image: url(../../assets/image/12.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-13 {
  background-image: url(../../assets/image/13.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-14 {
  background-image: url(../../assets/image/14.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-15 {
  background-image: url(../../assets/image/15.png);
  animation: fade-in 1s ease forwards;
}

.core-article-background-default {
  background-image: url(../../assets/image/default.png);
  animation: fade-in 1s ease forwards;
}
</style>
