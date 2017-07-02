<template>
  <div class="card-table" @contextmenu.prevent="showMenu" @click="hideMenu">
    <table-deck></table-deck>
    <table-player></table-player>
    <transition name="fade-fast">
      <table-menu v-show="contextMenu" :coordinate="contextCoordinate"></table-menu>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import TableDeck from './TableDeck.vue'
import TablePlayer from './TablePlayer.vue'
import TableMenu from './TableMenu.vue'

export default {
  data () {
    return {
      contextMenu: false,
      contextCoordinate: {
        top: 0,
        left: 0
      }
    }
  },
  components: {
    TableDeck,
    TablePlayer,
    TableMenu
  },
  methods: {
    ...mapActions([
      'initSolitaire'
    ]),
    showMenu (e) {
      let maxTop = document.body.clientHeight - 152
      let maxLeft = document.body.clientWidth - 182
      let currentTop = e.clientY
      let currentLeft = e.clientX
      this.contextCoordinate.top = currentTop > maxTop ? maxTop : currentTop
      this.contextCoordinate.left = currentLeft > maxLeft ? maxLeft : currentLeft
      this.contextMenu = true
    },
    hideMenu () {
      this.contextMenu = false
    }
  },
  mounted () {
    this.initSolitaire()
    window.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.hideMenu()
        e.stopPropagation()
      }
    }, true)
  }
}
</script>

<style lang="less">
.card-table {
  position: relative;
  padding-top: 10.8vh;
  width: 100vw;
  height: 89.2vh;
  user-select: none;
}
</style>
