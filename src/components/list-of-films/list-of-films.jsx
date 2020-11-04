import React, {PureComponent} from "react";
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
    const {films, filmsCount = films.length, renderPlayer} = this.props;
    const {activePlayerId} = this.state;

    return (
      films.filter((film) => {
        return films[0].genre === film.genre;
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
                renderPlayer={renderPlayer}
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
