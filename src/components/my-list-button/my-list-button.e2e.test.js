import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MyListButton} from "./my-list-button";

configure({adapter: new Adapter()});

it(`Should My List Button be pressed`, () => {
  const isFavoriteFilmAction = jest.fn();
  const updateData = jest.fn();
  const handleActiveItem = jest.fn();

  const wrapper = shallow(
      <MyListButton
        id={1}
        isFavoriteFilmAction={isFavoriteFilmAction}
        updateData={updateData}
        activeItem={true}
        handleActiveItem={handleActiveItem}
      />
  );

  const myListButton = wrapper.find(`.btn--list`);
  myListButton.simulate(`click`);
  expect(isFavoriteFilmAction).toHaveBeenCalledTimes(1);
  expect(updateData).toHaveBeenCalledTimes(1);
  expect(handleActiveItem).toHaveBeenCalledTimes(1);
});
