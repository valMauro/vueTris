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
      v-if="clicked && turn === 'o'"
    >
  </div>
</template>

<script>
export default {
  name: 'trisSingleBox',
  data: () => {
    return {
      clicked: false,
      turn: '',
      data: {}
    }
  },
  props: {
    number: {
      type: Number
    },
    actualMossa: {
      type: String
    }
  },
  methods: {
    doTurn: function () {
      if (this.clicked) {
        return
      }

      this.$parent.updateMossa()
      this.clicked = true
      this.turn = this.actualMossa

      this.data.cell = this.number
      this.data.turn = this.turn
      console.log('data --> ', this.data)
      this.$emit('cellClicked', this.data)
      console.log('evento sparato')
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
