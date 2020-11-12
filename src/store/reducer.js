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
  filteredFilmsCount: films.length,
  isShowMoreButton: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
        filmsCount: InitialState.FILMS_COUNT,
      });
    case ActionType.INCREMENT_FILMS_COUNT:
      const incrementFilmsCount = state.filmsCount + action.payload;

      if (state.filteredFilmsCount <= incrementFilmsCount) {
        return extend(state, {
          isShowMoreButton: false,
          filmsCount: incrementFilmsCount
        });
      }
      return extend(state, {
        isShowMoreButton: true,
        filmsCount: incrementFilmsCount
      });
    case ActionType.FILTERED_FILMS_COUNT:
      if (action.payload <= state.filmsCount) {
        return extend(state, {
          isShowMoreButton: false,
          filteredFilmsCount: action.payload,
        });
      }
      return extend(state, {
        isShowMoreButton: true,
        filteredFilmsCount: action.payload,
      });
  }
  return state;
};

export {reducer};
