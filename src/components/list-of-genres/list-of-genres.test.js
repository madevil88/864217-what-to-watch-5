import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import ListOfGenres from "./list-of-genres";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();
const currentGenre = films.allFilms[1].genre;

it(`Should ListOfGenres render correctly`, () => {
  renderer.render(
      <ListOfGenres
        allFilms={films.allFilms}
        getSelectedGenre={() => {}}
        currentGenre={currentGenre}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
