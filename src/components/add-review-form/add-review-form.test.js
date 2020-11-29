import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {AddReviewForm} from "./add-review-form";

const renderer = new ShallowRenderer();

const reviewText = `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`;

it(`Should AddReviewForm render correctly`, () => {
  renderer.render(
      <AddReviewForm
        handleFieldChange={() => {}}
        id={1}
        ratingInput={4.5}
        reviewText={reviewText}
        onSubmit={() => {}}
        reviewStatus={``}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
