export async function getAsset(path: string){
    return fetch(getAssetURL(path));
}

export function getAssetURL(path: string){
    const lang = document.querySelector('html')?.lang ?? 'en';
    return (import.meta.env.DEV
        ? `/assets/${lang}/${path}`
        : `https://raw.githubusercontent.com/dowol/dowol/master/${lang}/${path}`)
        .replace(/\/{2,}/g, '/');
}