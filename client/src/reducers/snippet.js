import * as types from "../actions/types";

const initialState ={
    snippets: []
};

const snippetReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SNIPPETS:
            return {
                ...state,
                snippets: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default snippetReducer;