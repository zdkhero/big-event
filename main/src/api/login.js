import request from '@/utils/request.js'

/**
 * 登录
 * @param { username, password } data 用户名、密码
 * @returns Promise
 */
export const login = (data) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data
  })
}
