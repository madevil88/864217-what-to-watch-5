import React from "react";
import {Switch, Route, Router as BrowserRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute, AuthorizationStatus} from "../../const";
import {getFilms, getAuthorizationStatus} from "../../store/selectors";
import browserHistory from "../../browser-history";
import AppProps from "./app-props";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import PrivateRoute from "../private-route/private-route";
import withInputLogin from "../../hocs/with-input-login/with-input-login";

const SignInWrapped = withInputLogin(SignIn);

const App = (props) => {
  const {films, authorizationStatus} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          {(authorizationStatus === AuthorizationStatus.AUTH) ?
            <Redirect to={AppRoute.ROOT} /> :
            <SignInWrapped />
          }
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => {
            return (
              <MyList />
            );
          }}
        />
        <Route exact path={AppRoute.FILM}
          render={(serviceProps) => (
            <Film
              id={serviceProps.match.params.id}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.ADD_REVIEW}
          render={(serviceProps) => {
            return (
              <AddReview
                id={serviceProps.match.params.id}
              />
            );
          }}
        />
        <Route exact path={AppRoute.PLAYER}
          render={(serviceProps) => (
            <Player
              allFilms={films.allFilms}
              id={serviceProps.match.params.id}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = AppProps.propTypes;

const mapStateToProps = (state) => ({
  films: {
    allFilms: getFilms(state),
  },
  authorizationStatus: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
