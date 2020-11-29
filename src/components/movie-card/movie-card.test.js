import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import MovieCard from "./movie-card";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();
const film = films.allFilms[1];

it(`Should MovieCard render correctly`, () => {
  renderer.render(
      <MovieCard
        film={film}
        id={1}
        handleActiveItem={() => {}}
        activeItem={1}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
