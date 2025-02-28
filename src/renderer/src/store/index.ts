import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'John Doe'
  }),
  actions: {
    setName(name: string) {
      this.name = name
    }
  },
  getters: {
    getName: (state) => state.name
  }
})
