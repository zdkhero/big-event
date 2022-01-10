import request from '@/utils/request.js'

/**
 * 获取用户的信息
 * @returns Promise
 */
export const getUserInfo = () => {
  return request({
    url: '/my/userinfo',
    method: 'GET'
  })
}

/**
 * 获取左侧菜单分类
 * @returns Promise
 */
export const getMenus = () => {
  return request({
    url: '/my/menus',
    method: 'GET'
  })
}
