import { queryTodoList } from '../api/todo'
import { enterList } from '../api/todo'
import { delList } from '../api/todo'
import { compList } from '../api/todo'
export default {
    namespaced: true,
    state: {
        todoList: []
    },
    mutations: {
        addList(state, payload) {
            state.todoList = payload;
        }
    },
    actions: {
        addtoL({ commit }, payload) {
            queryTodoList().then(res => {
                let { code, list } = res;
                if (code == 0) {
                    commit('addList', list)
                }
            })
        },
        enter({ commit }, payload) {
            return enterList(payload)
        },
        del({ commit }, payload) { 
            return delList(payload)
        },
        comp({ commit }, payload) {
            return compList(payload)
        }

    }

}