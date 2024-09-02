import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['vue'], // Add this line to exclude Vue.js from optimization
  },
  server: {
    port: 5174, // Set the port to 5173
  },
})
