import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative asset paths, so the build works at any address
  // (e.g. GitHub Pages under /<repo>/ or a custom domain at /).
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})