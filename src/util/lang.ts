import Cookie from 'js-cookie';

export const locales = ['ko', 'en', 'ja', 'fr'] as const;

export const sourceLocale = 'en'!;

export type Locales = typeof locales[number];

function fallback(lang: string): Locales | undefined {
    lang = lang.toLowerCase();
    return locales.find(l => lang === l || lang.startsWith(l + '-')) || undefined;
}

const html = document.querySelector('html')!;

function detectLanguage() {
    let result: Locales | undefined;

    // STEP 1. Detect language request from URL SearchParams
    const query = new URLSearchParams(window.location.search);
    if (query.has('lang')) {
        result = fallback(query.get('lang')!);

        if(result) {
            Cookie.set('lang', result, {
                expires: 30,
                sameSite: 'strict',
                secure: false
            });
        }
    }

    // STEP 2. Detect language from cookie
    if (!result) {
        const cookieLang = Cookie.get('lang');
        if (cookieLang) {
            result = fallback(cookieLang);
        }
    }

    // STEP 3. Detect language from browser settings
    if (!result) {
        for (const lang of locales) {
            if (navigator.languages.includes(lang)) {
                result = lang;
                break;
            }
        }
    }

    html.lang = result || locales[0];

    return html.lang as string;
}

export function getLanguage(){
    return html?.lang as string || detectLanguage() || sourceLocale;
}