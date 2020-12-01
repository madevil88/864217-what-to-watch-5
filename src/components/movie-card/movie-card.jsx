import React, {PureComponent} from "react";
import MovieCardProps from "./movie-card-props";
import VideoPlayer from "../video-player/video-player";
import withVideo from "../../hocs/with-video/with-video";

const VideoPlayerWrapped = withVideo(VideoPlayer);

const DELAY_MS = 1000;

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {handleActiveItem} = this.props;
    this.handleOnMouseOver = (id) => {
      this.timeoutOnMouseOver = setTimeout(() => {
        handleActiveItem(id);
      }, DELAY_MS);
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutOnMouseOver);
  }

  render() {
    const {film, id, handleActiveItem, activeItem} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          this.handleOnMouseOver(id);
        }}
        onMouseOut={() => {
          handleActiveItem();
          clearTimeout(this.timeoutOnMouseOver);
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
  }
}

MovieCard.propTypes = MovieCardProps.propTypes;

export default MovieCard;
