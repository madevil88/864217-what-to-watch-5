import React from "react";
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
    listOfGenres.map((genre, i) => {
      if (i >= SHOW_GENRES_COUNT) {
        return null;
      } else {
        return (
          <li
            key={i}
            className={currentGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
          >
            <a href="#" className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                getSelectedGenre(evt.target.textContent);
              }}
            >{genre}</a>
          </li>
        );
      }
    })
  );
};

ListOfGenres.propTypes = {};

export default ListOfGenres;
