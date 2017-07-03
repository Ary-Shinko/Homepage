<template>
  <transition-group tag="div" class="player-cards" name="fade">
    <card v-for="(card, index) of cardObsolete" :key="'card' + (card.suit + card.point)" :card="card" :index="index"></card>
    <card v-for="(card, index) of cardPlayer" :key="'card' + (card.suit + card.point)" :card="card" :index="index"></card>
  </transition-group>
</template>

<script>
import { mapState } from 'vuex'

import Card from './Card.vue'

export default {
  components: {
    Card
  },
  computed: {
    ...mapState([
      'cardPlayer',
      'cardObsolete'
    ])
  }
}
</script>

<style lang="less">
.player-cards {
  &:after {
    content: ".";
    display: block;
    font-size: 0;
    clear: both;
  }
  .card {
    float: left;
    margin-right: 12px;
  }
  .fade-leave-active {
    position: absolute;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .fade-move {
    transition: all .2s;
  }
}
</style>
