import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts')) return 'vendor_recharts'
            if (id.includes('react-calendar')) return 'vendor_calendar'
            if (id.includes('react-router-dom')) return 'vendor_router'
            if (id.includes('react-dom') || id.includes('react')) return 'vendor_react'
            return 'vendor'
          }
        },
      },
    },
  },
})
