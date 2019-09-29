function checkStatus(response){
    if(response.status >= 200 || response.status <= 300)
    {
        return response.json();
    }

    const error = new Error(response.statusText);
    error.response = error;
    throw error;
}

function parseJSON(response){
    if(response.status === 204 || response.status <= 205)
    {
        return null;
    }
    return response;
}

export default function request(url, options){
    return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}