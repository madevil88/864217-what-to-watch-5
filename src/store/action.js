import {InitialState} from "../const";

const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
  INCREMENT_FILMS_COUNT: `INCREMENT_FILMS_COUNT`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_FILM_ID: `LOAD_FILM_ID`,
  COMMENT_RESPONSE_STATUS: `COMMENT_RESPONSE_STATUS`,
  LOGIN_RESPONSE_STATUS: `LOGIN_RESPONSE_STATUS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`
};

const getSelectedGenre = (selectGenre) => ({
  type: ActionType.SELECT_GENRE,
  payload: selectGenre,
});

const incrementFilmsCount = () => ({
  type: ActionType.INCREMENT_FILMS_COUNT,
  payload: InitialState.FILMS_COUNT,
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

const loadFilmId = (film) => ({
  type: ActionType.LOAD_FILM_ID,
  payload: film,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

const commentResponseStatus = (status) => ({
  type: ActionType.COMMENT_RESPONSE_STATUS,
  payload: status,
});

const loginResponseStatus = (status) => ({
  type: ActionType.LOGIN_RESPONSE_STATUS,
  payload: status,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const loadPromoFilm = (promoFilm) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: promoFilm,
});

const loadFavoriteFilms = (favoriteFilms) => ({
  type: ActionType.LOAD_FAVORITE_FILMS,
  payload: favoriteFilms,
});

const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export {ActionType,
  getSelectedGenre,
  incrementFilmsCount,
  loadFilms,
  loadFilmId,
  requireAuthorization,
  redirectToRoute,
  commentResponseStatus,
  loginResponseStatus,
  loadPromoFilm,
  loadFavoriteFilms,
  loadReviews};
