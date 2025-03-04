<template>
  <div id="login">
    <el-card class="login-card">
      <template #header>
        <div class="login-title">
          <span>用户登录</span>
        </div>
      </template>
      <el-form class="login-form">
        <el-form-item
          label="账号"
          prop="username"
          :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
        >
          <el-input :prefix-icon="User" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <el-input type="password" :prefix-icon="Lock" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="captcha"
          :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]"
        >
          <el-input :prefix-icon="Search" placeholder="验证码"></el-input>
          <el-image src="" class="login-code-img" />
        </el-form-item>
        <el-checkbox>记住密码</el-checkbox>
        <el-form-item>
          <el-button type="primary" style="width: 100%; height: 45px">登录系统</el-button>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-link type="primary" underline>忘记密码</el-link>
        <el-link type="primary" underline @click="goHome" class="ml-20 float-right">回首页</el-link>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { User, Lock, Search } from '@element-plus/icons-vue'
const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>
