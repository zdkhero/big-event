import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

let router = null
let instance = null
function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/art-cate/' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  // 通过 props 调用 initGlobalState 返回的返回通信方法
  props.onGlobalStateChange((state, prev) => {
    console.log(state)
    store.commit('setToken', state)
  }, true)
  render(props)
}
export async function unmount () {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
