import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Tabs from "./tabs";
import {films, reviews} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should Tabs render correctly`, () => {
  renderer.render(
      <Tabs
        activeItem={0}
        handleActiveItem={() => {}}
        film={films.allFilms[1]}
        reviews={reviews}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
