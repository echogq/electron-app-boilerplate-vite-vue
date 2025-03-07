import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
let publicDir = resolve(__dirname, 'resources')
let envDir = resolve(__dirname, 'build')
const pathSrc = resolve(__dirname, 'src/renderer/src')
export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    publicDir,
    envDir,
    envPrefix: 'RENDERER_',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@views': resolve('src/renderer/src/views'),
        '@router': resolve('src/renderer/src/router'),
        '@components': resolve('src/renderer/src/components'),
        '@store': resolve('src/renderer/src/store'),
        '@utils': resolve('src/renderer/src/utils'),
        '@api': resolve('src/renderer/src/api'),
        '@assets': resolve('src/renderer/src/assets')
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080/dev-api/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
        resolvers: [
          ElementPlusResolver(),
          // 自动导入 Icons 组件
          IconsResolver({ prefix: 'icon' })
        ],
        dts: resolve(pathSrc, 'auto-imports.d.ts') // 自动导入类型
      }),
      Components({
        resolvers: [
          // 自动 注册Icons 组件
          IconsResolver({ enabledCollections: ['ep'] }),
          // 自动导入 ElementPlus 组件
          ElementPlusResolver()
        ]
      }),
      Icons({
        autoInstall: true
      })
    ]
  }
})
