import React from "react";
import MovieCardProps from "./movie-card-props";
import VideoPlayer from "../video-player/video-player";
import withVideo from "../../hocs/with-video/with-video";

const VideoPlayerWrapped = withVideo(VideoPlayer);

const DELAY_MS = 1000;

const MovieCard = (props) => {
  const {film, id, onMouseOverOnCard, onMouseOverOnItem, onMouseOutItem, activeId} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        setTimeout(() => {
          onMouseOverOnCard(film);
          onMouseOverOnItem(id);
        }, DELAY_MS);
      }}
      onMouseOut={() => {
        onMouseOutItem();
      }}
    >
      <VideoPlayerWrapped
        film={film}
        id={id}
        isPlaying={id === activeId}
        activeId={activeId}
      />
    </article>
  );
};

MovieCard.propTypes = MovieCardProps.propTypes;

export default MovieCard;
