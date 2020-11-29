import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Reviews from "./reviews";
import {reviews} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should Reviews render correctly`, () => {
  renderer.render(
      <Reviews
        reviews={reviews}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
