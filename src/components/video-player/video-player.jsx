import React from "react";
import {Link} from "react-router-dom";
import VideoPlayerProps from "./video-player-props";

const VideoPlayer = (props) => {
  const {film, id, activeItem, children} = props;

  return (
    <React.Fragment>
      <Link to={`/films/${film.id}`}>
        <div className="small-movie-card__image">
          {!(id === activeItem) && <img src={film.poster_image} alt={film.name} width="280" height="175" />}
          {children}
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${film.id}`}
          className="small-movie-card__link"
        >{film.name}</Link>
      </h3>
    </React.Fragment>
  );
};

VideoPlayer.propTypes = VideoPlayerProps.propTypes;

export default VideoPlayer;
