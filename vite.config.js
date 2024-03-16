import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {host:'10.10.150.183', port:5173},
  plugins: [react()],
})
