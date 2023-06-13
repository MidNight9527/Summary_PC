import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import router from './router/router'
import store from './store/store'
import 'element-plus/dist/index.css'

import './permission.js'

const app = createApp(App)

app.use(ElementPlus, {locale})
app.use(router)
app.use(store)

app.mount('#app')
