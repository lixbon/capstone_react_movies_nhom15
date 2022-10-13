import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removePickedSeat } from "../../Redux/actions/actionRoomTicket";
import HeaderMobile from "./HeaderMobile";
import UserNav from "./UserNav";

export default function Header() {
  const [navColor, setnavColor] = useState(false);
  const [nav, setNav] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setnavColor(true);
    } else {
      setnavColor(false);
    }
  };
  const { userInfo } = useSelector((state) => {
    return state.userReducer;
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  window.addEventListener("scroll", changeNavColor);
  const goToPhimDaDat = () => {
    if (userInfo) {
      navigate("/bookedfilm");
      dispatch(removePickedSeat());
    } else {
      navigate("/login");
    }
  };
  const goHomePage = () => {
    navigate("/");
    dispatch(removePickedSeat());
  };
  return (
    <div
      className={`w-full fixed z-10 bg-[#000000f2]  ${
        navColor ? "shadow-md shadow-white" : ""
      }`}
    >
      <div className="max-w-layout mx-auto h-20 flex justify-between items-center ">
        <div>
          <h3
            onClick={goHomePage}
            className="text-white text-2xl font-medium cursor-pointer hover:text-red-500 duration-200"
          >
            CyberSoftCinema
          </h3>
        </div>
        <div className="hidden lg:flex justify-between items-center space-x-4">
          <div className="flex lg:space-x-5 lg:text-lg xl:space-x-14 xl:text-xl">
            <h3
              onClick={goHomePage}
              className="text-white cursor-pointer hover:text-red-500 hover:scale-105 duration-200 mb-0"
            >
              Trang Chủ
            </h3>

            <h3
              onClick={goToPhimDaDat}
              className="text-white cursor-pointer  hover:text-red-500 hover:scale-105 duration-200 mb-0"
            >
              Phim Đã Đặt
            </h3>

            <a
              href="https://capstone-react-admin.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-white cursor-pointer  hover:text-red-500 hover:scale-105 duration-200 mb-0"
            >
              Admin Panel
            </a>
          </div>
          <UserNav />
        </div>

        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="cursor-pointer z-20 text-gray-500 lg:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      {nav && <HeaderMobile nav={nav} setNav={setNav} />}
    </div>
  );
}
