import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/My-church-web/"   // <-- MUST match your repo name exactly
})