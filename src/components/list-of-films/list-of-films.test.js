import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import ListOfFilms from "./list-of-films";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should ListOfFilms render correctly`, () => {
  renderer.render(
      <ListOfFilms
        filteredFilms={films.filteredFilms}
        filmsCount={8}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
