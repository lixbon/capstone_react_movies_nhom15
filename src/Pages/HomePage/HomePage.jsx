import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../Components/Button/Button";
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
  const [showAllFilm, setshowAllFilm] = useState(false);
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
    return movies.slice(0, 10).map((data, index) => {
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
    <div className="container mx-auto space-y-10">
      <div className="grid grid-cols-5 gap-10 ">
        {showAllFilm ? renderFullMovies() : renderMovies()}
      </div>
      <div className="flex justify-center">
        {showAllFilm ? (
          <Button content={"View Less"} f={handleShowLessFilm} />
        ) : (
          <Button content={"View More"} f={handleShowMoreFilm} />
        )}
      </div>
      <div>
        <TabsMovies />
      </div>
    </div>
  );
}
