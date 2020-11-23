import React from "react";
import MainProps from "../main/main-props";
import MovieCard from "../movie-card/movie-card";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const INITIAL_ACTIVE_ITEM = -1;

const MovieCardWrapped = withActiveItem(MovieCard);

const ListOfFilms = (props) => {

  const {filteredFilms,
    filmsCount} = props;

  return (
    filteredFilms.map((film, i) => {
      if (i >= filmsCount) {
        return null;
      } else {
        return (
          <React.Fragment key={i}>
            <MovieCardWrapped
              film={film}
              id={i}
              initialActiveItem={INITIAL_ACTIVE_ITEM}
            />
          </React.Fragment>
        );
      }
    })
  );
};

ListOfFilms.propTypes = MainProps.propTypes;

export default ListOfFilms;
