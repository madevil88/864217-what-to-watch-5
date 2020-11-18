import React, {PureComponent} from "react";
import MainProps from "../../components/main/main-props";

const withInputValue = (Component) => {
  class WithInputValue extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        ratingInput: 3,
        reviewText: ``
      };
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    handleFieldChange(evt) {
      if (evt.target.type === `radio`) {
        this.setState({ratingInput: evt.target.value});
      } else {
        this.setState({reviewText: evt.target.value});
      }
    }

    render() {
      const {ratingInput, reviewText} = this.state;

      return (
        <Component
          {...this.props}
          ratingInput={ratingInput}
          reviewText={reviewText}
          handleSubmit={this.handleSubmit}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  WithInputValue.propTypes = MainProps.propTypes;

  return WithInputValue;
};


export default withInputValue;
