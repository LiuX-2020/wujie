import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import WujieVue  from 'wujie-vue3'; // 引入无界
import WujieVue  from 'wujie-vue-packaging'; // 替换包

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(WujieVue) // 注册无界

app.mount('#app')
