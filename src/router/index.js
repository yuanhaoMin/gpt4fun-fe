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
      redirect: "chat",
      children: [
        {
          path: 'chat',                                               //毕至AI助手
          name: 'chat',
          component: () => import('../components/home-middle.vue')
        },
        {
          path: 'recruit',                                               //招聘AI助手
          name: 'recruit',
          component: () => import('../views/home-recruit.vue')
        },
        {
          path: 'scene',                                               //分类场景AI助手
          name: 'scene',
          component: () => import('../views/home-scene.vue')
        },
        {
          path: 'analysis',                                               //分析AI助手
          name: 'analysis',
          component: () => import('../views/home-analysis.vue')
        },
        {
          path: 'about',                                               //关于我们
          name: 'about',
          component: () => import('../views/home-about.vue')
        },
        {
          path: 'contact',                                               //联系我们
          name: 'contact',
          component: () => import('../views/home-contact.vue')
        },
      ]
    },
    {
      path: '/login',
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




