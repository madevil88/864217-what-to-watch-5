const InitialState = {
  GENRE: `All genres`,
  FILMS_COUNT: 8
};

const Genre = {
  ANIMATED_CARTOON: `Animated cartoon`,
  BIOGRAPHICAL: `Biographical`,
  COMEDY: `Comedy`,
  DRAMA: `Drama`,
  FANTASY: `Fantasy`,
  THRILLER: `Thriller`,
};

const FilmStatus = {
  VERY_GOOD: `Very good`,
  GOOD: `Good`,
  NOT_BAD: `Not bad`,
  BAD: `Bad`,
  VERY_BAD: `Very bad`,
};

const TabsMap = {
  0: `Overview`,
  1: `Details`,
  2: `Reviews`
};

const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401
};

const NameSpace = {
  DATA: `DATA`,
  APP_STATE: `APP_STATE`,
  USER: `USER`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AppRoute = {
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  FILM: `/films/:id`,
  ROOT: `/`,
  ADD_REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
};

const APIRoute = {
  FILMS: `/films`,
  LOGIN: `/login`,
};

export {InitialState,
  Genre,
  FilmStatus,
  TabsMap,
  BACKEND_URL,
  REQUEST_TIMEOUT,
  HttpCode,
  NameSpace,
  AuthorizationStatus,
  AppRoute,
  APIRoute};
