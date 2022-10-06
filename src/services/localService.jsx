const USER = "USER";
const MOVIESLIST = "MOVIESLIST";
export const localServ = {
  user: {
    set: (dataLogin) => {
      let jsonData = JSON.stringify(dataLogin);
      localStorage.setItem(USER, jsonData);
    },
    get: () => {
      let jsonData = localStorage.getItem(USER);
      if (jsonData) {
        return JSON.parse(jsonData);
      } else {
        return null;
      }
    },
    remove: () => {
      localStorage.removeItem(USER);
    },
  },
  movies: {
    set: (movieslist) => {
      let jsonData = JSON.stringify(movieslist);
      localStorage.setItem(MOVIESLIST, jsonData);
    },
    get: () => {
      let jsonData = localStorage.getItem(MOVIESLIST);
      if (jsonData) {
        return JSON.parse(jsonData);
      } else {
        return null;
      }
    },
  },
};
