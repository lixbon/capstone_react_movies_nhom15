import {
  SET_MOVIEDETAIL,
  SET_MOVIESLIST,
  SET_MOVIETRAILLER,
  SET_MOVIETRAILLERMODAL,
} from "../constants/constantMovies";
let initialState = {
  moviesList: [],
  moviesDetail: [],
  isTraillerModal: false,
  moviesTrailler: "",
};
export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIESLIST:
      state.moviesList = action.payload;
      return { ...state };
    case SET_MOVIEDETAIL:
      state.moviesDetail = action.payload;
      return { ...state };
    case SET_MOVIETRAILLER:
      state.moviesTrailler = action.payload;
      return { ...state };
    case SET_MOVIETRAILLERMODAL:
      state.isTraillerModal = !state.isTraillerModal;
      return { ...state };

    default:
      return { ...state };
  }
};
