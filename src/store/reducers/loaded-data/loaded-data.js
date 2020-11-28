import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  filmId: ``,
  reviews: [],
  promoFilm: ``,
  favoriteFilms: [],
  reviewStatus: ``,
  loginStatus: ``,
};

const loadedData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_FILM_ID:
      return extend(state, {
        filmId: action.payload,
      });
    case ActionType.COMMENT_RESPONSE_STATUS:
      return extend(state, {
        reviewStatus: action.payload,
      });
    case ActionType.LOGIN_RESPONSE_STATUS:
      return extend(state, {
        loginStatus: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
  }

  return state;
};

export {loadedData};
