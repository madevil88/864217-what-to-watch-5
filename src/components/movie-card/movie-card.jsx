import React from "react";
import MovieCardProps from "./movie-card-props";
import VideoPlayer from "../video-player/video-player";
import withVideo from "../../hocs/with-video/with-video";

const VideoPlayerWrapped = withVideo(VideoPlayer);

const DELAY_MS = 1000;

const MovieCard = (props) => {
  const {film, id, handleActiveItem, activeItem} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        setTimeout(() => {
          handleActiveItem(id);
        }, DELAY_MS);
      }}
      onMouseOut={() => {
        setTimeout(() => {
          handleActiveItem();
        }, DELAY_MS);
      }}
    >
      <VideoPlayerWrapped
        film={film}
        id={id}
        isPlaying={id === activeItem}
        activeItem={activeItem}
      />
    </article>
  );
};

MovieCard.propTypes = MovieCardProps.propTypes;

export default MovieCard;
