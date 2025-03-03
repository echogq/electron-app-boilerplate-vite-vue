<template>
  <div>
    <h1>测试</h1>
    <p>{{ userStore.getName }}</p>
    <el-button type="danger" @click="hiTest">点击样式引入</el-button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@renderer/store'
import { getUserInfo } from '@renderer/api/user'
import { onMounted } from 'vue'
const userStore = useUserStore()

import { hi } from '@renderer/api/user'

const hiTest = () => {
  hi().then((res) => {
    alert(res.data.data)
  })
}

onMounted(() => {
  getUserInfo().then((res) => {
    console.log(res)
  })
})
</script>
