import { defineConfig } from '@lingui/conf';

export default defineConfig({
    sourceLocale: 'en',           // Original locale of the contents
    locales: ['ko', 'en', 'ja', 'fr'],  // Officially supported locales of the contents

    catalogs: [
        { // Default map to extract *.po files from entire components
            path: '<rootDir>/src/locales/{locale}',
            include: ['<rootDir>/src'],
            exclude: ['<rootDir>/node_modules/**']
        },
    ],
});