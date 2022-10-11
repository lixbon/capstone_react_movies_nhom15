import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  datVeAction,
  pickSeat,
  setRoomTicket,
} from "../../Redux/actions/actionRoomTicket";
import { placeOrderService } from "../../services/placeOrderService";
import "./checkOut.css";
import _ from "lodash";
import { ThongTinDatVe } from "../../Model/ThongTinDatVe";
import { message } from "antd";
import HomeBanner from "../HomePage/HomeBanner";
import Screen from "../../assets/img/bg_screen.gif";

export default function CheckOutPage() {
  const { userInfo } = useSelector((state) => {
    return state.userReducer;
  });
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { maLichChieu } = useParams();
  useEffect(() => {
    placeOrderService
      .getRoomTicketbyID(maLichChieu)
      .then((res) => {
        dispatch(setRoomTicket(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { chiTietPhongVe, danhSachGheDangDat } = useSelector((state) => {
    return state.placeOrderReducer;
  });
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      let indexgheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexgheDD != -1) {
        classGheDangDat = "gheDangDat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch(pickSeat(ghe));
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
          >
            {ghe.daDat ? "X" : ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  const datVe = () => {
    const thongTinDatVe = new ThongTinDatVe();
    thongTinDatVe.maLichChieu = maLichChieu;
    thongTinDatVe.danhSachVe = danhSachGheDangDat;
    thongTinDatVe.thongTinPhim = thongTinPhim;

    let onSuccess = () => {
      message.success("Đặt Vé Thành Công");
      setTimeout(() => {
        navigate("/bookedfilm");
      }, 1000);
    };
    let onFail = (reason) => {
      message.error(reason);
    };
    dispatch(datVeAction(thongTinDatVe, onSuccess, onFail));
  };
  return (
    <div className="max-w-layout mx-auto py-10">
      <div className="block lg:flex space-y-10">
        <div className="w-full  lg:w-9/12 flex flex-col items-center space-y-10 mx-auto">
          <div className="relative">
            <img src={Screen} alt="" className="w-[850px] h-8" />
            <h3 className="text-2xl absolute top-0 left-1/2 -translate-x-1/2">
              Screen
            </h3>
          </div>
          <div className="w-[760px]">{renderSeats()}</div>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="ghe gheVip"></div>
              <div className="text-white">Ghế VIP</div>
            </div>
            <div className="flex items-center">
              <div className="ghe"></div>
              <div className="text-white">Ghế thường</div>
            </div>
            <div className="flex items-center">
              <div className="ghe gheDaDat flex justify-center items-center">
                X
              </div>
              <div className="text-white">Ghế không thể chọn</div>
            </div>
            <div className="flex items-center">
              <div className="ghe gheDangDat"></div>
              <div className="text-white">Ghế Đã chọn</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/12 text-white flex lg:block">
          <div className="w-1/2 lg:w-full flex flex-col justify-center">
            <h3 className="text-center text-2xl text-red-500">
              {danhSachGheDangDat
                .reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}
              <span> VNĐ</span>
            </h3>

            <h3 className="text-xl text-white">{thongTinPhim?.tenPhim}</h3>
            <p className="text-xl text-white">{thongTinPhim?.tenCumRap}</p>
            <h3 className="text-xl text-red-400">
              {" "}
              {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
            </h3>

            <div className="">
              <div className="flex items-center space-x-2 py-2">
                <span className="text-xl">Ghế:</span>
                <div className="grid grid-cols-6">
                  {_.sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                    return (
                      <span key={index} className="text-green-500 text-xl mr-2">
                        {gheDD.stt}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 lg:w-full flex flex-col justify-center">
            <div>
              <h3 className="text-white text-xl">
                Email: <span className="text-red-400">{userInfo.email}</span>
              </h3>
              <h3 className="text-white text-xl">
                Số Điện Thoại:{" "}
                <span className="text-red-400">{userInfo.soDT}</span>
              </h3>
            </div>
            <div className="mt-10">
              <button
                className="bg-green-500 px-10 py-3 rounded-lg text-xl hover:bg-red-300 hover:text-gray-500 duration-200 hover:scale-105"
                onClick={datVe}
              >
                Đặt vé
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <HomeBanner />
      </div>
    </div>
  );
}
