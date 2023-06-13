import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login',
        meta: {
            title: null
        }
    },
    {
        path: '/login',
        name: "login",
        component: () => import('../view/login/login.vue'),
        meta:{ 
            showTab: false,
            title: null
        }
    },
    {
        path: '/index',
        name: "index",
        component: () => import('../view/index/index.vue'),
        meta:{
            showTab: true,
            title: '主页',
            type: [0]
        }
    },
    {
        path: '/order',
        name: "order",
        component: () => import('../view/order/order.vue'),
        meta:{
            showTab: true,
            title: '预定',
            type: [0, 1]
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router