import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
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
  window.addEventListener("scroll", changeNavColor);
  return (
    <div
      className={`w-full fixed z-10 bg-color1 ${
        navColor ? "shadow-md shadow-white" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="h-20  flex mx-auto justify-between items-center">
          <span className="text-white text-2xl font-medium animate-bounce">
            CyberSoftCinema
          </span>
          <div className="flex space-x-10 text-xl">
            <NavLink to="/">
              <h3 className="text-white cursor-pointer">Home</h3>
            </NavLink>
            <h3 className="text-white cursor-pointer">Detail</h3>
          </div>
          <UserNav />
        </div>
      </div>
    </div>
  );
}
