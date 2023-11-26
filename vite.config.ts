import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/ecommerce-product-page/',
    plugins: [
        react(),
        createSvgSpritePlugin({
            symbolId: '[name]',
            include: '**/icon-*.svg'
        }),
    ]
})
