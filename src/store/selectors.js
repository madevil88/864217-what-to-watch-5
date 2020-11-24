import {createSelector} from "reselect";
import {InitialState} from "../const";

const getFilms = (state) => {
  return state.DATA.films;
};

const getCurrentGenre = (state) => {
  return state.APP_STATE.currentGenre;
};

const getFilteredFilms = createSelector(getFilms, getCurrentGenre, (films, currentGenre) => {
  return films.filter((film) => {
    if (currentGenre !== InitialState.GENRE) {
      return currentGenre === film.genre;
    }
    return true;
  });
});

const getFilmId = (state) => {
  return state.DATA.filmId;
};

const getFilmsCount = (state) => {
  return state.APP_STATE.filmsCount;
};

const getReviews = (state) => {
  return state.DATA.reviews;
};

const getAuthorizationStatus = (state) => {
  return state.USER.authorizationStatus;
};

export {getFilms,
  getFilteredFilms,
  getFilmId,
  getCurrentGenre,
  getFilmsCount,
  getReviews,
  getAuthorizationStatus};
