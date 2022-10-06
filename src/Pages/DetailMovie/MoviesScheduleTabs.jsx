import React from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import Button from "../../Components/Button/Button";
import moment from "moment";
import { NavLink, useNavigate } from "react-router-dom";

export default function MoviesScheduleTabs() {
  let moviesDetail = useSelector((state) => {
    return state.moviesReducer.moviesDetail;
  });
  const handleGoCheckOutPage = (maLichChieu) => {};
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
                        <div key={index}>
                          <div
                            onClick={() => {
                              navigate(
                                `/purchase/${lichChieuPhim.maLichChieu}`
                              );
                            }}
                          >
                            <Button
                              content={moment(
                                lichChieuPhim.ngayChieuGioChieu
                              ).format("DD/MM_YYYY ~ hh:mm")}
                            />
                          </div>
                        </div>
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
