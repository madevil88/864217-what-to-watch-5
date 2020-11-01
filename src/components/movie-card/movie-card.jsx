import React from "react";
import {Link} from "react-router-dom";
import MovieCardProps from "./movie-card-props";
import VideoPlayer from "../video-player/video-player";

const DELAY_MS = 1000;

const FilmSize = {
  WIDTH: 280,
  HEIGHT: 175
};

const MovieCard = (props) => {
  const {film, id, mouseOver, onMouseOverOnCard, onMouseOutCard, activePlayerId} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        mouseOver(film);
        setTimeout(() => {
          onMouseOverOnCard();
        }, DELAY_MS);
      }}
      onMouseOut={() => {
        onMouseOutCard();
      }}
    >

      <div className="small-movie-card__image">
        {!(id === activePlayerId) && <img src={film.poster} alt={film.title} width="280" height="175" />}
        <VideoPlayer
          src={film.src}
          width={FilmSize.WIDTH}
          height={FilmSize.HEIGHT}
          isPlaying={id === activePlayerId}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/1" className="small-movie-card__link">{film.title}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = MovieCardProps.propTypes;

export default MovieCard;
