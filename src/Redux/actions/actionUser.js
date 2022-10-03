import { userServ } from "../../services/userService";
import { SET_USER } from "../constants/constantUser";
import { localServ } from "../../services/localService";

const setUserLoginSuccess = (successValue) => {
  return {
    type: SET_USER,
    payload: successValue,
  };
};
export const setUserLoginActionServ = (
  dataLogin,
  onLoginSuccess,
  onLoginFail
) => {
  return (dispatch) => {
    userServ
      .postLogin(dataLogin)
      .then((res) => {
        localServ.user.set(res.data.content);
        onLoginSuccess();
        dispatch(setUserLoginSuccess(res.data.content));
      })
      .catch((err) => {
        onLoginFail(err.response.data.content);
      });
  };
};
export const setUserRegisterActionServ = (
  dataRegister,
  onRegisterSuccess,
  onRegisterFail
) => {
  return (dispatch) => {
    userServ
      .postRegister(dataRegister)
      .then((res) => {
        localServ.user.set(res.data.content);
        onRegisterSuccess();
        dispatch(setUserLoginSuccess(res.data.content));
      })
      .catch((err) => {
        onRegisterFail(err.response.data.content);
      });
  };
};
