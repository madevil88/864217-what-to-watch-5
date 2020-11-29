import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

configure({adapter: new Adapter()});

it(`Should Show More Button be pressed`, () => {
  const handleShowMoreStatus = jest.fn();

  const wrapper = shallow(
      <ShowMoreButton
        getShowMoreStatus={handleShowMoreStatus}
      />
  );

  const showMoreButton = wrapper.find(`.catalog__button`);
  showMoreButton.simulate(`click`);
  expect(handleShowMoreStatus).toHaveBeenCalledTimes(1);
});
