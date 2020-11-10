import React from "react";
import {INITIAL_GENRE} from "../../const";

const ListOfGenres = (props) => {
  const {films, currentGenre, getSelectedGenre} = props;

  const unique = new Set([INITIAL_GENRE]);

  films.forEach((film) => {
    unique.add(film.genre);
  });
  const listOfGenres = Array.from(unique);

  return (
    listOfGenres.map((genre, i) => (
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
    ))
  );
};

ListOfGenres.propTypes = {};

export default ListOfGenres;
