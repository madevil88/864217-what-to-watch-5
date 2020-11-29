import React, {PureComponent} from "react";
import MainProps from "../../components/main/main-props";

const withInputLogin = (Component) => {
  class WithInputLogin extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        emailInput: ``,
        passwordInput: ``
      };
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(evt) {
      if (evt.target.name === `user-email`) {
        this.setState({emailInput: evt.target.value});
      } else {
        this.setState({passwordInput: evt.target.value});
      }
    }

    render() {
      const {emailInput, passwordInput} = this.state;

      return (
        <Component
          {...this.props}
          emailInput={emailInput}
          passwordInput={passwordInput}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  WithInputLogin.propTypes = MainProps.propTypes;

  return WithInputLogin;
};


export default withInputLogin;

