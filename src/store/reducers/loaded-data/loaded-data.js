import {extend} from "../../../utils";
import {ActionType} from "../../action";
import reviews from "../../../mocks/reviews";

const initialState = {
  films: [],
  reviews,
};

const loadedData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
  }

  return state;
};

export {loadedData};
