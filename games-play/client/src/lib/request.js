export const request = async (method, url, data) => {
    const responce = await fetch(url, {
        method,
    });

    const result = await responce.json();
    return result;
}