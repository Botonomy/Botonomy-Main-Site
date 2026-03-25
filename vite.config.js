import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    // Compression only for client build — SSR bundle is Node.js-only, never served
    ...(!isSsrBuild ? [
      compression({ algorithm: 'gzip',         exclude: [/\.(br)$/, /\.(gz)$/], threshold: 1024 }),
      compression({ algorithm: 'brotliCompress', exclude: [/\.(br)$/, /\.(gz)$/], threshold: 1024 }),
    ] : []),
  ],
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist',
    chunkSizeWarningLimit: 600,
    minify: !isSsrBuild,
    cssCodeSplit: !isSsrBuild,
    rollupOptions: isSsrBuild ? {} : {
      output: {
        // Rolldown (Vite 8) requires manualChunks as a function
        manualChunks(id) {
          if (id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/react-router-dom/') ||
              id.includes('node_modules/react-router/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/gsap/')) {
            return 'vendor-gsap';
          }
          if (id.includes('node_modules/react-helmet-async/') ||
              id.includes('node_modules/lucide-react/')) {
            return 'vendor-ui';
          }
        },
      },
    },
  },
  ssr: {
    // Bundle these into the SSR output rather than treating as externals.
    // react-router v7 + Rolldown has export condition issues when externalized.
    noExternal: ['react-helmet-async', 'react-router', 'react-router-dom'],
  },
}))
