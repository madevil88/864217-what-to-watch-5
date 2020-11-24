import {loadFilms, requireAuthorization, redirectToRoute, loadFilmId} from "./action";
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
);

const commentFilm = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
);

export {fetchFilmList,
  fetchFilmId,
  checkAuth,
  login,
  commentFilm};
