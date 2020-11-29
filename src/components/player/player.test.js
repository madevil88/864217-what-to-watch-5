import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Player from "./player";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should Player render correctly`, () => {
  renderer.render(
      <Player
        allFilms={films.allFilms}
        id={1}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
