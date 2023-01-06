import {
    GET_CHARACTERS_SUCCESS,
    GET_EPISODES_SUCCESS
} from './types';

export function getAllCharacters(characters) {
    return {
        type: GET_CHARACTERS_SUCCESS,
        payload: characters
    }
}

export function getAllEpisodes(episodes) {
    return {
        type: GET_EPISODES_SUCCESS,
        payload: episodes
    }
}