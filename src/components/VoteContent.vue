<template>
  <div>
    <p>支持人数:{{supNum}}</p>
    <p>反对人数:{{popNum}}</p>
    <p>支持率:{{SupRate}}%</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(['supNum','popNum']),
    ...mapGetters(['SupRate'])
  },
  components: {},
};
</script>

<style lang="less">
</style>