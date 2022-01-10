import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入 Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入初始化的 css 文件
import './assets/global.scss'

// 导入权限拦截文件
import './permission.js'

// 将 Element 注册为插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
