import {useEffect, useState} from "react";

const RE_DUPESLASH = /\/{2,}/g;

const bodyType = ['formData', 'blob', 'text', 'json'] as const;
export type BodyType = typeof bodyType[number];
export type AssetsBodyType = FormData | Blob | string | any;

// export async function getAsset(path: string, type: 'json'): Promise<any>;
// export async function getAsset(path: string, type: 'formData'): Promise<FormData>;
// export async function getAsset(path: string, type: 'blob'): Promise<Blob>;
// export async function getAsset(path: string, type: 'text'): Promise<string>;
export async function getAsset<T extends AssetsBodyType>(path: string, type: BodyType = 'json') : Promise<T> {
    if(type === 'json') {
        let result: any = {} ;

        const res_iasset = await fetch(getInvariantAssetURL(path), {cache: 'force-cache'});
        if(res_iasset.ok && res_iasset.headers.get('Content-Type')?.includes('json'))
            result = await res_iasset.json();

        const res_lasset = await fetch(getAssetURL(path), {cache: 'force-cache'});
        if(res_lasset.ok && res_lasset.headers.get('Content-Type')?.includes('json')) {
            const la_result = await res_lasset.json();
            if(Array.isArray(result) && Array.isArray(la_result)) {
                result.map(item => {
                    Object.assign(item, la_result.find(i => i.id === item.id))
                });
            }
            else Object.assign(result, la_result)
        }

        console.log(`JSON Asset: ${path}`, result);

        return result;
    }

    else return fetch(getAssetURL(path))
        .then(res => {
            if(res.ok) return res[type as BodyType]();
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
        ? `/assets/${lang}/${path}`.replace(RE_DUPESLASH, '/')
        : `https://raw.githubusercontent.com` + `/dowol/dowol/master/cv/${lang}/${path}`.replace(RE_DUPESLASH, '/'));
}

function getInvariantAssetURL(path: string) {
    return (import.meta.env.DEV
        ? `/assets/${path}`.replace(RE_DUPESLASH, '/')
        : `https://raw.githubusercontent.com` + `/dowol/dowol/master/cv/${path}`.replace(RE_DUPESLASH, '/')
    );
}