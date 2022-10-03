import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function ItemMovie({ data }) {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: "100%",
        }}
        cover={
          <img
            className="h-80 w-full object-cover"
            alt="example"
            src={data.hinhAnh}
          />
        }
      >
        <Meta title={<p className="text-red-500 truncate">{data.tenPhim}</p>} />
        <NavLink to={`/detail/${data.maPhim}`}>
          <button className="px-6 py-2 bg-cyan-500 text-white rounded-md hover:scale-110 hover:bg-blue-600 duration-300 cursor-pointer">
            Detail
          </button>
        </NavLink>
      </Card>
    </div>
  );
}
