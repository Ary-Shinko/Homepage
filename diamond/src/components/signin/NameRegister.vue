<template>
  <div class="name-register">
    <input :class="[nameFilled, nameWrongFormat]" type="text" v-model="name" :tabindex="index" @input="validateInput" @blur="validate">
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      nameWrongFormat: ''
    }
  },
  computed: {
    nameFilled () {
      return this.name === '' ? '' : 'name-filled'
    }
  },
  props: ['index'],
  methods: {
    validateInput () {
      if (this.name.match(/[^\u4e00-\u9fa5\w]/i)) {
        this.nameWrongFormat = 'name-invalid-character'
      } else {
        let nameEnMatch = this.name.match(/\w/ig)
        let nameCnMatch = this.name.match(/[\u4e00-\u9fa5]/ig)
        let nameEnChar = nameEnMatch && nameEnMatch.length
        let nameCnChar = nameCnMatch && nameCnMatch.length
        let nameLength = nameEnChar + 2 * nameCnChar
        if (nameLength > 12 || nameLength < 3) {
          this.nameWrongFormat = 'name-out-of-range'
        } else {
          this.nameWrongFormat = 'name-right'
        }
      }
      if (this.name === '') {
        this.nameWrongFormat = 'name-undefined'
      }
    },
    validate () {
      if (this.name === '') {
        this.nameWrongFormat = 'name-undefined'
        this.$emit('valid', false)
      } else if (this.nameWrongFormat === 'name-right') {
        this.nameWrongFormat = ''
        this.$emit('valid', this.name)
      } else if (this.nameWrongFormat === '' && this.nameFilled) {
        this.$emit('valid', this.name)
      } else {
        this.$emit('valid', false)
      }
    }
  }
}
</script>

<style lang="less">
.name-register {
  position: fixed;
  z-index: 15;
  top: 30vh;
  height: 10vh;
  input {
    margin-top: 5vh;
    margin-bottom: 2px;
    width: 50vh;
    height: 5vh;
    border: none;
    border-bottom: 1px solid #333;
    background: transparent;
    font-family: 'Roboto Mono', Arial, sans-serif;
    transition: all .3s ease;
    &:focus {
      margin-bottom: 0;
      outline: none;
      border-bottom: 3px solid #333;
      transition: all .3s ease;
    }
    &+div {
      text-align: left;
    }
    &+div::after {
      .name-default;
      content: "Enter your name";
      margin-top: -4.8vh;
      color: #aaa;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .name-default;
      content: "Enter your name within 3~12 characters";
      margin-top: -8.4vh;
      color: #333;
      font-size: 2vh;
      font-weight: 800;
    }
  }
  input.name-filled {
    &+div::after {
      .name-default;
      content: "Right";
      margin-top: -4.8vh;
      opacity: 0;
      transition: all .3s ease;
    }
    &:focus+div::after {
      .name-default;
      content: "Right";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      font-weight: 800;
    }
  }
  input.name-invalid-character {
    &+div::after, &:focus+div::after {
      .name-default;
      content: "Name contains invalid character";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.name-out-of-range {
    &+div::after, &:focus+div::after {
      .name-default;
      content: "Name length is out of range";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.name-undefined {
    &+div::after, &:focus+div::after {
      .name-default;
      content: "Enter your name within 3~12 characters";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #f33;
      font-weight: 800;
    }
  }
  input.name-right {
    &+div::after, &:focus+div::after {
      .name-default;
      content: "Right";
      margin-top: -8.4vh;
      font-size: 2vh;
      opacity: 1;
      color: #00d09c;
      font-weight: 800;
    }
  }
}

.name-default {
  display: block;
  position: relative;
  z-index: -1;
}
</style>
