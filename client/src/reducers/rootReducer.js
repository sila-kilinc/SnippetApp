import { combineReducers } from "redux";
import snippetReducer from "./snippet";

const rootReducer = combineReducers({
    snippets: snippetReducer,
});

export default rootReducer;