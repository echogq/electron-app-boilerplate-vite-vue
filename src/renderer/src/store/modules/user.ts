import { login } from '@renderer/api/login'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: 'John Doe',
    token: '1234567890',
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
