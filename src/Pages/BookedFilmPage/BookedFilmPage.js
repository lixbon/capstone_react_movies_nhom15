import React from "react";
import { useSelector } from "react-redux";

export default function BookedFilmPage() {
  let bookedFilmList = useSelector((state) => {
    return state.placeOrderReducer.danhSachPhimDaDat;
  });
  const renderDanhSachPhimDaDat = () => {
    return bookedFilmList?.map((ThongTinDatVe, index) => {
      return (
        <div className="">
          <div className="grid grid-cols-3" key={index}>
            <div className="flex items-center justify-center">
              <h3 className="text-white">{ThongTinDatVe.maLichChieu}</h3>
            </div>
            <div className="flex pl4 py-4 space-x-2">
              <img
                src={ThongTinDatVe.thongTinPhim.hinhAnh}
                alt=""
                className="h-40"
              />
              <h4 className="text-white">
                Tên Phim:{" "}
                <span className="text-red-500">
                  {ThongTinDatVe.thongTinPhim.tenPhim}
                </span>
              </h4>
            </div>
            <div className="pl-4 py-4">
              <div className="flex space-x-5">
                <h3 className="text-white">Ghế:</h3>
                {ThongTinDatVe.danhSachVe.map((ghe, index) => {
                  return (
                    <h3 className="text-red-500 underline" key={index}>
                      {ghe.tenGhe}
                    </h3>
                  );
                })}
              </div>

              <h3 className="text-white">
                Rạp:{" "}
                <span className="text-red-500">
                  {ThongTinDatVe.thongTinPhim.tenCumRap}
                </span>
              </h3>
              <h3 className="text-white">
                Địa Chỉ:{" "}
                <span className="text-red-500">
                  {ThongTinDatVe.thongTinPhim.diaChi}
                </span>
              </h3>
              <h3 className="text-white">
                Thời Gian Chiếu:{" "}
                <span className="text-red-500">
                  {ThongTinDatVe.thongTinPhim.ngayChieu}-
                </span>
                <span className="text-red-500">
                  {ThongTinDatVe.thongTinPhim.gioChieu}
                </span>
              </h3>
            </div>
          </div>
          {index !== bookedFilmList.length - 1 ? <hr /> : ""}
        </div>
      );
    });
  };
  return (
    <div>
      <div className="max-w-layout min-h-[80vh] mx-auto text-white pt-10">
        {bookedFilmList.length > 0 ? (
          <div className="border border-white rounded-lg">
            <h2 className="text-center text-2xl text-white">
              Thông Tin Đặt vé của bạn
            </h2>

            <div className="grid grid-cols-3">
              <div className="border border-white">
                <h3 className="text-white text-center">Mã Lịch Chiếu</h3>{" "}
              </div>
              <div className="border border-white">
                <h3 className="text-white text-center">Thông Tin Phim</h3>{" "}
              </div>
              <div className="border border-white">
                <h3 className="text-white text-center">Thông Tin Đặt Chỗ</h3>{" "}
              </div>
            </div>
            {renderDanhSachPhimDaDat()}
          </div>
        ) : (
          <div className=" py-10">
            <h3 className="text-center text-3xl text-white">
              Chưa có phim nào được đặt
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
