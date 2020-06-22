import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Teams from '../views/Teams.vue'
import Admin from "../views/Admin.vue"
import Login from "../views/Login.vue"
import SignUp from "../views/SignUp";
import store from '../store'

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
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if((to.path == '/login' && store.state.user_details.id) || (to.path == '/signup' && store.state.user_details.id)){
        next({
            name: 'Admin'
        });
    }
    if (to.path.indexOf('admin') > -1 && !store.state.user_details.id) next({ name: 'Login' })
    else next()
})

export default router
