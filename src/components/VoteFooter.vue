<template>
    <div>
      <button @click='addSup'>支持</button>
      <button @click='addPop'>反对</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods:{
    ...mapActions(['addSup','addPop'])
  },
  components:{

  }
}
</script>

<style lang="less" scoped>
  button {
    margin-right: 5px;
    background: skyblue;
    color: red;
  }

</style>