<template>
  <div id="trisStage">
    <div>
      <trisSingleBox
        v-for="trisBox in 3"
        :key="trisBox"
      ></trisSingleBox>
    </div>
    <div>
      <trisSingleBox
        v-for="trisBox in 3"
        :key="trisBox"
      ></trisSingleBox>
    </div>
    <div>
      <trisSingleBox
        v-for="trisBox in 3"
        :key="trisBox"
      ></trisSingleBox>
    </div>
  </div>
</template>

<script>
import TrisSingleBox from '@/components/trisSingleBox'

export default {
  name: 'trisContainer',
  data () {
    return {
      mossaPrecedente: 'o'
    }
  },
  components: {
    'trisSingleBox': TrisSingleBox
  },
  methods: {
    updateMossa: function () {
      if (this.mossaPrecedente === 'o') {
        this.mossaPrecedente = 'x'
      } else {
        this.mossaPrecedente = 'o'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  div#trisStage {
    width: 298px;
    height: 298px;
    margin: 0 auto;
    border: 1px solid #eee;
    display: flex;
  }
</style>
