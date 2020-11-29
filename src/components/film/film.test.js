import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import {Film} from "./film";
import {films, reviews} from "../../test-mocks/test-mocks";
import {AuthorizationStatus} from "../../const";

const renderer = new ShallowRenderer();

it(`Should Film render correctly`, () => {
  renderer.render(
      <Film
        films={films}
        id={1}
        reviews={reviews}
        filmId={films.allFilms[0]}
        authorizationStatus={AuthorizationStatus.AUTH}
        loadedFilmIdAction={() => {}}
        loadedReviewsAction={() => {}}
      />
  );

  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
