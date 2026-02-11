import Cookie from 'js-cookie';
import {useMemo} from "react";

const html = document.querySelector('html') as HTMLHtmlElement;

export const supportedLanguages = ['en', 'ko', 'ja', 'fr'] as const;

export type SupportedLanguages = typeof supportedLanguages[number];

function fallback(lang: string): SupportedLanguages | undefined {
    lang = lang.toLowerCase();
    return supportedLanguages.find(l => lang === l || lang.startsWith(l + '-')) || undefined;
}

export function detectLanguage() {
    let result: SupportedLanguages | undefined;

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
        for (const lang of supportedLanguages) {
            if (navigator.languages.includes(lang)) {
                result = lang;
                break;
            }
        }
    }

    html.lang = result || supportedLanguages[0];
}

export function useLanguage(): SupportedLanguages {
    return useMemo<SupportedLanguages>(() => html?.lang as SupportedLanguages ?? supportedLanguages[0], []);
}