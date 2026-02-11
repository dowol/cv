import {useEffect, useState} from "react";

const bodyType = ['formData', 'blob', 'text', 'json'] as const;
export type BodyType = typeof bodyType[number] | undefined;
export type AssetsBodyType = FormData | Blob | string | any;

// export async function getAsset(path: string, type: 'json'): Promise<any>;
// export async function getAsset(path: string, type: 'formData'): Promise<FormData>;
// export async function getAsset(path: string, type: 'blob'): Promise<Blob>;
// export async function getAsset(path: string, type: 'text'): Promise<string>;
export async function getAsset<T extends AssetsBodyType>(path: string, type: BodyType = 'json') : Promise<T> {
    return fetch(getAssetURL(path))
        .then(res => {
            if(res.ok) return res[type]();
            else throw res;
        });

}

export function useAsset(path: string, type: 'json'): any;
export function useAsset(path: string, type: 'formData'): FormData;
export function useAsset(path: string, type: 'blob'): Blob;
export function useAsset(path: string, type: 'text'): string;
export function useAsset<T extends AssetsBodyType>(path: string, type: BodyType = 'json') : T  {
    const [asset, setAsset] = useState<T>(null as T);

    useEffect(() => {
        getAsset<T>(path, type)
            .then(res => setAsset(res));
    }, []);

    return asset;
}

export function getAssetURL(path: string){
    const isInvariant = path.startsWith('@')
    const lang = isInvariant ? '' : document.querySelector('html')?.lang || 'en';
    if(isInvariant) path = path.substring(1);

    return (import.meta.env.DEV
        ? `/assets/${lang}/${path}`.replace(/\/{2,}/g, '/')
        : `https://raw.githubusercontent.com` + `/dowol/dowol/master/cv/${lang}/${path}`.replace(/\/{2,}/g, '/'));
}