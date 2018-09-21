<template>
  <div v-if="winCondition" >
    <div class="overlay" :class="{open: winCondition}"></div>
    <div class="modal" :class="{open: winCondition}">
      <div class="modal-content">
        <span v-if="winCondition !== 'patta'">
          ha vinto il giocatore
        </span>
        {{ winCondition }}
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
      margin-top: 20%;
      z-index: 11;
      border-radius: 15px;
      box-shadow: 0px 0px 81px -1px rgba(0,0,0,0.75);

      .modal-content {
        margin-top: 15%;
      }
    }

    .reset {
      padding: 15px;
      background-color: darkblue;
      color: white;
      display: block;
      margin: auto;
      margin-top: 15px;
      width: 60%;
      border-radius: 50px;
      cursor: pointer;
    }

  }

</style>
