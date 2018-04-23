import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './index.vue'
import Foo from './nav/index.vue'

const routes =  [
    {
        path: '/',
        component: App
    },
    {
        path:'/foo',
        component:Foo
    }
]

Vue.use(VueRouter)
export default new VueRouter({
    routes,
    mode:'history'
})