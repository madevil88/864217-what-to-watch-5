import React, {PureComponent} from "react";
import MainProps from "../../components/main/main-props";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);


      this.state = {
        activeCard: ``,
      };

      this.handleOverOnCard = this.handleOverOnCard.bind(this);
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
          handleOverOnCard={this.handleOverOnCard}
        />
      );
    }
  }

  WithActiveCard.propTypes = MainProps.propTypes;

  return WithActiveCard;
};


export default withActiveCard;
