<template>
<div class="card" :class="flipable ? '' : 'card-deck'" @click="flip">
  <transition name="flip">
    <div class="card-front" v-show="orientation" :style="{ color: shape % 26 === 0 ? 'black' : 'red' }">
      <p unselectable="on">{{ shapeChar[shape] }}<br>{{ pointChar[point - 1] }}</p>
    </div>
  </transition>
  <transition name="flip">
    <div class="card-back" v-show="!orientation"></div>
  </transition>
</div>

</template>

<script>
export default {
  data () {
    return {
      orientation: this.active,
      flipable: this.active,
      shapeChar: {'0': '♠', '13': '♥', '26': '♣', '39': '♦'},
      pointChar: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    }
  },
  props: ['shape', 'point', 'active'],
  methods: {
    flip () {
      if (this.flipable) {
        this.orientation = !this.orientation
      }
    }
  }
}
</script>

<style lang="less">
.card {
  margin: 10px;
  width: 60px;
  height: 86px;
  flex: 0 1 auto;
  transition: all .2s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-15px);
  }
  p {
    margin: 0;
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;
    user-select: none;
  }
}

.card-front {
  position: absolute;
  width: 60px;
  height: 86px;
  border: 1px solid #111;
  border-radius: 5px;
  background-color: #fff;
}

.card-back {
  position: absolute;
  width: 60px;
  height: 86px;
  border: 1px solid #111;
  border-radius: 5px;
  background-image: url("../../assets/poker/pokerBack.jpg");
  background-size: cover;
}

.card-deck:not(:first-child) {
  margin-left: -68px;
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
