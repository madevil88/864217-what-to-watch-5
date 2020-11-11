import {InitialState} from "../const";
import {extend} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";
import reviews from "../mocks/reviews";

const initialState = {
  currentGenre: InitialState.GENRE,
  films,
  reviews,
  filmsCount: InitialState.FILMS_COUNT,
  isShowMoreButton: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
        filmsCount: InitialState.FILMS_COUNT,
        isShowMoreButton: true,
      });
    case ActionType.INCREMENT_FILMS_COUNT:
      const currentFilmsCount = state.filmsCount + action.payload;
      if (currentFilmsCount >= films.length) {
        return extend(state, {
          filmsCount: films.length,
          isShowMoreButton: false,
        });
      }
      return extend(state, {
        filmsCount: currentFilmsCount
      });
  }
  return state;
};

export {reducer};
