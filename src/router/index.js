import Vue from 'vue'
import VueRouter from 'vue-router'
import Organize from '../components/organize'
import Customer from '../components/customer'
import List from '../components/organize/list.vue'
import Detail from '../components/organize/detail.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/organize',
            component: Organize,
            children: [
                {
                    path: 'list',
                    component:List
                },
                {
                    path: 'detail',
                    component:Detail
                },
            ]
        },
        {
            path: '/customer',
            component:Customer
        }
    ]
})