import PropTypes from "prop-types";

const MainProps = () => {
  return ({
    films: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      plot: PropTypes.string.isRequired,
      reviewsCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      poster: PropTypes.string.isRequired,
      durationMinutes: PropTypes.number.isRequired
    })).isRequired,
  });
};

export default MainProps;
