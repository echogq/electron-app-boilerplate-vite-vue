<template>
  <div id="login">
    <div class="el-card is-always-shadow login-card">
      <div class="el-card__body">
        <div class="login-cover">
          <h1 class="login-title">ElementAdmin</h1>
          <h4 class="login-subtitle">基于Vue3、Elementplus 后台解决方案</h4>
        </div>
        <form class="el-form el-form--default el-form--label-right login-form">
          <h3 class="title">用户登录</h3>
          <el-form-item
            label="账号"
            prop="username"
            :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
          >
            <el-input prefix-icon="icon-user" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
            :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
          >
            <el-input type="password" prefix-icon="icon-lock" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item
            label="验证码"
            prop="captcha"
            :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]"
          >
            <el-input prefix-icon="icon-check" placeholder="验证码"></el-input>
            <el-image src="" class="login-code-img" />
          </el-form-item>
          <el-checkbox>记住密码</el-checkbox>
          <el-form-item>
            <el-button type="primary" style="width: 100%; height: 45px">登录系统</el-button>
          </el-form-item>
          <el-link type="primary" underline>忘记密码</el-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
