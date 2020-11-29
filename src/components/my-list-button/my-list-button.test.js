import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {MyListButton} from "./my-list-button";

const renderer = new ShallowRenderer();

it(`Should MyListButton render correctly`, () => {
  renderer.render(
      <MyListButton
        id={1}
        isFavoriteFilmAction={() => {}}
        updateData={() => {}}
        activeItem={true}
        handleActiveItem={() => {}}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
