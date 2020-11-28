import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {RexExp, ErrorMessageMap} from "../../const";
import {login} from "../../store/api-actions";
import {getLoginStatus} from "../../store/selectors";

const validate = ({emailInput, passwordInput})=>{
  let isValid = true;
  const messages = [];

  if (!emailInput) {
    isValid = false;
    messages.push(`Empty email.`);
  }

  if (emailInput && !RexExp.EMAIL.test(emailInput)) {
    isValid = false;
    messages.push(`Incorrect email.`);
  }

  if (!passwordInput) {
    isValid = false;
    messages.push(`Empty password.`);
  }

  return {isValid, messages};
};

const SignIn = (props) => {
  const {handleFieldChange, emailInput, passwordInput, onSubmit, loginStatus} = props;
  const {isValid, messages} = validate({emailInput, passwordInput});

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit({
              email: emailInput,
              password: passwordInput,
            });
          }}
        >
          {loginStatus && <div>{ErrorMessageMap[loginStatus]}</div>}
          {!isValid && messages.map((message, i)=><div key={i}>{message}</div>)}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={handleFieldChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={handleFieldChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              disabled={!isValid}
            >Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  emailInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  loginStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  loginStatus: getLoginStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
