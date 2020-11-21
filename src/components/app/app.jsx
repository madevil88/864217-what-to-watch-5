import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import AppProps from "./app-props";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id"
          render={() => (
            <Film />
          )}
        />
        <Route exact path="/films/:id/review"
          render={() => (
            <AddReview />
          )}
        />
        <Route exact path="/player/:id"
          render={(serviceProps) => (
            <Player
              films={films}
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
  films: state.films,
});

export {App};
export default connect(mapStateToProps)(App);
