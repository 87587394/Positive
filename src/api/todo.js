import axios from './axios'
import moment from "moment";
export function queryTodoList(params = {}) {
    return axios.get('/getTaskList', {
        params: {
            limit: 100,
            page: 1,
            state: 0,
            ...params
        }
    })
};
export function enterList(params = {}) {
    let { desc, time } = params;
    let info = {
        task: desc,
        time: moment(time).format("YYYY-MM-DD HH:mm:ss")
    }
    return axios.post('/addTask', info)
};

export function delList(id) {
    return axios.get('/removeTask', {
        params: {
            id
        }
    })
}
export function compList(id) {
    return axios.get('/completeTask',{
        params: {
            id
        }
    })
}