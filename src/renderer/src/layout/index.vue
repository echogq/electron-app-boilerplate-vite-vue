<template>
  <div>
    <sidebar />
    <div class="main-container">
      <div class="main-container-header">{{ token }}</div>
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@renderer/store/modules/user'

const userStore = useUserStore()
const token = userStore.token
</script>
