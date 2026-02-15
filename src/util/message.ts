import {useAsset} from "./assets-legacy.ts";

export default function useMessage() {
    return useAsset('message.json', 'json') as Record<string, string>;
}