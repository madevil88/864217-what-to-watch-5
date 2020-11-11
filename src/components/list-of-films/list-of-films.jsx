import React, {PureComponent} from "react";
import {INITIAL_GENRE} from "../../const";
import MainProps from "../main/main-props";
import MovieCard from "../movie-card/movie-card";

class ListOfFilms extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ``,
      activePlayerId: -1
    };
  }

  render() {
    const {films, filmsCount = films.length, currentGenre} = this.props;
    const {activePlayerId} = this.state;

    return (
      films.filter((film) => {
        if (currentGenre !== INITIAL_GENRE) {
          return currentGenre === film.genre;
        }
        return true;
      })
      .map((film, i) => {
        if (i >= filmsCount) {
          return null;
        } else {
          return (
            <React.Fragment key={i}>
              <MovieCard
                film={film}
                id={i}
                mouseOver={() => {
                  this.setState({
                    activeCard: film,
                  });
                }}
                onMouseOverOnCard={() => this.setState({
                  activePlayerId: activePlayerId === i ? -1 : i
                })}
                onMouseOutCard={() => this.setState({
                  activePlayerId: activePlayerId === -1
                })}
                activePlayerId={activePlayerId}
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
