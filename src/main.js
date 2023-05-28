
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style.css';
//引入element-ui
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

//注册图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
};

app.use(ElementPlus).use(router).use(store);
app.mount('#app');
