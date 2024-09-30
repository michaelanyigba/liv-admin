import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    proxy: {
      "/api":{
        target: "https://liv-backend-2.onrender.com"
      }
    }
  },
  resolve: {
    alias: {
      // This tells Vite to use a browser-compatible polyfill or no-op module
      util: 'rollup-plugin-node-polyfills/polyfills/util'
    }
  },
  optimizeDeps: {
    exclude: ['util'] // Exclude the 'util' module from dependency optimization
  }
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
