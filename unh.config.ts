import { defineConfig } from '@uni-helper/unh'

export default defineConfig({
  // 环境变量配置
  env: {
    // 环境变量文件根目录
    root: 'envs',
    // 使用平台名称当作子目录
    usePlatformDir: true,
    // 自定义环境变量前缀
    prefixes: ['VITE_', 'UNI_', 'APP_'],
    // 将加载的环境变量合并至 process.env 中
    intoProcess: true,
    // 生成类型声明文件
    dts: 'types/env.d.ts',
  },
  // 平台配置
  platform: {
    // 默认平台，当不指定平台时使用此平台
    default: 'h5',
    // 平台别名，可以使用短名称代替完整平台名称
    alias: {
      'h5': ['w', 'h'],
      'mp-weixin': ['wx'],
    },
  },

  // 小程序开发者工具配置
  devtools: {
    // 自动打开开发者工具
    open: true,
    // 自定义各平台开发者工具路径
    cliPath: {
      'mp-weixin': '/Applications/wechatwebdevtools.app/Contents/MacOS/cli',
    },
  },

  // 自动生成配置
  autoGenerate: {
    // 输出目录，默认为 'src'
    outDir: 'src',
    // 是否自动生成 pages.json
    pages: true,
    // 是否自动生成 manifest.json
    manifest: true,
  },
})
