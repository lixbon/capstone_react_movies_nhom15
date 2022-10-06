import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { localServ } from "../../services/localService";
import Button from "../Button/Button";

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
  let renderContent = () => {
    if (user) {
      return (
        <>
          <span className=" italic text-white text-xl underline hover:text-color3 duration-200 hover:text-2xl cursor-pointer">
            {user.hoTen}
          </span>
          <Button content={"Logout"} f={handleLogOut} style={"bg-red-500"} />
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login" className="space-x-5">
            <Button content={"Đăng Nhập"} />
          </NavLink>
          <NavLink to="/register" className="space-x-5">
            <Button content={"Đăng Ký"} style={"bg-red-500"} />
          </NavLink>
        </>
      );
    }
  };
  return <div className="space-x-5">{renderContent()}</div>;
}
