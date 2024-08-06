import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import { sveltePreprocess } from "svelte-preprocess";
import { loadStylesPaths } from './utils/package.mts';
import { combinePaths } from './utils/scss.mts';

const scssPrependData = combinePaths(await loadStylesPaths());

// https://astro.build/config
export default defineConfig({
    integrations: [
        svelte({
            preprocess: sveltePreprocess({
                scss: {
                    prependData: scssPrependData,
                }
            }),
        })
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: scssPrependData
                }
            }
        }
    },
    server: {
        port: 3211
    }
});
