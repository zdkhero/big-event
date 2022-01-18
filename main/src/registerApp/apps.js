// 配置微应用的一些注册信息

// 微应用注册信息
const apps = [
  {
    name: 'art-cate', // 微应用名称，具有唯一性
    entry: '//localhost:8081', // 微应用入口，通过该地址加载微应用
    container: '#subapp-container', // 微应用挂载节点，微应用加载完成后将挂载在该节点上
    activeRule: '/art-cate' // 微应用触发的路由规则, 触发路由规则后将加载该微应用
  }
]

export default apps
