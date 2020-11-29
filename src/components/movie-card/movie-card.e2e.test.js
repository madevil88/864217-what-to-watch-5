import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";
import {films} from "../../test-mocks/test-mocks";

configure({adapter: new Adapter()});
const DELAY_MS = 1000;

it(`Should be mouseover && mouseout MovieCard`, () => {
  const handleActiveItem = jest.fn();
  const film = films.allFilms[1];

  const wrapper = shallow(
      <MovieCard
        film={film}
        id={1}
        handleActiveItem={handleActiveItem}
        activeItem={1}
      />
  );

  const mouseoverMovieCard = wrapper.find(`.small-movie-card`);
  mouseoverMovieCard.simulate(`mouseover`);
  setTimeout(() => {
    expect(handleActiveItem).toHaveBeenCalledTimes(1);
  }, DELAY_MS);

  const mouseoutMovieCard = wrapper.find(`.small-movie-card`);
  mouseoutMovieCard.simulate(`mouseout`);
  setTimeout(() => {
    expect(handleActiveItem).toHaveBeenCalledTimes(1);
  }, DELAY_MS);
});
