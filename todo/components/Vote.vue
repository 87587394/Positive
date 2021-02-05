<template>
    <div class='vote'>
        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        <vote-title></vote-title>
        <vote-content></vote-content>
        <vote-footer></vote-footer>
        <div>252</div>
    </div>
</template>

<script>
import VoteTitle from './VoteTitle'
import VoteFooter from './VoteFooter'
import VoteContent from './VoteContent'
export default {
  components:{
      VoteTitle,
      VoteFooter,
      VoteContent  
  }
}
</script>

<style lang="less" scoped >
// scoped样式只对当前组件的结构有效
    .vote{
        border:2px solid red;
        padding: 10px;
        width: 500px;
        margin: 20px auto;
        text-align: center;
    }

</style>