import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production-gh' 
    ? '/revolving-tic-tac-toe/'   // for GitHub Pages
    : './',                       // for Vercel or local
}));
