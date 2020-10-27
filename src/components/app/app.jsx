import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
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
        <Route exact path="/"
          render={({history}) => (
            <Main
              films={films}
              onAvatarClick={() =>
                history.push(`/login`)}
              onMyListButtonClick={() =>
                history.push(`/mylist`)}
              onPlayButtonClick={() =>
                history.push(`/player/1`)}
              onMovieCardClick={() =>
                history.push(`/films/1`)}
            />
          )}
        />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist"
          render={({history}) => (
            <MyList
              films={films}
              onAvatarClick={() =>
                history.push(`/login`)}
              onMovieCardClick={() =>
                history.push(`/films/1`)}
            />
          )}
        />
        <Route exact path="/films/:id"
          render={({history}) => (
            <Film
              films={films}
              onAvatarClick={() =>
                history.push(`/login`)}
              onMyListButtonClick={() =>
                history.push(`/mylist`)}
              onPlayButtonClick={() =>
                history.push(`/player/1`)}
              onMovieCardClick={() =>
                history.push(`/films/2`)}
              onAddReviewButtonClick={() =>
                history.push(`/films/1/review`)}
            />
          )}
        />
        <Route exact path="/films/:id/review"
          render={({history}) => (
            <AddReview
              films={films}
              onAvatarClick={() =>
                history.push(`/login`)}
            />
          )}
        />
        <Route exact path="/player/:id" component={Player} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    plot: PropTypes.string.isRequired,
    reviewsCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    poster: PropTypes.string.isRequired,
    durationMinutes: PropTypes.number.isRequired
  })).isRequired,
};

export default App;
