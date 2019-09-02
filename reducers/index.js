import { createStore, combineReducers } from "redux";

import session from "./session";
import servers from "./servers";

export const rootReducer = combineReducers({
	session,
	servers
});