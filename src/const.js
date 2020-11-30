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
  AWESOME: `Awesome`,
  VERY_GOOD: `Very good`,
  GOOD: `Good`,
  NORMAL: `Normal`,
  BAD: `Bad`,
};

const SHOW_GENRES_COUNT = 10;

const TabsMap = {
  0: `Overview`,
  1: `Details`,
  2: `Reviews`
};

const BACKEND_URL = `https://5.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  NOT_FAUND: 404,
  BAD_REQUEST: 400
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
  PROMO_FILM: `/films/promo`,
  FAVORITE_FILMS: `/favorite`,
};

const ReviewTextLength = {
  MIN: 50,
  MAX: 400
};

const ErrorMessageMap = {
  400: `You made a mistake, correct and send again`,
  401: `You are not logged in, please log in`
};

const RexExp = {
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
};

export {InitialState,
  Genre,
  FilmStatus,
  TabsMap,
  SHOW_GENRES_COUNT,
  BACKEND_URL,
  REQUEST_TIMEOUT,
  HttpCode,
  NameSpace,
  AuthorizationStatus,
  AppRoute,
  APIRoute,
  ReviewTextLength,
  ErrorMessageMap,
  RexExp};
