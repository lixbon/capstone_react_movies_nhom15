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
        onLoginFail();
        console.log(err);
      });
  };
};
