<template>
  <div id="trisStage">
    <div>
      <trisSingleBox
        v-for="box in 3"
      ></trisSingleBox>
    </div>
    <div>
      <trisSingleBox
        v-for="box in 3"
      ></trisSingleBox>
    </div>
    <div>
      <trisSingleBox
        v-for="box in 3"
      ></trisSingleBox>
    </div>

  </div>
</template>

<script>
import TrisSingleBox from '@/components/trisSingleBox'

export default {
  name: 'trisContainer',
  components: {
    'trisSingleBox': TrisSingleBox
  }
}
</script>

<style scoped lang="scss">
  div#trisStage{
    width: 298px;
    height: 298px;
    margin: 0 auto;
    border: 1px solid #eee;
    display: flex;
  }
</style>
