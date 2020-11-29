import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withInputLogin from "./with-input-login";

configure({adapter: new Adapter()});


const MockComponent = () => <div />;
const MockComponentWrapped = withInputLogin(MockComponent);

it(`Should change input login`, () => {
  const wrapper = shallow(<MockComponentWrapped
  />);

  expect(wrapper.props().emailInput).toEqual(``);
  expect(wrapper.props().passwordInput).toEqual(``);
});
