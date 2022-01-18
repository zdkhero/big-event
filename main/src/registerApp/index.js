import apps from './apps'
import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from 'qiankun'

// registerMicroApps 接收两个参数
// 第一个参数是：必选，微应用的一些注册信息
// 第二个参数是：可选，全局的微应用生命周期钩子
registerMicroApps(apps, [])

// 添加全局的未捕获异常处理器。
addGlobalUncaughtErrorHandler((event) => console.log(event))

// 将 qiankun 的启动函数进行导出
export default start
