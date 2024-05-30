import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const result = await request('GET', baseUrl);
    console.log(result);

    return Object.values(result);
}

export const create = async (gameData) => {
    const responce = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await responce.json();
    return result;
}