<template>
  <div class="core-article-list" :class="coreTheme">
    <slot>
      <p>Content Loading...</p>
    </slot>
  </div>
</template>


<script>
export default {
  props: ['theme'],
  computed: {
    coreTheme () {
      if (this.theme === 'white') {
        return 'core-article-list-white'
      } else if (this.theme === 'gray' || this.theme === 'grey') {
        return 'core-article-list-grey'
      }
      return 'core-article-list-black'
    }
  }
}
</script>

<style lang="less">
.core-article-list {
  margin-top: -1vh;
  margin-left: .5vh;
}

.core-article-list-white {
  .core-article {
    color: #999;
    &::first-line {
      color: #f8f8f8;
      text-shadow: 0 0 3px #333;
    }
  }
}

.core-article-list-grey {
  .core-article {
    color: #ddd;
    &::first-line {
      color: #fff;
      text-shadow: 0 0 3px #666;
    }
  }
}

.core-article-list-black {
  .core-article {
    color: #777;
    &::first-line {
      color: #333;
    }
    &:hover::first-line {
      text-shadow: 1px 0 0 #fff,0 1px 0 #fff, -1px 0 0 #fff, 0 -1px 0 #fff; 
    }
  }
}
</style>
