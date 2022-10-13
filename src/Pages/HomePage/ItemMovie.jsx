import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { BsFillPlayFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  setMoviesTrailler,
  setMoviesTraillerModal,
} from "../../Redux/actions/actionsMovies";
const { Meta } = Card;

export default function ItemMovie({ data }) {
  let dispatch = useDispatch();
  const handleSetMovieTrailler = (movietrailler) => {
    dispatch(setMoviesTrailler(movietrailler));
    dispatch(setMoviesTraillerModal());
  };
  return (
    <div className="border-white border group relative">
      <div>
        <Card
          hoverable
          style={{
            width: "100%",
          }}
          cover={
            <img
              className="h-80 object-cover"
              alt="example"
              src={data.hinhAnh}
            />
          }
        >
          <Meta
            title={<p className="text-color1 truncate">{data.tenPhim}</p>}
          />
          <NavLink to={`/detail/${data.maPhim}`}>
            <Button content={"MUA VÉ"} />
          </NavLink>
        </Card>
      </div>
      <div className="bg-[#00000080] absolute top-0 left-0 w-full h-80 opacity-100 duration-200">
        <div className="flex items-center justify-center h-full">
          <div
            onClick={() => {
              handleSetMovieTrailler(data.trailer);
            }}
            className="w-20 h-20 border-white border rounded-full flex justify-center items-center z-10 cursor-pointer text-white hover:text-red-600 duration-200"
          >
            <BsFillPlayFill size={50} className=" " />
          </div>
        </div>
      </div>
    </div>
  );
}
