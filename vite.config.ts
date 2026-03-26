import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniKuRoot from '@uni-ku/root'
import tailwindcss from '@tailwindcss/postcss'
import path from 'node:path'

export default defineConfig({
  plugins: [
    UniPages(),
    UniKuRoot(),
    UniManifest(),
    uni(),
    UnifiedViteWeappTailwindcssPlugin({
      rem2rpx: true,
      cssEntries: [
        // 你 @import "weapp-tailwindcss"; 那个文件绝对路径
        path.resolve(import.meta.dirname, './src/app.css'),
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
});
