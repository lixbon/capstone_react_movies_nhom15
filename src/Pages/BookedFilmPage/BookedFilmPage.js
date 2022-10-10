import React from "react";
import { useSelector } from "react-redux";

export default function BookedFilmPage() {
  let bookedFilmList = useSelector((state) => {
    return state.placeOrderReducer.danhSachPhimDaDat;
  });
  const renderDanhSachPhimDaDat = () => {
    return bookedFilmList?.map((ThongTinDatVe, index) => {
      return (
        <div className="border border-white">
          <div className="grid grid-cols-3" key={index}>
            <div>{ThongTinDatVe.maLichChieu}</div>
            <div>
              <img src={ThongTinDatVe.hinhAnh} alt="" className="h-40" />
              <h4 className="text-white">Tên Phim:{ThongTinDatVe.tenPhim}</h4>
            </div>
            <div>
              <div className="flex space-x-5">
                <h3 className="text-white">Ghế:</h3>
                {ThongTinDatVe.danhSachVe.map((ghe, index) => {
                  return (
                    <h3 className="text-white" key={index}>
                      {ghe.tenGhe}
                    </h3>
                  );
                })}
              </div>

              <h3 className="text-white">Rạp:</h3>
              <h3 className="text-white">Thời Gian Chiếu:</h3>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="max-w-layout mx-auto text-white">
        <div className="border border-white rounded-lg">
          <div className="grid grid-cols-3">
            <div>Mã Lịch Chiếu</div>
            <div>Thông Tin Phim</div>
            <div>Thông Tin Đặt Chỗ</div>
          </div>
          <hr />
          {renderDanhSachPhimDaDat()}
        </div>
      </div>
    </div>
  );
}
