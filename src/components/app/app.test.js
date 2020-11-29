import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {App} from "./app";
import {films} from "../../test-mocks/test-mocks";
import {AuthorizationStatus} from "../../const";

const renderer = new ShallowRenderer();

it(`Should App render correctly`, () => {
  renderer.render(
      <App
        films={films}
        authorizationStatus={AuthorizationStatus.AUTH}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
