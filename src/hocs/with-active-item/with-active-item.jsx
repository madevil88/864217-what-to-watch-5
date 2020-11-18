import React, {PureComponent} from "react";
import MainProps from "../../components/main/main-props";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeId: 0
      };

      if (Component.name === `WithActiveCard`) {
        this.state = {
          activeId: -1
        };
      }

      this.handleOverOnItem = this.handleOverOnItem.bind(this);
      this.handleOutItem = this.handleOutItem.bind(this);
      this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOverOnItem(id) {
      this.setState({
        activeId: this.activeId === id ? -1 : id
      });
    }

    handleOutItem() {
      this.setState({
        activeId: this.activeId === -1
      });
    }

    handleOnClick(id) {
      this.setState({
        activeId: this.activeId = id
      });
    }

    render() {
      const {activeId} = this.state;

      return (
        <Component
          {...this.props}
          activeId={activeId}
          handleOverOnItem={this.handleOverOnItem}
          handleOutItem={this.handleOutItem}
          handleOnClick={this.handleOnClick}
        />
      );
    }
  }

  WithActiveItem.propTypes = MainProps.propTypes;

  return WithActiveItem;
};

export default withActiveItem;
