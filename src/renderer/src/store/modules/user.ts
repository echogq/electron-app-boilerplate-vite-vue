import { login } from '@renderer/api/login'
import { setToken, getToken } from '@renderer/utils/auth'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: 'John Doe',
    token: getToken(),
    avatar: '',
    roles: [],
    permissions: []
  }),
  actions: {
    login(data: any) {
      return new Promise((resolve, reject) => {
        login(data)
          .then((res: any) => {
            this.token = res.token
            setToken(res.token)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getToken: (state) => state.token,
    getUsername: (state) => state.username,
    getAvatar: (state) => state.avatar,
    getRoles: (state) => state.roles,
    getPermissions: (state) => state.permissions
  }
})
