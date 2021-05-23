import * as types from "./types";

export const fetchSnippets = () => {
    return {
        type: types.FETCH_SNIPPETS,
        payload: [],
    };
};