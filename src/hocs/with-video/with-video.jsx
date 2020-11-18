import React, {createRef, PureComponent} from "react";
import MainProps from "../main/main-props";

const FilmSize = {
  WIDTH: 280,
  HEIGHT: 175
};

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
    }

    render() {
      const {film, isPlaying} = this.props;
      const {isLoading} = this.state;

      return (
        <Component
          {...this.props}
        >
          <video
            src={film.src}
            width={FilmSize.WIDTH}
            height={FilmSize.HEIGHT}
            autoPlay={!isLoading && isPlaying}
            muted={true}
            ref={this._videoRef}
          ></video>
        </Component>
      );
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.props;
      const {isLoading} = this.state;

      if (!isLoading && isPlaying) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  }

  WithVideo.propTypes = MainProps.propTypes;

  return WithVideo;
};

export default withVideo;
