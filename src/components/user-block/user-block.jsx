import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";
import {getAuthorizationStatus} from "../../store/selectors";

const UserBlock = (props) => {
  const {authorizationStatus} = props;
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="../../img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-block">
        <Link to={AppRoute.LOGIN}>
          <span className="user-block__link">Sign in</span>
        </Link>
      </div>
    );
  }
};

UserBlock.propTypes = {};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);

