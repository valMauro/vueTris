<template>
  <div id="trisStage">
      <trisSingleBox
        v-for="(index, value) in 9"
        :key="value"
        :number="index"
        :win="win"
        :actualMossa="mossaAttuale"
        @cellClicked="registerClick"
        @resetFinished="resetValue = false"
        :reset="resetValue"
        v-model="win"
      ></trisSingleBox>
  </div>
</template>

<script>
import TrisSingleBox from '@/components/trisSingleBox'

const INITIAL_CELL_SITUATION = {
  cell1: '',
  cell2: '',
  cell3: '',
  cell4: '',
  cell5: '',
  cell6: '',
  cell7: '',
  cell8: '',
  cell9: ''
}

export default {
  name: 'trisContainer',
  data () {
    return {
      mossaAttuale: 'o',
      cellsValue: Object.assign({}, INITIAL_CELL_SITUATION),
      resetValue: false
    }
  },
  components: {
    'trisSingleBox': TrisSingleBox
  },
  props: {
    isReset: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    win: function () {
      // orizzontali
      if (this.cellsValue.cell1 === this.cellsValue.cell2 && this.cellsValue.cell2 === this.cellsValue.cell3) {
        if (this.cellsValue.cell3 === 'o') {
          return 'o'
        } else if (this.cellsValue.cell3 === 'x') {
          return 'x'
        }
      }
      if (this.cellsValue.cell4 === this.cellsValue.cell5 && this.cellsValue.cell5 === this.cellsValue.cell6) {
        if (this.cellsValue.cell6 === 'o') {
          return 'o'
        } else if (this.cellsValue.cell6 === 'x') {
          return 'x'
        }
      }
      if (this.cellsValue.cell7 === this.cellsValue.cell8 && this.cellsValue.cell8 === this.cellsValue.cell9) {
        if (this.cellsValue.cell9 === 'o') {
          return 'o'
        } else if (this.cellsValue.cell9 === 'x') {
          return 'x'
        }
      }

      // verticali
      if (this.cellsValue.cell1 === this.cellsValue.cell4 && this.cellsValue.cell4 === this.cellsValue.cell7) {
        if (this.cellsValue.cell7 === 'o') {
          return 'o'
        } else if (this.cellsValue.cell7 === 'x') {
          return 'x'
        }
      }
      if (this.cellsValue.cell2 === this.cellsValue.cell5 && this.cellsValue.cell5 === this.cellsValue.cell8) {
        if (this.cellsValue.cell8 === 'o') {
          return 'o'
        } else if (this.cellsValue.cell8 === 'x') {
          return 'x'
        }
      }
      if (this.cellsValue.cell3 === this.cellsValue.cell6 && this.cellsValue.cell6 === this.cellsValue.cell9) {
        if (this.cellsValue.cell9 === 'o') {
          return 'o'
        } else if (this.cellsValue.cell9 === 'x') {
          return 'x'
        }
      }

      // diagonali
      if (this.cellsValue.cell1 === this.cellsValue.cell5 && this.cellsValue.cell5 === this.cellsValue.cell9) {
        if (this.cellsValue.cell9 === 'o') {
          return 'o'
        } else if (this.cellsValue.cell9 === 'x') {
          return 'x'
        }
      }
      if (this.cellsValue.cell3 === this.cellsValue.cell5 && this.cellsValue.cell5 === this.cellsValue.cell7) {
        if (this.cellsValue.cell7 === 'o') {
          return 'o'
        } else if (this.cellsValue.cell7 === 'x') {
          return 'x'
        }
      }

      // patta
      if (Object.entries(this.cellsValue).every(el => el[1] !== '')) {
        return 'patta'
      }
    }
  },
  watch: {
    win: function () {
      this.$emit('winChanged', this.win)
    },
    isReset: function () {
      if (this.isReset) {
        console.log('porca miseria!')
        this.resetValue = this.isReset
      }
    }
  },
  methods: {
    finishGameReset: function () {
      this.resetValue = false
      this.$emit('resetEnd')
    },
    updateMossa: function () {
      if (this.mossaAttuale === 'o') {
        this.mossaAttuale = 'x'
      } else {
        this.mossaAttuale = 'o'
      }
    },
    registerClick: function (obj) {
      this.$set(this.cellsValue, 'cell' + obj.cell, obj.turn)
      this.updateMossa()
    },
    reset: function () {
      return new Promise(
        function () {
          this.resetValue = true
          this.cellsValue = Object.assign({}, INITIAL_CELL_SITUATION)
          this.mossaAttuale = 'o'
        }
      ).then(
        this.finishGameReset()
      )
    }
  }
}
</script>

<style scoped lang="scss">
  div#trisStage {
    width: 300px;
    height: 298px;
    margin: 0 auto;
    border: 1px solid #eee;
    display: flex;
    flex-wrap: wrap;

    span {
      cursor: pointer;
    }
  }
</style>
