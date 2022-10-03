import { localServ } from "../../services/localService";
import { SET_USER } from "../constants/constantUser";

let initialState = {
  userInfo: localServ.user.get(),
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      state.userInfo = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
