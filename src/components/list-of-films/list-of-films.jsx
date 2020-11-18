import React from "react";
import MainProps from "../main/main-props";
import MovieCard from "../movie-card/movie-card";

const ListOfFilms = (props) => {

  const {films,
    filmsCount = films.length,
    currentGenre,
    activeId,
    getFilteredFilms,
    getFilteredFilmsCount,
    handleOverOnCard,
    handleOverOnItem,
    handleOutItem
  } = props;

  return (
    getFilteredFilms(films, currentGenre, getFilteredFilmsCount).map((film, i) => {
      if (i >= filmsCount) {
        return null;
      } else {
        return (
          <React.Fragment key={i}>
            <MovieCard
              film={film}
              id={i}
              onMouseOverOnCard={handleOverOnCard}
              onMouseOverOnItem={handleOverOnItem}
              onMouseOutItem={handleOutItem}
              activeId={activeId}
            />
          </React.Fragment>
        );
      }
    })
  );
};

ListOfFilms.propTypes = MainProps.propTypes;

export default ListOfFilms;
