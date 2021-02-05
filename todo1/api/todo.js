// 这里存储的是当前todo页面组件的请求的方法
// 项目里的请求也是和vuex中的分模块一样，每一个页面组件都有自己的小模块用来存储自己的请求方法
import axios from './axios';

// 请求task列表的接口
export function queryTodoList(params = {}){
  return axios.get('/getTaskList',{
    params:{
      limit:100,
      page:1,
      state:0,
      ...params
    }
  })
};

// 新建任务接口
export function addTaskList(data={}){
  return axios.post('/addTask',{
    // task:'',
    // time:'',
    ...data
  });
};

// 删除接口
export function delTodoList(params = {}){
  return axios.get('/removeTask',{
    params:{
      ...params
    }
  })
};

//  使用
// import {queryTodoList} from './todo.js'
// queryTodoList().then((res)=>{
//   console.log(res);
// })
// api里的方法会在action中或者组件中去调用