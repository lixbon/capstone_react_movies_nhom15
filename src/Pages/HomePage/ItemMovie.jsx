import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import Button from "../../Components/Button/Button";
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
        <Meta title={<p className="text-color1 truncate">{data.tenPhim}</p>} />
        <NavLink to={`/detail/${data.maPhim}`}>
          <Button content={"Xem Chi Tiết"} />
        </NavLink>
      </Card>
    </div>
  );
}
