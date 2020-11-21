import React from "react";
import {InitialState} from "../../const";

const ListOfGenres = (props) => {
  const {films, getSelectedGenre, handleActiveItem, activeItem} = props;

  const unique = new Set([InitialState.GENRE]);

  films.forEach((film) => {
    unique.add(film.genre);
  });
  const listOfGenres = Array.from(unique);

  return (
    listOfGenres.map((genre, i) => (
      <li
        key={i}
        className={activeItem === i ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
      >
        <a href="#" className="catalog__genres-link"
          onClick={(evt) => {
            evt.preventDefault();
            handleActiveItem(i);
            getSelectedGenre(evt.target.textContent);
          }}
        >{genre}</a>
      </li>
    ))
  );
};

ListOfGenres.propTypes = {};

export default ListOfGenres;
