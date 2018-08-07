<template>
  <div @click="doTurn()">
    <img
      src="../assets/letter-x.png"
      alt="x"
      v-if="clicked && turn === 'x'"
    >
    <img
      src="../assets/tondo.png"
      alt="o"
      v-if="clicked && turn === 'o' "
    >
  </div>
</template>

<script>
const DATA = {
  turn: '',
  cell: undefined
}
export default {
  name: 'trisSingleBox',
  data: () => {
    return {
      clicked: false,
      turn: '',
      data: Object.assign({}, DATA)
    }
  },
  props: {
    number: {
      type: Number
    },
    actualMossa: {
      type: String
    },
    win: {
      type: String,
      default: undefined
    },
    reset: {
      type: Boolean
    }
  },
  methods: {
    doTurn: function () {
      if (this.clicked || this.win) {
        return
      }
      this.clicked = true
      this.turn = this.actualMossa

      this.data.cell = this.number
      this.data.turn = this.turn
      this.$emit('cellClicked', this.data)
    }
  },
  watch: {
    reset: function () {
      if (this.reset) {
        this.clicked = false
        this.turn = ''
        this.data = Object.assign({}, DATA)
      }
      this.$nextTick(
        function () {
          this.$emit('resetFinished')
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>

  div {
    height: 98px;
    width: 98px;
    border: 1px solid #ccc;
    flex-direction: row;
    cursor: pointer;

    img {
      height: 50px;
      width: 50px;
      margin-top: 25px;

      &.hide {
        display: none;
      }
    }
  }

</style>
