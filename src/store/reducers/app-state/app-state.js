import {InitialState} from "../../../const";
import {extend} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  currentGenre: InitialState.GENRE,
  filmsCount: InitialState.FILMS_COUNT,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
        filmsCount: InitialState.FILMS_COUNT,
      });
    case ActionType.INCREMENT_FILMS_COUNT:
      const incrementFilmsCount = state.filmsCount + action.payload;

      return extend(state, {
        filmsCount: incrementFilmsCount
      });
  }
  return state;
};

export {appState};
