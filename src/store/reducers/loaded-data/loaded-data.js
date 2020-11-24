import {extend} from "../../../utils";
import {ActionType} from "../../action";
import reviews from "../../../mocks/reviews";

const initialState = {
  films: [],
  filmId: ``,
  reviews,
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
  }

  return state;
};

export {loadedData};
