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
    localServ.user.remove();

    window.location.href = "/login";
  };
  let renderContent = () => {
    if (user) {
      return (
        <>
          <span className=" italic text-white text-xl underline hover:text-color3 duration-200 hover:text-2xl cursor-pointer">
            {user.hoTen}
          </span>
          <Button content={"Đăng Xuất"} f={handleLogOut} style={"bg-red-500"} />
        </>
      );
    } else {
      return (
        <div className="space-x-4">
          <NavLink to="/login" className="">
            <Button content={"Đăng Nhập"} />
          </NavLink>
          <NavLink to="/register" className="">
            <Button content={"Đăng Ký"} style={"bg-red-500"} />
          </NavLink>
        </div>
      );
    }
  };
  return <div className="space-x-5">{renderContent()}</div>;
}
