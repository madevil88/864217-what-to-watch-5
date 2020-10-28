import React from "react";
import {Link} from "react-router-dom";
import MovieCardProps from "./movie-card-props";

const MovieCard = (props) => {
  const {film, mouseOver} = props;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        mouseOver(film);
      }}
    >
      <div className="small-movie-card__image">
        <img src={film.poster} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/1" className="small-movie-card__link">{film.title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = MovieCardProps.propTypes;

export default MovieCard;
