import React from "react";
import {Link} from "react-router-dom";
import VideoPlayerProps from "./video-player-props";

const VideoPlayer = (props) => {
  const {film, id, activeId, children} = props;

  return (
    <React.Fragment>
      <div className="small-movie-card__image">
        {!(id === activeId) && <img src={film.poster} alt={film.title} width="280" height="175" />}
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/1" className="small-movie-card__link">{film.title}</Link>
      </h3>
    </React.Fragment>
  );
};

VideoPlayer.propTypes = VideoPlayerProps.propTypes;

export default VideoPlayer;
