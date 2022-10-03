import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localServ } from "../../services/localService";

export default function UserNav() {
  let user = useSelector((state) => {
    return state.userReducer.userInfo;
  });
  const handleLogOut = () => {
    //xoa data tuw local
    localServ.user.remove();
    //remove data redux
    //dispatch({type:SET_USER,payload:null})
    window.location.href = "/login";
  };
  console.log(user);
  let renderContent = () => {
    if (user) {
      return (
        <>
          <span className="font-medium text-blue-500 underline">
            {user.hoTen}
          </span>
          <button
            onClick={handleLogOut}
            className="border rounded border-red-500 px-5 py-2 text-red-500"
          >
            Log Out
          </button>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login" className="space-x-5">
            <button className="px-4 py-2 border rounded bg-cyan-300 text-white hover:scale-110 duration-200">
              Login
            </button>
          </NavLink>
          <button className="px-4 py-2 border rounded bg-red-500 text-white hover:scale-110 duration-200">
            Register
          </button>
        </>
      );
    }
  };
  return <div className="space-x-5">{renderContent()}</div>;
}
