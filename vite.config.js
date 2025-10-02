import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [['babel-plugin-react-compiler', {}]]
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-avatar', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild'
  },
  server: {
    port: 3000,
    hmr: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})