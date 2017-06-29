<template>
  <div class="card-table" @keypress.ctrl="reset" @contextmenu="showMenu" @click="hideMenu">
      <div class="controller" ref="cardMenu">
        <button @click="reset">RESET</button>
        <button @click="deal(1)">DEAL</button>
        <button @click="shuffle(cards)">SHUFFLE CARDS</button>
        <button @click="shuffle(deck)">SHUFFLE DECK</button>
        <button @click="sort(cards)">SORT CARDS</button>
      </div>
      <transition-group tag="div" class="table-deck" name="fade">
        <card v-for="item of deck"
        :key="'card' + (item[0] + item[1])"
        :shape="item[0]"
        :point="item[1]"
        :active="false"
        @click.native="deal([item[0], item[1]])"></card>
      </transition-group>
      <p id="card-deck-counter" v-if="deck.length">x<span>{{ deck.length }}</span></p>
      <transition-group tag="div" class="table-player" name="fade">
        <card 
        v-for="item of cards"
        :key="'card' + (item[0] + item[1])"
        :shape="item[0]"
        :point="item[1]"
        :active="true"></card>
      </transition-group>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },
  data () {
    return {
      cards: [],
      deck: [],
      timer: 0
    }
  },
  methods: {
    create () {
      let shapes = [0, 13, 26, 39]
      let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      clearTimeout(this.timer)
      this.cards = []
      this.deck = []
      for (let shape of shapes) {
        for (let point of points) {
          this.deck.push([shape, point])
        }
      }
    },
    reset () {
      this.create()
      this.shuffle(this.deck)
      this.deal(5)
    },
    shuffle (array) {
      for (let i = 0; i < array.length; i++) {
        array.push(...array.splice(Math.floor((array.length - i) * Math.random()), 1))
      }
    },
    deal (n) {
      if (typeof n === 'object') {
        this.cards.push(...this.deck.splice(this.deck.findIndex(v => {
          return v[0] === n[0] && v[1] === n[1]
        }), 1))
      } else if (typeof n === 'number' && n > 0) {
        this.cards.push(this.deck.pop())
        if (this.deck.length !== 0) {
          this.timer = setTimeout(function () {
            this.deal(n - 1)
          }.bind(this), 200)
        }
      }
    },
    sort (array) {
      array.sort((a, b) => {
        return a[0] + a[1] - b[0] - b[1]
      })
    },
    showMenu (e) {
      e.preventDefault()
      let menu = this.$refs.cardMenu
      let maxY = document.body.clientHeight - 152
      let maxX = document.body.clientWidth - 182
      console.log(maxX)
      menu.style.top = (e.clientY > maxY ? maxY : e.clientY) + 'px'
      menu.style.left = (e.clientX > maxX ? maxX : e.clientX) + 'px'
      menu.style.visibility = 'visible'
      menu.style.opacity = 1
    },
    hideMenu () {
      let menu = this.$refs.cardMenu
      menu.style.visibility = 'hidden'
      menu.style.opacity = 0
    }
  },
  mounted () {
    this.reset()
  }
}
</script>

<style lang="less">
.card-table {
  padding: 12vh 5vw;
  width: 90vw;
  height: 76vh;
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

.table-player {
  display: flex;
  flex-flow: row wrap;
  
}

.table-deck {
  display: flex;
  float: left;
  flex-flow: row wrap;
}

#card-deck-counter {
  display: inline-block;
  margin: 46px 0 0;
  font-size: 48px;
  color: #fff;
  span {
    margin-left: 0.6rem;
  }
}

.controller {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  border: 1px solid #eee;
  box-shadow: 0 0 3px -1px #111;
  transition: opacity .1s linear, visibility .1s linear;
  button {
    display: block;
    width: 180px;
    height: 30px;
    color: #396;
    outline: none;
    border: none;
    text-align: left;
    text-indent: 1em;
    background: #fff;
    cursor: pointer;
    &:hover {
      color: #fff;
      background: #396;
    }
  }
}
</style>
