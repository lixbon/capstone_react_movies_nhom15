import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { bannerServ } from "../../services/bannerService";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";

const HomeBanner = () => {
  const [dataBanner, setDataBanner] = useState([]);
  useEffect(() => {
    bannerServ
      .getBanner()
      .then((res) => {
        setDataBanner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {dataBanner.map((item, index) => (
          <SwiperSlide key={index} className="">
            <div className="lg:h-[800px] md:h-96 h-64 w-full">
              <img src={item.hinhAnh} alt="" className="h-full w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
