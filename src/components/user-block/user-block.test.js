import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {UserBlock} from "./user-block";
import {AuthorizationStatus} from "../../const";

const renderer = new ShallowRenderer();

it(`Should UserBlock render correctly`, () => {
  renderer.render(
      <UserBlock
        authorizationStatus={AuthorizationStatus.AUTH}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
