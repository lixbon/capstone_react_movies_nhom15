import { SET_MOVIEDETAIL, SET_MOVIESLIST } from "../constants/constantMovies";

export const setMoviesList = (moviesList) => {
  return {
    type: SET_MOVIESLIST,
    payload: moviesList,
  };
};
export const setMoviesDetail = (moviedetail) => {
  return {
    type: SET_MOVIEDETAIL,
    payload: moviedetail,
  };
};
