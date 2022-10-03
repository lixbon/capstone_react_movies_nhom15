import React from "react";
import { PacmanLoader } from "react-spinners";
import { useSelector } from "react-redux";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerReducer);
  return isLoading ? (
    <div
      style={{ marginTop: 0 }}
      className="h-screen w-screen fixed left-0 top-0 bg-[#0c0c0cec] flex justify-center items-center z-50"
    >
      <PacmanLoader size={100} color="#ffb703" />
    </div>
  ) : (
    <></>
  );
}
