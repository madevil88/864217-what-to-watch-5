import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {AddReview} from "./add-review";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should AddReview render correctly`, () => {
  renderer.render(
      <AddReview
        films={films}
        id={1}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
