import { API_ROOT } from '../constants';
export  async function fetchApi(url, method, urlParams = {}, params = {}) {
    const processedUrl = processUrl(url, urlParams);
    return await fetch(`${API_ROOT}${processedUrl}`, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    }).then(async (res)=>{
        const json = await res.json();
        return json
    }).catch((error)=>{
        return { error }
    })
}

export function processUrl(url, params) {
    const urlParamsKeys = Object.keys(params);
    let processedUrl = url;
    if (urlParamsKeys.length > 0) {
        urlParamsKeys.forEach((key)=>{
            processedUrl = processedUrl.replace(`<${key}>`, params[key])
        })
    }
    return processedUrl;
}