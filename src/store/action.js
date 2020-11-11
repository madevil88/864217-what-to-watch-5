import {InitialState} from "../const";

export const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
  INCREMENT_FILMS_COUNT: `INCREMENT_FILMS_COUNT`,
  SHOW_MORE_STATUS: `SHOW_MORE_STATUS`,
};

export const ActionCreator = {
  getSelectedGenre: (selectGenre) => ({
    type: ActionType.SELECT_GENRE,
    payload: selectGenre,
  }),
  incrementFilmsCount: () => ({
    type: ActionType.INCREMENT_FILMS_COUNT,
    payload: InitialState.FILMS_COUNT,
  }),
};
