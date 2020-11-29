import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import ShowMoreButton from "./show-more-button";

const renderer = new ShallowRenderer();

it(`Should ShowMoreButton render correctly`, () => {
  renderer.render(
      <ShowMoreButton
        getShowMoreStatus={() => {}}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
