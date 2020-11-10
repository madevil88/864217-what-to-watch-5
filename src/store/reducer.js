import {INITIAL_GENRE} from "../const";
import {extend} from "../utils";
import {ActionType} from "./action";
import films from "../mocks/films";
import reviews from "../mocks/reviews";

const initialState = {
  currentGenre: INITIAL_GENRE,
  films,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });
  }
  return state;
};

export {reducer};
