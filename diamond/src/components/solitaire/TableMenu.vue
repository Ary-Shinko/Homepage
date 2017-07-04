<template>
  <div class="table-menu" :style="{ top: coordinate.top + 'px', left: coordinate.left + 'px' }">
    <button @click="initSolitaire">START NEW GAME</button>
    <button @click="shuffleDeck">SHUFFLE DECK</button>
    <button @click="dealCard(5)">FILL HAND</button>
    <button @click="sortCardBySuit">SORT BY SUIT</button>
    <button @click="sortCardByPoint">SORT BY POINT</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  props: ['coordinate'],
  methods: {
    ...mapMutations({
      sortCardBySuit: 'SORT_CARD_BY_SUIT',
      sortCardByPoint: 'SORT_CARD_BY_POINT'
    }),
    ...mapActions([
      'initSolitaire',
      'shuffleDeck',
      'dealCard'
    ])
  }
}
</script>

<style lang="less">
.table-menu {
  position: fixed;
  border: 1px solid #eee;
  box-shadow: 0 0 3px -1px #111;
  button {
    display: block;
    width: 180px;
    height: 30px;
    outline: none;
    border: none;
    text-align: left;
    text-indent: 0.8em;
    color: #396;
    background: #fff;
    &:hover {
      animation: menu-flicker .5s ease forwards;
    }
  }
}

@keyframes menu-flicker {
  0% {
    color: #fff;
    background: #6fa;
  }
  100% {
    color: #fff;
    background: #396;
  }
}
</style>
