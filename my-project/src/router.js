import Vue from 'vue'
import Router from 'vue-router'

import home from 'view/home/'

Vue.use(VueRouter)
export defaule new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path:'/home',
            components: home,
            children:[
                path:'/'
            ]
        }
    ]
})