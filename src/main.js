import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import HomeLeft from './component/HomeLeft.vue'
import HomeMiddle from './component/HomeMiddle.vue'

createApp(App)
  .component('HomeLeft', HomeLeft)
  .component('HomeMiddle', HomeMiddle)
  .mount('#app')