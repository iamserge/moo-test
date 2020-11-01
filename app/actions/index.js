import { API_ROOT } from '../constants';
export function fetchApi(url, method, urlParams = {}, params = {}) {
    const processedUrl = processUrl(url, urlParams);
    const fetchParams = {
        method,
        headers: {
            "Content-Type": "application/json",
        }
    }
    if (method !== 'GET') {
        fetchParams.body = JSON.stringify(params);
    }
    return fetch(`${API_ROOT}${processedUrl}`, fetchParams).then(async (res) => {
        const json = await res.json();
        return json
    }).catch((error) => {
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