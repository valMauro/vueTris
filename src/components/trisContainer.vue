<template>
  <div id="trisStage">
      <trisSingleBox
        v-for="(index, value) in 9"
        :key="value"
        :number="index"
        :win="win"
        :actualMossa="mossaAttuale"
        @cellClicked="registerClick"
        @resetFinished="resetValue=false"
        :reset="resetValue"
      ></trisSingleBox>
      <p v-if="win" >ha vinto il giocatore {{ win }} -
        <span @click="reset">reset</span>
      </p>
  </div>
</template>

<script>
import TrisSingleBox from '@/components/trisSingleBox'

export default {
  name: 'trisContainer',
  data () {
    return {
      mossaAttuale: 'o',
      cellsValue: {
        cell1: '',
        cell2: '',
        cell3: '',
        cell4: '',
        cell5: '',
        cell6: '',
        cell7: '',
        cell8: '',
        cell9: ''
      },
      resetValue: false
    }
  },
  components: {
    'trisSingleBox': TrisSingleBox
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
    }
  },
  methods: {
    updateMossa: function () {
      if (this.mossaAttuale === 'o') {
        this.mossaAttuale = 'x'
      } else {
        this.mossaAttuale = 'o'
      }
    },
    registerClick: function (obj) {
      this.cellsValue['cell' + obj.cell] = obj.turn
    },
    reset: function () {
      this.resetValue = true
      for (let el in this.cellsValue) {
        this.cellsValue[el] = ''
      }
      this.mossaAttuale = 'o'
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
