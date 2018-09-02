<template>
  <div id="app">
    <trisContainer></trisContainer>
    <winPopup
      :winCondition="win"
      @gameReset="gameReset"
      @winChanged="updateCondition"> <!-- TODO: finire gli eventi    -->
    </winPopup>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      win: undefined
    }
  },
  methods: {
    updateCondition: function (whoWin) {
      this.win = whoWin
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
