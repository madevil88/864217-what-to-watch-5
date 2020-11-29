import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import FilmDetails from "./details";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should FilmDetails render correctly`, () => {
  renderer.render(
      <FilmDetails
        film={films.allFilms[0]}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
