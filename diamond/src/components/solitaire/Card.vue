<template>
<div class="card" @click="flipCard">
  <transition name="flip">
    <div class="card-front" v-show="card.upwards" :style="{ color: card.suit % 26 === 0 ? '#000' : '#f33', background: card.available ? '#fff' : '#454', cursor: card.available ? 'pointer' : 'default' }">
      <p>{{ cardSuitChar[card.suit] }}<br>{{ cardPointChar[card.point - 1] }}</p>
    </div>
  </transition>
  <transition name="flip">
    <div class="card-back" v-show="!card.upwards"></div>
  </transition>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'cardSuitChar',
      'cardPointChar'
    ])
  },
  props: ['card', 'index'],
  methods: {
    flipCard () {
      if (this.card.flipable) {
        this.$store.commit('FLIP_CARD', this.index)
      }
    }
  }
}
</script>

<style lang="less">
@card-height: 13.2vh;

.card {
  margin: .8vh 0;
  width: 0.7 * @card-height;
  height: @card-height;
  flex: 0 1 auto;
  transition: transform .2s cubic-bezier(.2,.69,.29,.83);
  cursor: pointer;
  &:hover {
    transform: translateY(-15px);
  }
  p {
    margin: 0;
    font-size: 5vh;
    line-height: 6vh;
    text-align: center;
  }
}

.card-front {
  position: absolute;
  width: 0.7 * @card-height;
  height: @card-height;
  border: 1px solid #111;
  border-radius: 5px;
  transition: background-color 1s ease;
}

.card-back {
  position: absolute;
  width: 0.7 * @card-height;
  height: @card-height;
  border: 1px solid #111;
  border-radius: 5px;
  background-image: url("../../assets/solitaire/back.jpg");
  background-size: cover;
}

.flip-enter-active {
  animation: filp-enter .3s linear;
}

.flip-leave-active{
  animation: filp-leave .3s linear;
}

@keyframes filp-enter {
  0% {
    transform: rotateY(90deg);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0);
  }
}

@keyframes filp-leave {
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(90deg);
  }
}
</style>
