<template>
  <div :style="{ height: height }">
    <iframe :src="src" :id="iframeId" style="width: 100%; height: 100%" frameborder="0" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '/'
  },
  iframeId: {
    type: String,
    default: 'inner-link'
  }
})

const height = ref(document.documentElement.clientHeight - 100 + 'px')
</script>
