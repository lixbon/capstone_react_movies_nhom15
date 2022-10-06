import { SET_MOVIEDETAIL, SET_MOVIESLIST } from "../constants/constantMovies";
let initialState = {
  moviesList: [],
  moviesDetail: [],
};
export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIESLIST:
      state.moviesList = action.payload;
      return { ...state };
    case SET_MOVIEDETAIL:
      state.moviesDetail = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
