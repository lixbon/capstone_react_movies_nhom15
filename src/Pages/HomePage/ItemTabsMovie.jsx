import moment from "moment";
import React from "react";

export default function ItemTabsMovie({ data }) {
  return (
    <div className="flex p-3 space-x-5 border border-red-500 text-center">
      <img className="w-28 h-36 object-cover" src={data.hinhAnh} />
      <div className="flex-grow">
        <p>{data.tenPhim}</p>
        <div className="grid grid-cols-3 gap-5 ">
          {data.lstLichChieuTheoPhim.slice(0, 9).map((gioChieu, index) => {
            return (
              <div key={index} className="p-3 rounded bg-red-600 text-white">
                {moment(gioChieu.ngayChieuGioChieu).format(
                  "DD/MM_YYYY ~ hh:mm"
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
