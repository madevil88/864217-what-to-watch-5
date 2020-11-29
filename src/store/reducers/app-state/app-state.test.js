import {InitialState, Genre} from "../../../const";
import {appState} from "./app-state";
import {ActionType} from "../../action";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appState(void 0, {})).toEqual({
    currentGenre: InitialState.GENRE,
    filmsCount: InitialState.FILMS_COUNT,
  });
});

it(`Reducer should increment current films count by a given value`, () => {
  expect(appState({
    currentGenre: InitialState.GENRE,
    filmsCount: InitialState.FILMS_COUNT,
  }, {
    type: ActionType.INCREMENT_FILMS_COUNT,
    payload: InitialState.FILMS_COUNT,
  })).toEqual({
    currentGenre: InitialState.GENRE,
    filmsCount: (InitialState.FILMS_COUNT + InitialState.FILMS_COUNT),
  });
});

it(`Reducer should current genre by a given value`, () => {
  expect(appState({
    currentGenre: InitialState.GENRE,
    filmsCount: InitialState.FILMS_COUNT,
  }, {
    type: ActionType.SELECT_GENRE,
    payload: Genre.COMEDY,
  })).toEqual({
    currentGenre: Genre.COMEDY,
    filmsCount: InitialState.FILMS_COUNT,
  });

  expect(appState({
    currentGenre: InitialState.GENRE,
    filmsCount: (InitialState.FILMS_COUNT + InitialState.FILMS_COUNT),
  }, {
    type: ActionType.SELECT_GENRE,
    payload: Genre.FANTASY,
  })).toEqual({
    currentGenre: Genre.FANTASY,
    filmsCount: InitialState.FILMS_COUNT,
  });
});
