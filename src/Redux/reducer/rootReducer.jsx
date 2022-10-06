import { combineReducers } from "redux";
import { userReducer } from "./reducerUser";
import { spinnerReducer } from "./reducerSpinner";
import { moviesReducer } from "./moviesReducer";

export let rootReducer = combineReducers({
  userReducer,
  spinnerReducer,
  moviesReducer,
});
