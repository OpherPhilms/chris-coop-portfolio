import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/christopher-cooper-portfolio-final/',
  plugins: [react()],
})
