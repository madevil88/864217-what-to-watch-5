import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {MyList} from "./my-list";
import {films} from "../../test-mocks/test-mocks";

const renderer = new ShallowRenderer();

it(`Should MyList render correctly`, () => {
  renderer.render(
      <MyList
        favoriteFilms={films.allFilms}
        fetchFavoriteFilmsAction={() => {}}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
