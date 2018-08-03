<template>
  <div @click="doTurn()">
    <img src="../assets/letter-x.png" alt="x" class="hide" v-if="clicked && actualMossa === 'x'">
    <img src="../assets/tondo.png" alt="o" class="hide" v-if="clicked && actualMossa === 'o'">
  </div>
</template>

<script>
export default {
  name: 'trisSingleBox',
  data: () => {
    return {
      clicked: false
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
      this.$parent.updateMossa()
      this.clicked = true
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
