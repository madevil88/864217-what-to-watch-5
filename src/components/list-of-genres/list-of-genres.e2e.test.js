import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListOfGenres from "./list-of-genres";
import {films} from "../../test-mocks/test-mocks";

configure({adapter: new Adapter()});

it(`Should catalog Genres Link be pressed`, () => {
  const handleSelectedGenre = jest.fn();
  const currentGenre = films.allFilms[1].genre;

  const wrapper = shallow(
      <ListOfGenres
        allFilms={films.allFilms}
        getSelectedGenre={handleSelectedGenre}
        currentGenre={currentGenre}
      />
  );

  const catalogGenresLink = wrapper.find(`.catalog__genres-link`).at(0);
  catalogGenresLink.simulate(`click`, {preventDefault() {}});
  expect(handleSelectedGenre).toHaveBeenCalledTimes(1);
});
