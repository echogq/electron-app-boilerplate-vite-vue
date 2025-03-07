<template>
  <div id="login">
    <el-card class="login-card">
      <template #header>
        <div class="login-title">
          <span>用户登录</span>
        </div>
      </template>
      <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
        <el-form-item prop="username">
          <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            :prefix-icon="Lock"
            placeholder="密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            :prefix-icon="Search"
            placeholder="验证码"
            style="width: 63%"
            v-model="loginForm.code"
          ></el-input>
          <div class="code-wrapper">
            <el-image
              :src="captchaImg"
              @click="handleCodeClick"
              class="login-code-img"
              :style="{ cursor: isDisabled ? 'not-allowed' : 'pointer' }"
            />
            <div v-if="isDisabled" class="countdown-overlay">{{ countdown }}s</div>
          </div>
        </el-form-item>
        <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
        <el-form-item>
          <el-button type="primary" style="width: 100%; height: 45px" @click="handleLoginClick"
            >登录系统</el-button
          >
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
import { User, Lock, Search } from '@element-plus/icons-vue'
import { getCaptcha } from '@renderer/api/login'
import { useUserStore } from '@renderer/store/modules/user'
const useStore = useUserStore()
const router = useRouter()
const goHome = () => {
  router.push('/home')
}

const captchaImg = ref('')
const countdown = ref(0)
const isDisabled = ref(false)
const timer = ref()

const getCode = () => {
  if (isDisabled.value) return
  getCaptcha().then((res: any) => {
    captchaImg.value = 'data:image/gif;base64,' + res.img
    loginForm.uuid = res.uuid
  })
}

const handleCodeClick = () => {
  if (isDisabled.value) return
  getCode()
  //startCountdown()
}

// const startCountdown = () => {
//   isDisabled.value = true
//   countdown.value = 60
//   timer.value = setInterval(() => {
//     countdown.value--
//     if (countdown.value <= 0) {
//       clearInterval(timer.value)
//       isDisabled.value = false
//     }
//   }, 1000)
// }

const loginForm = reactive({
  username: 'admin',
  password: 'admin123',
  rememberMe: false,
  code: '',
  uuid: ''
})

const loginRules = reactive({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'change' }]
})
const loginFormRef = ref()
const handleLoginClick = () => {
  console.log('userStore', useStore.token)
  loginFormRef.value.validate((valid) => {
    if (valid) {
      console.log('uuid', loginForm.uuid)
      useStore
        .login(loginForm)
        .then((res) => {
          ElMessage.success('登录成功')
          router.push('/')
          console.log(res)
        })
        .catch((err: any) => {
          console.log(err)
        })
    }
  })
}

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})

getCode()
</script>
<style scoped>
.code-wrapper {
  position: relative;
  display: inline-block;
  width: 100px;
}

.login-code-img {
  width: 90px;
  height: 30px;
  margin-left: 20px;
  margin-top: 10px;
}

.countdown-overlay {
  position: absolute;
  top: 10px;
  left: 20px; /* 与图片的 margin-left 相同 */
  width: 90px; /* 与图片宽度相同 */
  height: 30px; /* 与图片高度相同 */
  background: rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
</style>
