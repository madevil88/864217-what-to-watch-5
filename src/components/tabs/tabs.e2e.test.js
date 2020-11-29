import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {films, reviews} from "../../test-mocks/test-mocks";

configure({adapter: new Adapter()});

it(`Should tabs Button be pressed`, () => {
  const handleActiveItem = jest.fn();

  const wrapper = shallow(
      <Tabs
        activeItem={0}
        handleActiveItem={handleActiveItem}
        film={films.allFilms[1]}
        reviews={reviews}
      />
  );

  const tabsButton = wrapper.find(`.movie-nav__link`).at(0);
  tabsButton.simulate(`click`, {preventDefault() {}});
  expect(handleActiveItem).toHaveBeenCalledTimes(1);
});
