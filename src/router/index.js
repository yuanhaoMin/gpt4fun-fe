import { createRouter, createWebHistory } from 'vue-router';
import { getData } from '../utils/store-crud';
import HomeView from '../views/home-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [{
        path: '',                                               //AI聊天界面
        name: 'chat',
        component: () => import('../components/home-middle.vue')
      },
      {
        path: 'intro',                                              //公司简介
        name: 'intro',
        component: () => import('../views/company-intro.vue')
      },
      {
        path: 'contact',                                              //联系我们
        name: 'contact',
        component: () => import('../views/contact.vue')
      }
      ]
    },
    {
      path: '/login',                                              //联系我们
      name: 'login',

      component: () => import('../views/login.vue')
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const token = getData('token');
  if (token || to.path === '/login') {
    next();
  } else {
    next('/login');
  }
});

export default router




