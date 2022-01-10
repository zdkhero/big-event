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
