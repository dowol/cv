import {getLanguage} from './lang.ts';

export function local(path: string, type: 'json'): Promise<any>;
export function local(path: string, type: 'text'): Promise<string>;
export async function local(path: string, type: 'json' | 'text') {
    const lang = getLanguage();
    return fetch(`https://raw.githubusercontent.com/dowol/dowol/refs/heads/master/cv/${lang}/${path}`).then(res => res[type]());
}

export async function global(path: string): Promise<object> {
    return fetch(`https://raw.githubusercontent.com/dowol/dowol/refs/heads/master/cv/${path}`).then(res => res.json());
}