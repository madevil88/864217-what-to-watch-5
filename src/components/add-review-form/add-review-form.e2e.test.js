import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReviewForm} from "./add-review-form";

configure({adapter: new Adapter()});

const reviewText = `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`;

it(`Should AddReviewForm be changed`, () => {
  const handleFieldChange = jest.fn();
  const onSubmit = jest.fn();

  const wrapper = shallow(
      <AddReviewForm
        handleFieldChange={handleFieldChange}
        id={1}
        ratingInput={4.5}
        reviewText={reviewText}
        onSubmit={onSubmit}
        reviewStatus={``}
      />
  );

  const ratingInput = wrapper.find(`.rating__input`).at(0);
  ratingInput.simulate(`change`);
  expect(handleFieldChange).toHaveBeenCalledTimes(1);

  const textarea = wrapper.find(`.add-review__textarea`);
  textarea.simulate(`change`);
  expect(handleFieldChange).toHaveBeenCalledTimes(2);
});
