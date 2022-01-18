<template>
  <div id="app" class="main-app">
    <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
    <router-view />

    <!-- 子应用渲染区，用于挂载子应用节点 -->
    <!-- <div id="subapp-container"></div> -->
  </div>
</template>

<style lang="scss" scoped>
.main-app {
  width: 100%;
  height: 100%;
}
</style>
