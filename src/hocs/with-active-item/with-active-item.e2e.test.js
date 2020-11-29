import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should change active item`, () => {
  const wrapper = shallow(<MockComponentWrapped
  />);

  expect(wrapper.props().activeItem).toEqual(0);

  wrapper.props().handleActiveItem(1);
  expect(wrapper.props().activeItem).toEqual(1);

  wrapper.props().handleActiveItem(2);
  expect(wrapper.props().activeItem).toEqual(2);

  wrapper.props().handleActiveItem(3);
  expect(wrapper.props().activeItem).toEqual(3);
});
