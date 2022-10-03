import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Spinner from "../../Components/Spinner/Spinner";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../Redux/actions/actionSpinner";
import { moviesServ } from "../../services/movieService";
import ItemMovie from "./ItemMovie";
import TabsMovies from "./TabsMovies";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingOnAction());
    moviesServ
      .getListMovie()
      .then((res) => {
        dispatch(setLoadingOffAction());
        setMovies(res.data.content);
      })
      .catch((err) => {
        dispatch(setLoadingOffAction());
        console.log(err);
      });
  }, []);
  const renderMovies = () => {
    return movies.map((data, index) => {
      return <ItemMovie key={index} data={data} />;
    });
  };
  return (
    <div className="container mx-auto space-y-10">
      <div className="grid grid-cols-5 gap-10 ">{renderMovies()}</div>
      <div>
        <TabsMovies />
      </div>
    </div>
  );
}
