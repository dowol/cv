import {defineConfig, type ServerOptions} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({mode}) => {
    const server: ServerOptions | undefined =
        mode === 'development' ? {
            // Configure backend proxy for dev mode
            proxy: {
                '/api': {
                    target: 'http://localhost:3000/',
                    changeOrigin: true
                }
            }
        } : undefined;

    const rollupOptions = mode !== 'development' ? {
        // Exclude static assets on non-dev mode
        external: ['public/assets/**/*']
    } : undefined;

    return {
        build: {
            // Generate sourcemaps when in dev mode
            sourcemap: mode === 'development'
        },
        plugins: [react()],
        server, rollupOptions
    }
});
