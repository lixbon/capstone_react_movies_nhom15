import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserNav from "./UserNav";

export default function Header() {
  const [navColor, setnavColor] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setnavColor(true);
    } else {
      setnavColor(false);
    }
  };
  let navigate = useNavigate();
  window.addEventListener("scroll", changeNavColor);
  const goToPhimDaDat = () => {
    navigate("/bookedfilm");
  };
  return (
    <div
      className={`w-full fixed z-10 bg-[#000000f2]  ${
        navColor ? "shadow-md shadow-white" : ""
      }`}
    >
      <div className="max-w-layout mx-auto">
        <div className="h-20  flex mx-auto justify-between items-center">
          <NavLink to="/" className="text-white text-2xl font-medium">
            CyberSoftCinema
          </NavLink>
          <div className="flex space-x-10 text-xl">
            <NavLink to="/">
              <h3 className="text-white cursor-pointer">Trang Chủ</h3>
            </NavLink>
            <h3 onClick={goToPhimDaDat} className="text-white cursor-pointer">
              Phim Đã Đặt
            </h3>
            <h3 className="text-white cursor-pointer">Tìm Kiếm</h3>
            <h3 className="text-white cursor-pointer">Ứng Dụng</h3>
          </div>
          <UserNav />
        </div>
      </div>
    </div>
  );
}
