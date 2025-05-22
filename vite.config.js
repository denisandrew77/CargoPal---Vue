import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(),
  VitePWA({
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    manifest: {
      theme_color: "#169bcb",
      icons: [
        {
          src: "/icons/image.ico",
          sizes: "192x192",
          type: "image/ico",
        },
        {
          src: "/icons/image2.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
          form_factor: "narrow" // For mobile
        }
      ]
    }
  }
  )
  ],
  server: {
    fs: {
      allow: [
        '..'
      ],
    },
  },
})
