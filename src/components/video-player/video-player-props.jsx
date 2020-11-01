import PropTypes from "prop-types";

const VideoPlayerProps = () => {
  return ({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    isPlaying: PropTypes.boolean.isRequired,
  });
};

export default VideoPlayerProps;
