<template>
  <el-menu
    default-active="/home"
    class="el-menu-vertical-demo"
    background-color="#23262E"
    text-color="#fff"
    active-text-color="#409EFF"
    unique-opened
    router
   >
    <template v-for="item in menus">
      <!-- 不包含子菜单的 "一级菜单" -->
      <el-menu-item :index="item.indexPath" :key="item.indexPath" v-if="!item.children">
        <i :class="item.icon"></i>{{ item.title }}
      </el-menu-item>
      <!-- 包含子菜单的 "一级菜单" -->
      <el-submenu :index="item.indexPath" :key="item.indexPath" v-else>
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <!-- 循环渲染 "二级菜单" -->
        <el-menu-item :index="subItem.indexPath" v-for="subItem in item.children" :key="subItem.indexPath">
          <i :class="subItem.icon"></i>{{ subItem.title }}
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import { getMenus } from '@/api/user.js'
export default {
  name: 'Menu',
  data () {
    return {
      menus: [] // 分类数据
    }
  },
  created () {
    // 调用获取数据的方法
    this.getMenus()
  },
  methods: {
    // 获取分类菜单数据
    async getMenus () {
      const { data: res } = await getMenus()

      if (res.code === 0) {
        this.menus = res.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
