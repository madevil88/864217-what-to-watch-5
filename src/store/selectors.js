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

const getReviewStatus = (state) => {
  return state.DATA.reviewStatus;
};

const getLoginStatus = (state) => {
  return state.DATA.loginStatus;
};

const getPromoFilm = (state) => {
  return state.DATA.promoFilm;
};

const getFavoriteFilms = (state) => {
  return state.DATA.favoriteFilms;
};

const getLoadFilmStatus = (state) => {
  return state.DATA.loadFilmStatus;
};

export {getFilms,
  getFilteredFilms,
  getFilmId,
  getCurrentGenre,
  getFilmsCount,
  getReviews,
  getAuthorizationStatus,
  getReviewStatus,
  getLoginStatus,
  getPromoFilm,
  getFavoriteFilms,
  getLoadFilmStatus};
