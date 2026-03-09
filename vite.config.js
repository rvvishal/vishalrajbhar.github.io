import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: "/vishalrajbhar.github.io",
  plugins: [
    react(),
    
  ],
})