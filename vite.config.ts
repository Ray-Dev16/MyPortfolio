import fs from 'node:fs';
import path from 'node:path';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const projectRoot = path.resolve(__dirname);
const resourcesJs = path.join(projectRoot, 'resources', 'js');

function resolveWithExtension(filePath: string): string | null {
    if (fs.existsSync(filePath)) return filePath;
    for (const ext of ['.ts', '.tsx', '.js', '.jsx']) {
        const withExt = filePath + ext;
        if (fs.existsSync(withExt)) return withExt;
    }
    return null;
}

export default defineConfig({
    resolve: {
        alias: {
            '@': resourcesJs,
        },
    },
    plugins: [
        // Fix absolute /resources/js/... paths and extensionless resolution (Vite may pass path without extension at load time).
        {
            name: 'resolve-resources-js-absolute',
            resolveId(id) {
                if (id.startsWith('/resources/js/')) {
                    const file = path.join(projectRoot, id.slice(1));
                    return resolveWithExtension(file) ?? file;
                }
                return null;
            },
            load(id) {
                const underResources = id.startsWith(projectRoot + path.sep) && id.includes(path.sep + 'resources' + path.sep + 'js' + path.sep);
                if (underResources && !fs.existsSync(id)) {
                    const withExt = resolveWithExtension(id);
                    if (withExt) {
                        return fs.readFileSync(withExt, 'utf-8');
                    }
                }
                return null;
            },
        },
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
