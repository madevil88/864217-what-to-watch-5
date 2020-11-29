import React from "react";
import PropTypes from "prop-types";
import {InitialState, SHOW_GENRES_COUNT} from "../../const";

const ListOfGenres = (props) => {
  const {allFilms,
    getSelectedGenre,
    currentGenre} = props;

  const unique = new Set([InitialState.GENRE]);

  allFilms.forEach((film) => {
    unique.add(film.genre);
  });
  const listOfGenres = Array.from(unique);

  return (
    <ul className="catalog__genres-list">
      {listOfGenres.map((genre, i) => {
        if (i >= SHOW_GENRES_COUNT) {
          return null;
        } else {
          return (
            <li
              key={i}
              className={currentGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
            >
              <span className="catalog__genres-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  getSelectedGenre(genre);
                }}
              >{genre}</span>
            </li>
          );
        }
      })}
    </ul>
  );
};

ListOfGenres.propTypes = {
  allFilms: PropTypes.array.isRequired,
  getSelectedGenre: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

export default ListOfGenres;
