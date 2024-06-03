const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        }
    }

    return options;
}

export const request = async (method, url, data) => {
    const responce = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    // ...buildOptions(data) is an object - full or empty, so we destructuring it

    const result = await responce.json();
    return result;
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');