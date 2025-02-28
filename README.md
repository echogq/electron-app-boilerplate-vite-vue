# electron-app

An Electron application with Vue and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Project Setup

### Install

```bash
$ pnpm install
```

### Development

```bash
$ pnpm dev
```

### Build

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```

### windows如果打包遇到electron打包工具下载失败

1. 手动下载electron-v34.3.0-win32-x64.zip 并解压到C:\Users\Administrator\AppData\Local\electron\Cache
2. 手动下载winCodeSign和nsis
   https://npmmirror.com/mirrors/electron-builder-binaries/winCodeSign-2.6.0/winCodeSign-2.6.0.7z
   解压到C:\Users\Administrator\AppData\Local\electron-builder\Cache\winCodeSign\winCodeSign-2.6.0
   https://npmmirror.com/mirrors/electron-builder-binaries/nsis-3.0.4.1/nsis-3.0.4.1.7z
   解压到C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis\nsis-3.0.4.1
   https://npmmirror.com/mirrors/electron-builder-binaries/nsis-resources-3.4.1/nsis-resources-3.4.1.7z
   解压到C:\Users\Administrator\AppData\Local\electron-builder\Cache\nsis\nsis-resources-3.4.1
