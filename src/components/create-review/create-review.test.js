import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import CreateReview from "./create-review";
import {reviews} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should CreateReview render correctly`, () => {
  renderer.render(
      <CreateReview
        review={reviews[0]}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
