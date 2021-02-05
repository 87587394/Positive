import {
  queryTodoList
} from '../api/todo';

export default {
  namespaced:true,
  state:{
    todoList:[]
  },
  mutations:{
    // 改变todoList的方法
    updateTodoList(state,payload){
      state.todoList = payload;
    }
  },
  actions:{
    updateTodoListAction({commit},params={}){
      // 此处可以支持异步
      // 在这个地方发送异步的请求，当请求成功以后，去commit一个mutation，把请求回来的现数据通过payload传递给state里的todoList
      queryTodoList(params).then((res)=>{
        // 把请求成功的数据存储到state中
        let {
          code,
          list
        } = res;
        if(code == 0){
          commit('updateTodoList',list)
        }
        else {
          commit('updateTodoList',[])
        }
      })
    }
  }
}

// this.$store.dispatch('updateTodoListAction',{state:1})