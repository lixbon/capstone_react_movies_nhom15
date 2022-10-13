import {
  SET_MOVIEDETAIL,
  SET_MOVIESLIST,
  SET_MOVIETRAILLER,
  SET_MOVIETRAILLERMODAL,
} from "../constants/constantMovies";

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
export const setMoviesTrailler = (movietrailler) => {
  return {
    type: SET_MOVIETRAILLER,
    payload: movietrailler,
  };
};
export const setMoviesTraillerModal = (ismovietrailler) => {
  return {
    type: SET_MOVIETRAILLERMODAL,
    payload: ismovietrailler,
  };
};
