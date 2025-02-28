<template>
  <div>
    <h1>首页</h1>
    <p>{{ userStore.getName }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@renderer/store'
import { getUserInfo } from '@renderer/api/user'
import { onMounted } from 'vue'
const userStore = useUserStore()

onMounted(() => {
  getUserInfo().then((res) => {
    console.log(res)
  })
})
</script>
