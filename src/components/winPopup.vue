<template>
  <div v-if="winCondition" >
    <div class="overlay"></div>
    <div class="modal">
      <div class="modal-content">
        <span v-if="winCondition !== 'patta'">
          ha vinto il giocatore
        </span>
        {{ winCondition }} -
        <span class="reset" @click="gameReset">reset</span>
      </div>
    </div>
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
  div {

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #1b1717bd;
      z-index: 10;
    }

    .modal {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 400px;
      height: 200px;
      background-color: white;
      margin: auto;
      z-index: 11;
      border-radius: 15px;

      .modal-content {
        margin-top: 20%;
      }
    }

    .reset {
      padding: 15px;
      background-color: darkblue;
      color: white;
      border-radius: 50px;
      cursor: pointer;

    }

  }

</style>
