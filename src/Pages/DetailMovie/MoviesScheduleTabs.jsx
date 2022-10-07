import React from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function MoviesScheduleTabs() {
  let moviesDetail = useSelector((state) => {
    return state.moviesReducer.moviesDetail;
  });
  const { userInfo } = useSelector((state) => {
    return state.userReducer;
  });
  const handleGoCheckOutPage = (maLichChieu) => {
    if (userInfo) {
      navigate(`/purchase/${maLichChieu}`);
    } else {
      navigate("/login");
    }
  };
  let navigate = useNavigate();
  let renderDetail = () => {
    return moviesDetail.heThongRapChieu?.map((hethongRap, index) => {
      return (
        <Tabs.TabPane
          tab={<img className="w-16 h-16" src={hethongRap.logo} />}
          key={index}
        >
          <Tabs style={{ height: 600 }} tabPosition="left">
            {hethongRap.cumRapChieu.map((cumRapChieu, index) => {
              return (
                <Tabs.TabPane
                  tab={
                    <div className="text-left w-64 py-4 border-b-2">
                      <h5 className=" truncate text-white">
                        {cumRapChieu.tenCumRap}
                      </h5>
                      <h5 className="truncate text-white">
                        {cumRapChieu.diaChi}
                      </h5>
                    </div>
                  }
                  key={index}
                >
                  <div className="grid gap-8 grid-cols-4 py-4">
                    {cumRapChieu.lichChieuPhim.map((lichChieuPhim, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            handleGoCheckOutPage(lichChieuPhim.maLichChieu);
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-md hover:scale-110 hover:from-red-400 hover:to-purple-400 duration-300 cursor-pointer"
                        >
                          {moment(lichChieuPhim.ngayChieuGioChieu).format(
                            "DD/MM_YYYY ~ hh:mm"
                          )}
                        </button>
                      );
                    })}
                  </div>
                </Tabs.TabPane>
              );
            })}
          </Tabs>
        </Tabs.TabPane>
      );
    });
  };
  return (
    <div className="border-white border rounded-xl">
      <Tabs style={{ height: 600 }} tabPosition="left" defaultActiveKey="1">
        {renderDetail()}
      </Tabs>
    </div>
  );
}
