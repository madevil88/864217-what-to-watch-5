import React from "react";
import MovieCardProps from "./movie-card-props";

const MovieCard = (props) => {
  const {film, mouseOver, onMovieCardClick} = props;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        mouseOver(film);
      }}
      onClick={onMovieCardClick}
    >
      <div className="small-movie-card__image">
        <img src={film.poster} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = MovieCardProps.propTypes;

export default MovieCard;
