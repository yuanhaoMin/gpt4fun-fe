import { createRouter, createWebHistory } from 'vue-router';
import { getData } from '../utils/store-crud';
import HomeView from '../views/home-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/home',
      component: () => import('../views/home.vue')
    },
    {
      path: "/",
      component: HomeView,
      // redirect: "chat",
      children: [
        // {
        //   path: 'chat',                                               //毕至AI助手
        //   name: 'chat',
        //   component: () => import('../components/home-middle.vue')
        // },
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
    },
    {
      path: '/about',                                               //关于我们
      name: '/about',
      redirect: '/serviceBackground'
    },
    {
      path: '/serviceBackground',//服务背景
      name: 'serviceBackground',
      component: () => import('../views/about-us/service-background.vue')
    },
    {
      path: '/productAdvantages',//产品优势
      name: 'productAdvantages',
      component: () => import('../views/about-us/product-advantages.vue')
    },
    {
      path: '/applicationCases',//应用案例
      name: 'applicationCases',
      component: () => import('../views/about-us/application-cases.vue')
    },
    {
      path: '/introduction',//毕至介绍
      name: 'introduction',
      component: () => import('../views/about-us/Introduction-to-bi-zhi.vue')
    },
    {
      path: '/price',//价格
      name: 'price',
      component: () => import('../views/price-page.vue')
    },
  ]
});

router.beforeEach((to, from, next) => {
    const token = getData('token');
    if (token && to.path != '/') {
      next();
    } else {
      if (to.path == '/' || to.path == '/login') {
        next()
      } else {
        next('/')
      }
    }
});

export default router




