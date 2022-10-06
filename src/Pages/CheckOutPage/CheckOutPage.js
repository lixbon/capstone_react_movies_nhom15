import React from "react";
import { useParams } from "react-router-dom";

export default function CheckOutPage() {
  const { maLichChieu } = useParams();
  return <div>CheckOutPage{maLichChieu}</div>;
}
