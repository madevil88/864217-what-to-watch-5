import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {SignIn} from "./sign-in";

const renderer = new ShallowRenderer();
const emailInput = `madevil@i.ua`;
const passwordInput = `123456`;

it(`Should SignIn render correctly`, () => {
  renderer.render(
      <SignIn
        handleFieldChange={() => {}}
        emailInput={emailInput}
        passwordInput={passwordInput}
        onSubmit={() => {}}
        loginStatus={``}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
