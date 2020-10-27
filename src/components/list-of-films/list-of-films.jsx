import React, {PureComponent} from "react";
import MainProps from "../main/main-props";
import MovieCard from "../movie-card/movie-card";

class ListOfFilms extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
    };
  }

  render() {
    const {films, filmsCount = films.length, onMovieCardClick} = this.props;

    return (
      films.map((film, i) => {
        if (i >= filmsCount) {
          return null;
        } else {
          return (
            <React.Fragment key={i}>
              <MovieCard
                film={film}
                mouseOver={() => {
                  this.setState({
                    activeCard: film,
                  });
                }}
                onMovieCardClick={onMovieCardClick}
              />
            </React.Fragment>
          );
        }
      })
    );
  }
}

ListOfFilms.propTypes = MainProps.propTypes;

export default ListOfFilms;
