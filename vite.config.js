import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Tailwind CSS v4 plugs straight into Vite. No tailwind.config.js and no
// postcss.config.js needed: the theme is defined in src/index.css via @theme.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
