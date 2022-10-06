import React from "react";
import { Tabs } from "antd";
import { useEffect } from "react";
import { moviesServ } from "../../services/movieService";
import { useState } from "react";
import ItemTabsMovie from "./ItemTabsMovie";

export default function TabsMovies() {
  const [dataMovies, setDataMovies] = useState([]);
  useEffect(() => {
    moviesServ
      .getMovieByTheater()
      .then((res) => {
        setDataMovies(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderContent = () => {
    return dataMovies.map((heThongRap, index) => {
      return (
        <Tabs.TabPane
          tab={<img className="w-16 h-16" src={heThongRap.logo} />}
          key={index}
        >
          <Tabs style={{ height: 600 }} tabPosition="left">
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <Tabs.TabPane
                  tab={
                    <div className="text-left w-48">
                      <p className="text-white truncate">{cumRap.tenCumRap}</p>
                      <p className="truncate">{cumRap.diaChi}</p>
                      <hr />
                    </div>
                  }
                  key={index}
                >
                  <div
                    style={{ height: 600 }}
                    className=" scrollbar-thin scrollbar-thumb-color3 scrollbar-track-color2 shadow-xl"
                  >
                    {cumRap.danhSachPhim.map((phim, index) => {
                      return <ItemTabsMovie key={index} data={phim} />;
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
    <div className="">
      <Tabs style={{ height: 600 }} tabPosition="left" defaultActiveKey="1">
        {renderContent()}
      </Tabs>
    </div>
  );
}
