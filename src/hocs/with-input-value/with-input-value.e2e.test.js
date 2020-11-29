import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withInputValue from "./with-input-value";

configure({adapter: new Adapter()});


const MockComponent = () => <div />;
const MockComponentWrapped = withInputValue(MockComponent);

it(`Should change input comment`, () => {
  const wrapper = shallow(<MockComponentWrapped
  />);

  expect(wrapper.props().ratingInput).toEqual(3);
  expect(wrapper.props().reviewText).toEqual(``);
});
