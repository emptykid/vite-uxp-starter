import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import legacy from '@vitejs/plugin-legacy'


const pluginId = "k1l2m3n4";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: `./dist/${pluginId}`,
  },
  base: "./",
    rollupOptions: {
    output: {
      esModule: false,
      preserveModules: false,
      format: "cjs",
    }
  },
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/plugin/*",
          dest: "./"
        }
      ]
    })
  ],
})
