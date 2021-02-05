<template>
  <div id="app">
    <comp></comp>
     <all></all>
     <tabl></tabl>
  </div>
</template>

<script>


import comp from './components/comp'
import all from './components/all'
import tabl from './components/tabl'
export default {
  components: {
    all,comp,tabl
  },
};
</script>

<style lang="less">

</style>