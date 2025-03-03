<script setup lang="ts">
import Versions from './components/Versions.vue'
const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
const title = import.meta.env.RENDERER_VUE_APP_TITLE
const mode = import.meta.env.MODE
console.log(import.meta.env)
</script>

<template>
  <img alt="logo" class="logo" src="./assets/electron.svg" />
  <div class="creator">{{ title }}</div>
  <div class="creator">{{ mode }}</div>
  <div class="text">
    Build an Electron app with
    <span class="vue">Vue</span>
    and
    <span class="ts">TypeScript</span>
  </div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
    </div>
    <div class="action">
      <router-link to="/test">Test</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
  <Versions />
</template>
