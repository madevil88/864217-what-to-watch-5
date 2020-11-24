import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchFilmId} from "../../store/api-actions";
import VideoPlayerProps from "./video-player-props";

const VideoPlayer = (props) => {
  const {film, id, activeItem, children, loadedFilmIdAction} = props;

  return (
    <React.Fragment>
      <div className="small-movie-card__image">
        {!(id === activeItem) && <img src={film.poster_image} alt={film.name} width="280" height="175" />}
        {children}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/${film.id}`}
          className="small-movie-card__link"
          onClick={() => {
            loadedFilmIdAction(film.id);
          }}
        >{film.name}</Link>
      </h3>
    </React.Fragment>
  );
};

VideoPlayer.propTypes = VideoPlayerProps.propTypes;

const mapDispatchToProps = (dispatch) => ({
  loadedFilmIdAction(id) {
    dispatch(fetchFilmId(id));
  },
});

export {VideoPlayer};
export default connect(null, mapDispatchToProps)(VideoPlayer);
