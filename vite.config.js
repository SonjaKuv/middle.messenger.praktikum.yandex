import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, "src/partials"),
    }
    )],
    build: {
        outDir: 'dist',
        assetsDir: 'src/pages/',
        rollupOptions: {
            input: {
              main: resolve(__dirname, 'index.html'),
              auth: resolve(__dirname, 'src/pages/auth.html'),
              register: resolve(__dirname, 'src/pages/reg.html'),
              profile: resolve(__dirname, 'src/pages/profile.html'),
              messages: resolve(__dirname, 'src/pages/dialogs.html'),
              404: resolve(__dirname, 'src/pages/404.html'),
              500: resolve(__dirname, 'src/pages/500.html'),
            }
        },
    },
})