<template>
  <div >
    <img src="../assets/letter-x.png" alt="x" class="hide">
    <img src="../assets/tondo.png" alt="o" class="hide">
  </div>
</template>

<script>
export default {
  name: 'trisSingleBox'
}
</script>

<style lang="scss" scoped>

  div {
    height: 98px;
    width: 98px;
    border: 1px solid #ccc;
    flex-direction: row;
    cursor: pointer;

    img {
      height: 50px;
      width: 50px;
      margin-top: 25px;

      &.hide {
        display: none;
      }
    }
  }

</style>
