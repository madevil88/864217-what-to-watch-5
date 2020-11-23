import React from "react";
import {Link} from "react-router-dom";
import VideoPlayerProps from "./video-player-props";

const VideoPlayer = (props) => {
  const {film, id, activeItem, children} = props;

  return (
    <React.Fragment>
      <div className="small-movie-card__image">
        {!(id === activeItem) && <img src={film.poster_image} alt={film.name} width="280" height="175" />}
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/1" className="small-movie-card__link">{film.name}</Link>
      </h3>
    </React.Fragment>
  );
};

VideoPlayer.propTypes = VideoPlayerProps.propTypes;

export default VideoPlayer;
