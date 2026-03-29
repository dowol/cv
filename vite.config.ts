import {defineConfig, type ServerOptions} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {lingui} from '@lingui/vite-plugin';

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    const DEV = mode === 'development';

    const server: ServerOptions | undefined = DEV ? {
        // Configure backend proxy for dev mode
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true
            }
        }
    } : undefined;

    // Exclude static assets on non-dev builds
    const rollupOptions = DEV ? undefined : {
        external: ['public/assets/**/*']
    };

    return {
        build: {
            // Generate sourcemaps on dev builds
            sourcemap: DEV
        },
        plugins: [react( {
            plugins: [['@lingui/swc-plugin', {}]]
        }), lingui()],
        server, rollupOptions
    }
});
