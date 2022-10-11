import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { moviesServ } from "../../services/movieService";
import { setMoviesDetail } from "../../Redux/actions/actionsMovies";
import MoviesScheduleTabs from "./MoviesScheduleTabs";
import { Rate } from "antd";
import Button from "../../Components/Button/Button";
import moment from "moment";

export default function DetailMovie(props) {
  let dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    moviesServ
      .getMovieDetailbyID(id)
      .then((res) => {
        dispatch(setMoviesDetail(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let moviesDetail = useSelector((state) => {
    return state.moviesReducer.moviesDetail;
  });
  let { hinhAnh, tenPhim, moTa, ngayKhoiChieu, danhGia, biDanh } = moviesDetail;

  return (
    <div className="max-w-layout mx-auto bg-[#000000cc]">
      <div className="grid grid-cols-10">
        <div className="col-span-2 p-4 relative">
          <img src={hinhAnh} alt="" className="w-72 h-full" />
          <div className="absolute bottom-0 -translate-y-full left-1/2 -translate-x-1/2">
            <Button content={"Xem Phim"} />
          </div>
        </div>
        <div className=" flex flex-col justify-center space-y-2 col-span-6 pl-10">
          <h3 className="text-3xl text-blue-500">Phim {tenPhim}</h3>
          <h3 className="text-white capitalize">
            <span className="text-color3">Bí Danh</span>:{biDanh}
          </h3>
          <h4 className="text-white">
            <span className="text-color3">Nội Dung</span>: {moTa}
          </h4>
          <h3 className="text-white">
            <span className="text-color3">Ngày Khởi Chiếu</span>:{" "}
            {moment(ngayKhoiChieu).format("DD/MM_YYYY ~ hh:mm")}
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center col-span-2">
          <div className="border-[8px] border-green-600 w-24 h-24 lg:w-32 lg:h-32 flex justify-center items-center rounded-full">
            <h3 className="text-white text-2xl lg:text-4xl">{danhGia}</h3>
          </div>
          <div>
            <Rate allowHalf defaultValue={danhGia / 2} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white text-center text-2xl">Lịch Chiếu Phim:</h3>
        <MoviesScheduleTabs />
      </div>
    </div>
  );
}
