<template>
  <div id="app">
    <trisContainer
      :isReset="reset"
      @resetEnd="endReset"
      @winChanged="updateCondition"
    ></trisContainer>
    <winPopup
      :winCondition="win"
      @gameReset="newGame"
    >
    </winPopup>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      win: undefined,
      reset: false
    }
  },
  methods: {
    endReset: function () {
      console.log('aaaaaaaaa')
      this.reset = false
    },
    updateCondition: function (whoWin) {
      this.win = whoWin
    },
    newGame: function () {
      this.reset = true
      this.win = undefined
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
