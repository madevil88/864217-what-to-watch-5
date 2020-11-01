import React, {PureComponent, createRef} from "react";
import VideoPlayerProps from "./video-player-props";

class VideoPlayer extends PureComponent {
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
    const {src, width, height, isPlaying} = this.props;
    const {isLoading} = this.state;

    return (
      <video
        src={src}
        width={width}
        height={height}
        autoPlay={!isLoading && isPlaying}
        muted={true}
        ref={this._videoRef}
      ></video>
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

VideoPlayer.propTypes = VideoPlayerProps.propTypes;

export default VideoPlayer;
