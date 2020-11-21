import React, {PureComponent} from "react";
import MainProps from "../../components/main/main-props";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: (props.initialActiveItem || 0)
      };

      this.handleActiveItem = this.handleActiveItem.bind(this);
    }

    handleActiveItem(id) {
      if (id >= 0) {
        this.setState({
          activeItem: this.activeItem = id
        });
      } else {
        this.setState({
          activeItem: this.activeItem === -1
        });
      }
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          handleActiveItem={this.handleActiveItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = MainProps.propTypes;

  return WithActiveItem;
};

export default withActiveItem;
