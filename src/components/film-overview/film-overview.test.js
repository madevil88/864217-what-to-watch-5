import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import FilmOverview from "./film-overview";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should FilmOverview render correctly`, () => {
  renderer.render(
      <FilmOverview
        film={films.allFilms[0]}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
