import * as request from "../lib/request";

// Change 'jsonstore' to 'data'
const baseUrl = 'http://localhost:3030/data/games';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    // return Object.values(result); // We need this when we use 'jsonstore' not with 'data' in the baseUrl.
    return result;
}

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);
    return result;
}

export const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    // const responce = await fetch(baseUrl, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(gameData)
    // });
    // const result = await responce.json();

    return result;
}

export const edit = async (gameId, gameData) => {
    const result = await request.put(`${baseUrl}/${gameId}`, gameData);
    return result;
}