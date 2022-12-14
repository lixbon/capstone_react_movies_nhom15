import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Button/Button";
import MovieTrailler from "../../Components/TraillerMovie/MovieTrailler";
import { setMoviesList } from "../../Redux/actions/actionsMovies";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../Redux/actions/actionSpinner";
import { moviesServ } from "../../services/movieService";
import HomeBanner from "./HomeBanner";
import ItemMovie from "./ItemMovie";
import TabsMovies from "./TabsMovies";

export default function HomePage() {
  let movies = useSelector((state) => {
    return state.moviesReducer.moviesList;
  });
  let { isTraillerModal } = useSelector((state) => {
    return state.moviesReducer;
  });
  const [showAllFilm, setshowAllFilm] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingOnAction());
    moviesServ
      .getListMovie()
      .then((res) => {
        dispatch(setLoadingOffAction());
        dispatch(setMoviesList(res.data.content));
      })
      .catch((err) => {
        dispatch(setLoadingOffAction());
        console.log(err);
      });
  }, []);
  const renderMovies = (num) => {
    return movies.slice(0, num).map((data, index) => {
      return <ItemMovie key={index} data={data} />;
    });
  };
  const renderFullMovies = () => {
    return movies.map((data, index) => {
      return <ItemMovie key={index} data={data} />;
    });
  };
  let handleShowMoreFilm = () => {
    setshowAllFilm(true);
  };
  let handleShowLessFilm = () => {
    setshowAllFilm(false);
  };

  return (
    <div className="max-w-layout mx-auto space-y-10">
      <HomeBanner />
      <div className=" hidden lg:grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {showAllFilm ? renderFullMovies() : renderMovies(8)}
      </div>
      <div className="grid lg:hidden  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {showAllFilm ? renderFullMovies() : renderMovies(6)}
      </div>
      <div className="flex justify-center">
        {showAllFilm ? (
          <Button content={"R??t g???n"} f={handleShowLessFilm} />
        ) : (
          <Button content={"Xem t???t c???"} f={handleShowMoreFilm} />
        )}
      </div>
      <div>
        <TabsMovies />
      </div>
      {isTraillerModal ? (
        <div>
          <MovieTrailler />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
