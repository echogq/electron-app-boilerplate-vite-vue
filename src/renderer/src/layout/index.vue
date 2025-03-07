<template>
  <div>模板{{ token }}</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@renderer/store/modules/user'
const userStore = useUserStore()
const token = userStore.token
</script>
