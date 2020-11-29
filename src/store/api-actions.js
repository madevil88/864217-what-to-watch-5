import {loadFilms,
  requireAuthorization,
  redirectToRoute,
  loadFilmId,
  commentResponseStatus,
  loginResponseStatus,
  loadPromoFilm,
  loadFavoriteFilms,
  loadReviews} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";

const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
);

const fetchFilmId = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(loadFilmId(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(({response})=>
      dispatch(loginResponseStatus(response.status)))
);

const commentFilm = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(`/films/${id}`)))
    .catch(({response})=>
      dispatch(commentResponseStatus(response.status)))
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoFilm(data)))
);

const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE_FILMS)
    .then(({data}) => dispatch(loadFavoriteFilms(data)))
);

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
);

const isFavoriteFilm = (filmiId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${filmiId}/${status}`, {filmiId, status})
    .then(() => dispatch(fetchPromoFilm()))
    .then(() => dispatch(fetchFilmId(filmiId)))
);

export {fetchFilmList,
  fetchFilmId,
  checkAuth,
  login,
  commentFilm,
  fetchPromoFilm,
  fetchFavoriteFilms,
  fetchReviews,
  isFavoriteFilm};
