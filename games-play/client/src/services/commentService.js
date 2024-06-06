import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (gameId) => {
    // With 'query' we will receive ONLY the current game comments! Not all, but ONLY for the current game!
    // It works only with collections (data), and not with 'jsonstore'.
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`
    });

    // ?${query.toString()}
    const result = await request.get(`${baseUrl}?${query}`);

    // TODO: temp solution until migration to collections service
    // return result.filter(comment => comment.gameId === gameId);

    return result;
};

export const create = async (gameId, username, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        text,
    })

    return newComment;
};