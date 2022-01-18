import { initGlobalState } from 'qiankun'

// 初始化数据
import store from './index'

// 获取 到需要传递的 Token
const state = store.state.token

// 调用 initGlobalState 方法定义全局状态
// 定义变量 action 接收通信方法
const actions = initGlobalState(state)

// 监听全局状态，有变化触发第一个回调函数
// 回调函数有两个参数：state 和 prev
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  // console.log(state)
  // console.log(prev)
}, true)

// 修改全局状态
// actions.setGlobalState({
//   name: '安琪拉'
// })

// 移除数据监听，微应用 umount 时会默认调用
// actions.offGlobalStateChange()

// export default actions
