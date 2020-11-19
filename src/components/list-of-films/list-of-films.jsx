import React from "react";
import MainProps from "../main/main-props";
import {InitialState} from "../../const";
import MovieCard from "../movie-card/movie-card";
import withActiveCard from "../../hocs/with-active-card/with-active-card";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const InitialActivePlayerId = -1;

const MovieCardWrapped = withActiveItem(withActiveCard(MovieCard));

const getFilteredFilms = (films, currentGenre, getFilteredFilmsCount) => {
  const filteredFilms = films.filter((film) => {
    if (currentGenre !== InitialState.GENRE) {
      return currentGenre === film.genre;
    }
    return true;
  });
  getFilteredFilmsCount(filteredFilms.length);
  return filteredFilms;
};

const ListOfFilms = (props) => {

  const {films,
    filmsCount = films.length,
    currentGenre,
    getFilteredFilmsCount,
  } = props;


  return (
    getFilteredFilms(films, currentGenre, getFilteredFilmsCount).map((film, i) => {
      if (i >= filmsCount) {
        return null;
      } else {
        return (
          <React.Fragment key={i}>
            <MovieCardWrapped
              film={film}
              id={i}
              InitialActivePlayerId={InitialActivePlayerId}
            />
          </React.Fragment>
        );
      }
    })
  );
};

ListOfFilms.propTypes = MainProps.propTypes;

export default ListOfFilms;
