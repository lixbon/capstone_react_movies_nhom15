import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserNav from "./UserNav";

export default function HeaderMobile({ nav, setNav }) {
  let navigate = useNavigate();
  const goToPhimDaDat = () => {
    setNav(!nav);
    navigate("/bookedfilm");
  };
  return (
    <div className="flex flex-col items-center space-y-10 lg:hidden h-screen w-screen">
      <NavLink
        to="/"
        onClick={() => {
          setNav(!nav);
        }}
      >
        <h3 className="text-white cursor-pointer text-2xl">Trang Chủ</h3>
      </NavLink>
      <h3
        onClick={goToPhimDaDat}
        className="text-white cursor-pointer text-2xl"
      >
        Phim Đã Đặt
      </h3>

      <a
        onClick={() => {
          setNav(!nav);
        }}
        className="text-white cursor-pointer text-2xl"
        href="https://capstone-react-admin.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Admin Panel
      </a>

      <UserNav />
    </div>
  );
}
