import Cookie from 'js-cookie';

const html = document.querySelector('html') as HTMLHtmlElement;

export const supported = Object.freeze(['en', 'ko', 'ja']);

function fallback(lang: string): string | undefined {
    lang = lang.toLowerCase();
    return supported.find(l => lang === l || lang.startsWith(l + '-')) || undefined;
}

export function detectLanguage() {
    let result: string | undefined;

    // STEP 1. Detect language request from URL SearchParams
    const query = new URLSearchParams(window.location.search);
    if (query.has('lang')) {
        result = fallback(query.get('lang')!);
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
        for (const lang of supported) {
            if (navigator.languages.includes(lang)) {
                result = lang;
                break;
            }
        }
    }

    html.lang = result || supported[0];
}

export function useLanguage(): string {
    return html?.lang ?? supported[0];
}