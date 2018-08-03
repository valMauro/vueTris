<template>
  <div id="trisStage">
      <trisSingleBox
        v-for="(index, value) in 9"
        :key="value"
        :number="index"
        :actualMossa="mossaAttuale"
      ></trisSingleBox>
  </div>
</template>

<script>
import TrisSingleBox from '@/components/trisSingleBox'

export default {
  name: 'trisContainer',
  data () {
    return {
      mossaAttuale: 'o'
    }
  },
  components: {
    'trisSingleBox': TrisSingleBox
  },
  methods: {
    updateMossa: function () {
      if (this.mossaAttuale === 'o') {
        this.mossaAttuale = 'x'
      } else {
        this.mossaAttuale = 'o'
      }
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
  }
</style>
