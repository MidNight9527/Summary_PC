import Vue from 'vue'
import VueRouter from 'vue-router'
import homeView from '@/views/HomeView/HomeView'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/LoginView/LoginView')
  },
  {
    path: '/',
    name: '首页',
    component: homeView,
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('../views/IndexView/IndexView')
      },
      {
        path: 'CreateBriefing',
        name: '创建简报',
        component: () => import('../views/CreateBriefing/CreateBriefing')
      },
      {
        path: 'BriefingDetails',
        name: '简报详情',
        component: () => import('../views/BriefingDetails/BriefingDetails')
      },
      {
        path: 'SeeMore',
        name: '全部文章',
        component: () => import('../views/SeeMore/SeeMore')
      },
      {
        path: 'mine',
        name: '我的',
        component: () => import('../views/MineView/MineView')
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
