export function shorten(url: string | URL) : string {
    try {
        if(typeof url === 'string')
            url = new URL(url);

        return url.host + url.pathname + url.search;
    }
    catch {
        return '';
    }
}