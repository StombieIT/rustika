import { defineConfig } from 'astro/config';
import { loadStylesPaths } from './utils/package.mts';
import { combinePaths } from './utils/scss.mts';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte()
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: combinePaths(await loadStylesPaths())
                }
            }
        }
    },
    server: {
        port: 3211
    }
});
