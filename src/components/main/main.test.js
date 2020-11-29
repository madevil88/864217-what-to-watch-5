import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {Main} from "./main";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();
const currentGenre = films.allFilms[1].genre;

it(`Should Main render correctly`, () => {
  renderer.render(
      <Main
        films={films}
        getSelectedGenreAction={() => {}}
        filmsCount={8}
        getShowMoreStatusAction={() => {}}
        currentGenre={currentGenre}
        promoFilm={films.allFilms[0]}
        fetchPromoFilmAction={() => {}}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
