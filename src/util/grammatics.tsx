import {type SupportedLanguages, useLanguage} from "./lang.ts";
import {type ReactNode, useCallback} from "react";

const postModifier: SupportedLanguages[] = ['ko', 'ja'];

export function useModifier(){
    const lang = useLanguage();

    return useCallback((word: ReactNode, modifier: string) => {
        return postModifier.includes(lang) ? <>{word}&nbsp;{modifier}</> : <>{modifier}&nbsp;{word}</>
    }, [lang]);
}