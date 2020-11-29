import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignIn} from "./sign-in";

configure({adapter: new Adapter()});


it(`Should be SignIn changed`, () => {
  const handleFieldChange = jest.fn();
  const emailInput = `madevil@i.ua`;
  const passwordInput = `123456`;

  const wrapper = shallow(
      <SignIn
        handleFieldChange={handleFieldChange}
        emailInput={emailInput}
        passwordInput={passwordInput}
        onSubmit={() => {}}
        loginStatus={``}
      />
  );

  const userEmailInput = wrapper.find(`#user-email`);
  userEmailInput.simulate(`change`);
  expect(handleFieldChange).toHaveBeenCalledTimes(1);

  const userPasswordInput = wrapper.find(`#user-password`);
  userPasswordInput.simulate(`change`);
  expect(handleFieldChange).toHaveBeenCalledTimes(2);
});
