<template>
  <router-view />
</template>
<script setup lang="ts">
const router = useRouter()

onMounted(() => {
  router.push('/home')
})
</script>
