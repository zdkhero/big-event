import router from '@/router'
import store from '@/store'

// 路由白名单
const whiteList = ['/login']

// 导航前置守卫
router.beforeEach(async (to, from, next) => {
  // 获取 token
  const { token } = store.state

  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      await store.dispatch('getUserInfo')
      next()
    }
  } else {
    // 判断是否在白名单，如果在，就放行，如果不在，就跳转到登录页面
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
