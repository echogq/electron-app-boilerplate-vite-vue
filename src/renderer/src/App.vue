<template>
  <router-view />
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(() => {
  router.push('/home')
})
</script>
