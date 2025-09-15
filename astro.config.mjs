// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    security: {
        checkOrigin: true
    },
    output: 'static',
    site: 'https://marehasesores.com',
    base: '/',
    build: {
        assets: 'assets'
    }
});
