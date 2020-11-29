import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {PrivateRoute} from "./private-route";
import {AuthorizationStatus, AppRoute} from "../../const";

const renderer = new ShallowRenderer();

it(`Should PrivateRoute render correctly`, () => {
  renderer.render(
      <PrivateRoute
        render={() => {}}
        path={AppRoute.MY_LIST}
        exact
        authorizationStatus={AuthorizationStatus.AUTH}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
