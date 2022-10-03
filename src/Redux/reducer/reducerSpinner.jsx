import { SET_LOADING_OFF, SET_LOADING_ON } from "../constants/contstantSpiner";

let initialState = {
  isLoading: false,
};
export const spinnerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_ON:
      return { ...state, isLoading: true };
    case SET_LOADING_OFF:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
