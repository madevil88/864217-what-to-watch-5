export const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
};

export const ActionCreator = {
  getSelectedGenre: (selectGenre) => ({
    type: ActionType.SELECT_GENRE,
    payload: selectGenre,
  }),
};
