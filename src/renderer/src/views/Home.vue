<template>
  <div class="actions">
    <img alt="logo" class="logo" src="@assets/electron.svg" />
    <div class="creator">{{ title }}</div>
    <h1>欢迎来到后台管理系统</h1>
    <div class="login-btn">
      <el-button type="primary" @click="login">登陆</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
const title = import.meta.env.RENDERER_VUE_APP_TITLE
const router = useRouter()
const login = () => {
  router.push('/login')
}
</script>
