<template>
  <div v-if="winCondition" >
    <span v-if="winCondition !== 'patta'">
      ha vinto il giocatore
    </span>
    {{ winCondition }} -
    <span @click="gameReset">reset</span>
  </div>
</template>

<script>
export default {
  name: 'winPopup',
  data: () => {
    return {
      // no data there ( for now )
    }
  },
  props: {
    winCondition: {
      type: String,
      default: undefined
    }
  },
  methods: {
    gameReset: function () {
      this.$emit('gameReset')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
