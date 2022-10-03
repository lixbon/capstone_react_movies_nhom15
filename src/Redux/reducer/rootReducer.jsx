import { combineReducers } from "redux";
import { userReducer } from "./reducerUser";
import { spinnerReducer } from "./reducerSpinner";

export let rootReducer = combineReducers({ userReducer, spinnerReducer });
