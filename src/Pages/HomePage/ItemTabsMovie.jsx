import { message } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function ItemTabsMovie({ data }) {
  const { userInfo } = useSelector((state) => {
    return state.userReducer;
  });
  let navigate = useNavigate();
  const handleGoCheckOutPage = (maLichChieu) => {
    if (userInfo) {
      navigate(`/purchase/${maLichChieu}`);
    } else {
      message.error("Bạn cần phải đăng nhập");
      navigate("/login");
    }
  };
  return (
    <div className="flex p-3 space-x-5 border border-color2 text-center">
      <img className="w-28 h-36 object-cover rounded-lg" src={data.hinhAnh} />
      <div className="flex-grow">
        <h2 className="text-white text-2xl">{data.tenPhim}</h2>
        <div className="grid grid-cols-3 gap-5 ">
          {data.lstLichChieuTheoPhim.slice(0, 9).map((gioChieu, index) => {
            return (
              <button
                onClick={() => {
                  handleGoCheckOutPage(gioChieu.maLichChieu);
                }}
                key={index}
                className="p-3 rounded bg-color2 text-white hover:-translate-y-2 duration-200 cursor-pointer"
              >
                {moment(gioChieu.ngayChieuGioChieu).format(
                  "DD/MM_YYYY ~ hh:mm"
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
