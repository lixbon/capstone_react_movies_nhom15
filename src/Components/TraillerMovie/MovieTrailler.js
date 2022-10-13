import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import {
  setMoviesTrailler,
  setMoviesTraillerModal,
} from "../../Redux/actions/actionsMovies";

export default function MovieTrailler() {
  let { moviesTrailler } = useSelector((state) => {
    return state.moviesReducer;
  });
  let dispatch = useDispatch();
  const handleSetMovieTraillerOff = () => {
    dispatch(setMoviesTrailler(""));
    dispatch(setMoviesTraillerModal());
  };

  return (
    <div className="relative">
      <div
        onClick={handleSetMovieTraillerOff}
        className="h-screen w-screen top-0 left-0 fixed bg-black opacity-60 z-10"
      ></div>
      <div className="z-20 border border-gray-400 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -top-14 -right-12">
          <AiOutlineClose
            onClick={handleSetMovieTraillerOff}
            size={50}
            className="text-white cursor-pointer hover:text-red-500"
          />
        </div>
        <iframe
          width="1024"
          height="768"
          src={moviesTrailler}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          tabindex="-1"
        ></iframe>
      </div>
    </div>
  );
}
