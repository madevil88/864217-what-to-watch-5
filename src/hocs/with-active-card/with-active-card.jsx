import React from "react";
import {InitialState} from "../../const";
import MainProps from "../../components/main/main-props";

const withActiveCard = (Component) => {
  class WithActiveCard extends React.Component {
    constructor(props) {
      super(props);


      this.state = {
        activeCard: ``,
      };

      this.handleOverOnCard = this.handleOverOnCard.bind(this);
    }

    getFilteredFilms(films, currentGenre, getFilteredFilmsCount) {
      const filteredFilms = films.filter((film) => {
        if (currentGenre !== InitialState.GENRE) {
          return currentGenre === film.genre;
        }
        return true;
      });
      getFilteredFilmsCount(filteredFilms.length);
      return filteredFilms;
    }

    handleOverOnCard(film) {
      this.setState({
        activeCard: film,
      });
    }

    render() {
      const {activeCard} = this.state;

      return (
        <Component
          {...this.props}
          activeCard={activeCard}
          getFilteredFilms={this.getFilteredFilms}
          handleOverOnCard={this.handleOverOnCard}
        />
      );
    }

    shouldComponentUpdate(nextProps) {
      const {currentGenre} = this.props;
      return !(currentGenre === nextProps.currentGenre);

    }
  }

  WithActiveCard.propTypes = MainProps.propTypes;

  return WithActiveCard;
};


export default withActiveCard;
