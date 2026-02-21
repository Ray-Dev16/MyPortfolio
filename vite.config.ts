import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
            // Skip PHP command when building without PHP (e.g. Render Node env). Use Docker on Render so PHP is available.
            ...(process.env.RENDER === 'true' || process.env.CI
                ? { command: 'true' }
                : {}),
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
