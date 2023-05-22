import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: "/login",
      children: [{
        path: 'chat',                                               //AI聊天界面
        name: 'chat',
        component: () => import('../components/homeMiddle.vue')
      },
      {
        path: 'intru',                                              //公司简介
        name: 'intru',
        component: () => import('../views/companyIntruduce.vue')
      },
      {
        path: 'linkus',                                              //联系我们
        name: 'linkus',
        component: () => import('../views/linkus.vue')
      }
      ]
    },
    {
      path: '/login',                                              //联系我们
      name: 'login',

      component: () => import('../views/login.vue')
    }
  ]
})

export default router
