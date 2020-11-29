import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import VideoPlayer from "./video-player";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should VideoPlayer render correctly`, () => {
  renderer.render(
      <VideoPlayer
        film={films.allFilms[1]}
        id={1}
        activeItem={1}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});


