import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Teams from '../views/Teams'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/teams',
        name: 'Teams',
        component: Teams
    },
    {
        path: '/team',
        name: 'About',
    }
]

const router = new VueRouter({
    routes
})

export default router
