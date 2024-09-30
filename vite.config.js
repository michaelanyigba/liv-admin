import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // This should point to the folder where your build is placed
  },
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api":{
        target: "https://liv-backend-2.onrender.com"
      }
    }
  },
})
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//   },
//   server: {
//     port: 3000,
//     proxy: {
//       "/api":{
//         target: "http://localhost:5000"
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       // This tells Vite to use a browser-compatible polyfill or no-op module
//       util: 'rollup-plugin-node-polyfills/polyfills/util'
//     }
//   },
//   optimizeDeps: {
//     exclude: ['util'] // Exclude the 'util' module from dependency optimization
//   }
// })
